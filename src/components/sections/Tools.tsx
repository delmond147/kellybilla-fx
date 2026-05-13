"use client";

import { useState } from "react";
import { PositionSize } from "../calculators/PositionSize";
import { RiskReward } from "../calculators/RiskReward";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Tools() {
    const [activeTab, setActiveTab] = useState<"position" | "risk">("position");

    return (
        <section className="py-16 md:py-24 relative overflow-hidden" id="tools">
            <div className="w-[95%] max-w-7xl mx-auto px-6 relative z-10 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 transition-colors duration-500">Precision <span className="text-[#1E65F3]">Tools</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto transition-colors duration-500">
                        Transparency is key. Use our premium calculators to manage your risk dynamically before you take a trade.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex p-1 bg-secondary border border-border rounded-lg w-fit mx-auto mb-8 relative transition-colors duration-500">
                    <button
                        onClick={() => setActiveTab("position")}
                        className={cn(
                            "relative px-6 py-2 text-sm font-medium transition-colors rounded-md z-10",
                            activeTab === "position" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        Position Size
                        {activeTab === "position" && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-[#1E65F3] rounded-md -z-10"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </button>

                    <button
                        onClick={() => setActiveTab("risk")}
                        className={cn(
                            "relative px-6 py-2 text-sm font-medium transition-colors rounded-md z-10",
                            activeTab === "risk" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        Risk / Reward
                        {activeTab === "risk" && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-[#E40914] rounded-md -z-10"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </button>
                </div>

                {/* Content */}
                <div className="relative min-h-[500px]">
                    <AnimatePresence mode="wait">
                        {activeTab === "position" ? (
                            <motion.div
                                key="position"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 max-w-2xl mx-auto w-full"
                            >
                                <PositionSize />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="risk"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 max-w-2xl mx-auto w-full"
                            >
                                <RiskReward />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
