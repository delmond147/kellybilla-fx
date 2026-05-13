"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, MapPin, ArrowRight } from "lucide-react";

export function Contact() {
    const fadeUpVariant: any = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="py-24 relative transition-colors duration-500" id="contact">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E40914]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="w-[95%] max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUpVariant}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 transition-colors duration-500">Let's <span className="text-[#E40914]">Connect</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto transition-colors duration-500">
                        Ready to take your trading to the institutional level? Send a message and my team will get back to you within 24 hours.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">

                    {/* Contact Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUpVariant}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4 p-6 rounded-2xl glass hover:bg-foreground/5 border border-transparent hover:border-border group transition-all duration-500 shadow-border hover:shadow-border-hover">
                            <div className="w-12 h-12 rounded-xl bg-[#E40914]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <MessageSquare className="w-6 h-6 text-[#E40914]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-1 transition-colors duration-500">Direct WhatsApp</h3>
                                <p className="text-muted-foreground text-sm mb-3 transition-colors duration-500">Fastest response time for enrollment queries.</p>
                                <a href="#" className="text-[#E40914] flex items-center gap-2 text-sm font-semibold hover:underline">
                                    Chat Now <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 rounded-2xl glass hover:bg-foreground/5 border border-transparent hover:border-border group transition-all duration-500 shadow-border hover:shadow-border-hover">
                            <div className="w-12 h-12 rounded-xl bg-[#1E65F3]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6 text-[#1E65F3]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-1 transition-colors duration-500">Email Support</h3>
                                <p className="text-muted-foreground text-sm mb-3 transition-colors duration-500">For business inquiries and account issues.</p>
                                <a href="#" className="text-[#1E65F3] flex items-center gap-2 text-sm font-semibold hover:underline">
                                    support@kellybillafx.com <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 rounded-2xl glass hover:bg-foreground/5 border border-transparent hover:border-border group transition-all duration-500 shadow-border hover:shadow-border-hover">
                            <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <MapPin className="w-6 h-6 text-foreground transition-colors duration-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-1 transition-colors duration-500">Based In</h3>
                                <p className="text-muted-foreground text-sm transition-colors duration-500">Operating globally, serving traders worldwide with excellence.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="glass rounded-3xl p-8 border border-border transition-all duration-500 shadow-border hover:shadow-border-hover"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/80 pl-1 transition-colors duration-500">First Name</label>
                                    <Input type="text" placeholder="John" className="bg-background/50 border-border focus-visible:ring-[#E40914] h-12 transition-colors duration-500 text-foreground" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/80 pl-1 transition-colors duration-500">Last Name</label>
                                    <Input type="text" placeholder="Doe" className="bg-background/50 border-border focus-visible:ring-[#E40914] h-12 transition-colors duration-500 text-foreground" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/80 pl-1 transition-colors duration-500">Email Address</label>
                                <Input type="email" placeholder="john@example.com" className="bg-background/50 border-border focus-visible:ring-[#E40914] h-12 transition-colors duration-500 text-foreground" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/80 pl-1 transition-colors duration-500">How can we help?</label>
                                <textarea
                                    rows={4}
                                    placeholder="I'm interested in the Pro Mentorship..."
                                    className="flex w-full rounded-md border border-border bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E40914] transition-colors duration-500 font-sans resize-none"
                                />
                            </div>

                            <Button variant="accent" className="w-full h-14 text-lg font-bold">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
