"use client";


import { Tools } from "@/components/sections/Tools";
import { Packages } from "@/components/sections/Packages";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { motion, Variants } from "framer-motion";
import { BookOpen, TrendingUp, Users, Send, Youtube, Facebook } from "lucide-react";
import React from "react";

const TikTokIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

export function ClientHome({ youtubeFeed }: { youtubeFeed: React.ReactNode }) {
    const fadeUpVariant: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <main className="min-h-screen overflow-x-hidden selection:bg-[#1E65F3] selection:text-black relative">
            {/* Global Fixed Background */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                <img
                    src="/bubble-bg.jpg"
                    alt="Global Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1E65F3]/30" />
                <div className="absolute inset-0 bg-background/70" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-background/40 backdrop-blur-2xl shadow-xl rounded-full py-3 px-4 md:px-6 transition-all duration-500">
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="KellyBilla FX Logo" className="w-12 h-12 object-contain rounded-full" />
                        <div className="flex flex-col">
                            <a href="#" className="font-serif text-xl font-bold tracking-tighter text-foreground leading-none">
                                KellyBilla<span className="text-[#E40914]">FX</span>
                            </a>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium mt-1">Academy</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-bold text-foreground/70">
                        <a href="#features" className="hover:text-foreground transition-colors">Features</a>
                        <a href="#packages" className="hover:text-foreground transition-colors">Mentorship</a>
                        <a href="#youtube" className="hover:text-foreground transition-colors">Insights</a>
                        <a href="#tools" className="hover:text-foreground transition-colors">Tools</a>
                        <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <ThemeToggle />
                        <Button variant="primary" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Contact Us
                        </Button>
                    </div>
                </div>
            </nav>

            {/* 1. Hero Section */}
            <section className="relative min-h-[500px] md:min-h-[578px] flex items-center mb-4 pt-32 md:pt-40 pb-16 md:pb-0 overflow-hidden">

                {/* Hero Image & Brand Color Glows */}
                <div
                    className="absolute right-0 bottom-0 top-0 w-full lg:w-[65%] z-0 pointer-events-none flex items-end justify-end transition-colors duration-500"
                >
                    {/* Brand Color Glows */}
                    <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#1E65F3]/20 rounded-full blur-[100px] -z-10" />
                    <div className="absolute right-[30%] bottom-0 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-[#E40914]/10 rounded-full blur-[100px] -z-10" />

                    <img
                        src="/hero-image.png"
                        alt="Hero Foreground"
                        className="w-auto h-[130%] object-contain object-bottom origin-bottom-right"
                        style={{ WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)', maskImage: 'linear-gradient(to top, transparent 0%, black 15%)' }}
                    />

                    {/* Fading blue localized only to the legs (bottom right) so it doesn't cover the face or body */}
                    <div className="absolute bottom-0 right-0 w-full max-w-[600px] h-32 bg-[radial-gradient(ellipse_at_bottom,rgba(30,101,243,0.3)_0%,transparent_70%)] pointer-events-none" />
                </div>



                <div className="w-[95%] max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pointer-events-none">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariant}
                        className="max-w-2xl pointer-events-auto"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-[#1E65F3]/30 bg-[#1E65F3]/10 text-[#1E65F3] text-sm font-semibold mb-5">
                            Elite Forex Mentorship
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold text-foreground leading-[0.95] tracking-tight mb-6 transition-colors duration-500">
                            Master the Markets with <span className="text-[#1E65F3]">Precision.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg font-sans leading-snug transition-colors duration-500">
                            Stop guessing. Gain the institutional edge with structured coaching, premium calculators, and a community of dedicated traders.
                        </p>
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <Button variant="primary" className="h-11 px-5 sm:h-12 sm:px-6 text-sm sm:text-base font-semibold tracking-wide" onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}>
                                Start Your Journey
                            </Button>
                            <Button variant="secondary" className="h-11 px-5 sm:h-12 sm:px-6 text-sm sm:text-base font-semibold tracking-wide" onClick={() => window.open('https://t.me/+xMqfUsDrsD00Yzhk', '_blank')}>
                                Join Telegram Community
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Features / Value Proposition */}
            <section className="py-16 md:py-24 relative z-20 transition-colors duration-500" id="features">
                <div className="w-[95%] max-w-7xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUpVariant}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 transition-colors duration-500">The Institutional Edge</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto transition-colors duration-500">
                            We go beyond signal groups. We teach you how to analyze the market and execute independently.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{ y: -8 }}
                            viewport={{ once: true }}
                            variants={{ ...fadeUpVariant, visible: { ...fadeUpVariant.visible, transition: { delay: 0.1 } } }}
                            className="p-8 rounded-2xl glass hover:border-[#1E65F3]/50 transition-all duration-300 group shadow-border hover:shadow-border-hover"
                        >
                            <div className="h-12 w-12 rounded-lg bg-[#1E65F3]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <BookOpen className="h-6 w-6 text-[#1E65F3]" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3 transition-colors duration-500">Structured Curriculum</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm transition-colors duration-500">
                                A step-by-step roadmap from basic price action mechanics to advanced Smart Money Concepts. No fluff, just actionable knowledge.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{ y: -8 }}
                            viewport={{ once: true }}
                            variants={{ ...fadeUpVariant, visible: { ...fadeUpVariant.visible, transition: { delay: 0.2 } } }}
                            className="p-8 rounded-2xl glass hover:border-[#E40914]/50 transition-all duration-300 group shadow-border hover:shadow-border-hover"
                        >
                            <div className="h-12 w-12 rounded-lg bg-[#E40914]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <TrendingUp className="h-6 w-6 text-[#E40914]" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3 transition-colors duration-500">Live Market Execution</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm transition-colors duration-500">
                                Watch trades unfold live. Learn the psychology behind entries, risk management, and taking partials in real-time.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{ y: -8 }}
                            viewport={{ once: true }}
                            variants={{ ...fadeUpVariant, visible: { ...fadeUpVariant.visible, transition: { delay: 0.3 } } }}
                            className="p-8 rounded-2xl glass hover:border-[#1E65F3]/50 transition-all duration-300 group shadow-border hover:shadow-border-hover"
                        >
                            <div className="h-12 w-12 rounded-lg bg-[#1E65F3]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Users className="h-6 w-6 text-[#1E65F3]" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3 transition-colors duration-500">Elite Community</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm transition-colors duration-500">
                                Network with like-minded traders. Share setups, discuss psychology, and grow alongside individuals pushing for funding.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Packages / Monetization */}
            <Packages />

            {/* 4. YouTube Sections */}
            {youtubeFeed}

            {/* 5. Tools Section */}
            <Tools />

            {/* 6. Testimonials section */}
            <Testimonials />

            {/* 7. FAQs section */}
            <FAQ />

            {/* 8. Contact section */}
            <Contact />

            {/* Footer */}
            <footer className="py-8 md:py-12 border-t border-border text-center relative z-20 transition-colors duration-500" id="footer">
                <div className="w-[95%] max-w-7xl mx-auto px-6">
                    <div className="font-serif text-2xl font-bold tracking-tighter text-foreground/50 mb-6 transition-colors duration-500">
                        KellyBilla<span className="text-[#E40914]/50">FX</span>
                    </div>
                    <p className="text-muted-foreground/60 text-sm mb-6 max-w-md mx-auto transition-colors duration-500">
                        Trading foreign exchange carries a high level of risk, and may not be suitable for all investors. Past performance is not indicative of future results.
                    </p>

                    {/* Footer Socials */}
                    <div className="flex justify-center gap-6 mb-8">
                        <a href="https://t.me/+xMqfUsDrsD00Yzhk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/60 hover:text-[#229ED9] transition-colors"><Send className="w-5 h-5" /></a>
                        <a href="https://youtube.com/@KellyBillaFX" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/60 hover:text-[#ff0000] transition-colors"><Youtube className="w-5 h-5" /></a>
                        <a href="https://facebook.com/kellybillafx" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/60 hover:text-[#1877f2] transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="https://tiktok.com/@kellybillafx" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/60 hover:text-foreground transition-colors"><TikTokIcon className="w-5 h-5" /></a>
                    </div>

                    <p className="text-muted-foreground/50 text-xs text-sans transition-colors duration-500">
                        &copy; {new Date().getFullYear()} KellyBillaFX. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}
