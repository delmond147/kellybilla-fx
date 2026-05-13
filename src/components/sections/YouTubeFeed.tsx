import { Play, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getLatestVideos, YouTubeVideo } from "@/lib/youtube";
import { VideoGridClient } from "./VideoGridClient";

// Fallback data in case the API limit is reached or fails
const MOCK_VIDEOS: YouTubeVideo[] = [
    {
        id: "vid1",
        title: "SMC Trading Strategy: The ONLY Setup You Need",
        thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
        views: "125K",
        publishedAt: "2 days ago"
    },
    {
        id: "vid2",
        title: "How I Pass Prop Firm Challenges (Live Execution)",
        thumbnail: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=2030&auto=format&fit=crop",
        views: "89K",
        publishedAt: "1 week ago"
    },
    {
        id: "vid3",
        title: "Trading Psychology: Stop Revenge Trading",
        thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop",
        views: "201K",
        publishedAt: "2 weeks ago"
    }
];

export async function YouTubeFeed() {
    let videos = await getLatestVideos(3);

    // If the API failed to fetch (e.g., quota exceeded or no key), fallback to mock data
    if (videos.length === 0) {
        videos = MOCK_VIDEOS;
    }

    return (
        <section className="py-16 md:py-24 relative transition-colors duration-500" id="youtube">
            <div className="w-[95%] max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-sm font-semibold mb-6">
                        <Play className="w-4 h-4" /> Watch & Learn
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 transition-colors duration-500">Latest Market <span className="text-red-500">Insights</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto transition-colors duration-500">
                        Catch my latest weekly breakdowns and strategy deep-dives completely for free on YouTube.
                    </p>
                </div>

                <VideoGridClient videos={videos} />

                <div className="mt-16 flex justify-center">
                    <a href={`https://youtube.com/${process.env.YOUTUBE_CHANNEL_HANDLE || '@KellyBillaFX'}`} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="accent" className="gap-2 px-8">
                            <Youtube className="w-5 h-5" /> View More on YouTube
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
