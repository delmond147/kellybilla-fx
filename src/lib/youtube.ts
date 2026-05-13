export interface YouTubeVideo {
    id: string;
    title: string;
    thumbnail: string;
    views: string; // We'll keep this as a string to match the UI component, though we may need to fetch statistics to get actual views
    publishedAt: string;
}

// Helper to format date relative to now (e.g. "2 days ago")
function formatTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    return Math.floor(seconds) + " seconds ago";
}

// Function to format view count (e.g., 150000 -> 150K)
function formatViews(viewCount: string): string {
    const views = parseInt(viewCount, 10);
    if (isNaN(views)) return "0 views";

    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + "M";
    }
    if (views >= 1000) {
        return (views / 1000).toFixed(0) + "K";
    }
    return views.toString();
}

export async function getLatestVideos(maxResults: number = 3): Promise<YouTubeVideo[]> {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const handle = process.env.YOUTUBE_CHANNEL_HANDLE;

    if (!apiKey) {
        console.error("YOUTUBE_API_KEY is missing in environment variables.");
        return [];
    }

    // Default channel ID if handle lookup fails or isn't used
    let channelId = "UCDw6G57H5K7q2lX4_vGzWLA"; // Placeholder, we need to resolve the handle first if possible

    try {
        // Step 1: Resolve Handle to Channel ID if we have a handle
        if (handle) {
            const handleWithoutAt = handle.startsWith('@') ? handle.substring(1) : handle;
            const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(handleWithoutAt)}&key=${apiKey}`;
            const searchRes = await fetch(searchUrl, { next: { revalidate: 3600 } }); // Cache for 1 hour

            if (searchRes.ok) {
                const searchData = await searchRes.json();
                if (searchData.items && searchData.items.length > 0) {
                    channelId = searchData.items[0].snippet.channelId;
                }
            }
        }

        if (!channelId) {
            console.error("Could not resolve YOUTUBE_CHANNEL_HANDLE to a channel ID.");
            return [];
        }

        // Step 2: Fetch latest videos from the channel
        const videosUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&type=video&key=${apiKey}`;
        const videosRes = await fetch(videosUrl, { next: { revalidate: 3600 } }); // Cache for 1 hour

        if (!videosRes.ok) {
            throw new Error(`Failed to fetch videos: ${videosRes.statusText}`);
        }

        const data = await videosRes.json();

        if (!data.items || data.items.length === 0) {
            return [];
        }

        // Step 3: Fetch video statistics to get view counts (Search API doesn't return views)
        const videoIds = data.items.map((item: any) => item.id.videoId).join(',');
        const statsUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${apiKey}`;
        const statsRes = await fetch(statsUrl, { next: { revalidate: 3600 } });

        let statsMap: Record<string, string> = {};
        if (statsRes.ok) {
            const statsData = await statsRes.json();
            if (statsData.items) {
                statsData.items.forEach((item: any) => {
                    statsMap[item.id] = item.statistics.viewCount || "0";
                });
            }
        }

        // Map the data to our interface
        return data.items.map((item: any): YouTubeVideo => {
            const videoId = item.id.videoId;
            const rawViewCount = statsMap[videoId] || "0";

            return {
                id: videoId,
                title: item.snippet.title,
                // Use highres thumbnail if available, otherwise medium
                thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
                views: formatViews(rawViewCount),
                publishedAt: formatTimeAgo(item.snippet.publishedAt)
            };
        });

    } catch (error) {
        console.error("Error fetching YouTube videos:", error);
        return [];
    }
}
