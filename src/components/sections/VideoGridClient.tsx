"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { YouTubeVideo } from "@/lib/youtube";

export function VideoGridClient({ videos }: { videos: YouTubeVideo[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videos.map((video, index) => (
                <motion.a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={video.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="group relative rounded-2xl overflow-hidden glass border-border hover:border-red-500/50 transition-all block shadow-border hover:shadow-border-hover"
                >
                    {/* Thumbnail Container */}
                    <div className="relative aspect-video overflow-hidden">
                        <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center text-white opacity-90 scale-75 md:opacity-0 md:scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 backdrop-blur-sm">
                                <Play className="w-8 h-8 ml-1" fill="currentColor" />
                            </div>
                        </div>
                    </div>

                    {/* Video Info */}
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 leading-snug group-hover:text-red-400 transition-colors duration-500" dangerouslySetInnerHTML={{ __html: video.title }} />
                        <div className="flex items-center text-sm text-muted-foreground font-sans gap-3 transition-colors duration-500">
                            <span>{video.views} views</span>
                            <span className="w-1 h-1 rounded-full bg-border"></span>
                            <span>{video.publishedAt}</span>
                        </div>
                    </div>
                </motion.a>
            ))}
        </div>
    );
}
