"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Send, ArrowRight } from "lucide-react";

export function Contact() {
    const fadeUpVariant: any = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        // Formspree integration (replace 'xoqgzpbd' with actual ID)
        try {
            const response = await fetch("https://formspree.io/f/mpqbvdkq", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    message: formData.message
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ firstName: "", lastName: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <section className="py-16 md:py-24 relative transition-colors duration-500" id="contact">
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
                                <a href="https://wa.me/237677815907" target="_blank" rel="noopener noreferrer" className="text-[#E40914] flex items-center gap-2 text-sm font-semibold hover:underline">
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
                                <a href="mailto:billanahgwa@gmail.com" className="text-[#1E65F3] flex items-center gap-2 text-sm font-semibold hover:underline">
                                    billanahgwa@gmail.com <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 rounded-2xl glass hover:bg-foreground/5 border border-transparent hover:border-border group transition-all duration-500 shadow-border hover:shadow-border-hover">
                            <div className="w-12 h-12 rounded-xl bg-[#229ED9]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Send className="w-6 h-6 text-[#229ED9]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-1 transition-colors duration-500">Telegram Community</h3>
                                <p className="text-muted-foreground text-sm mb-3 transition-colors duration-500">Join our free public channel for market updates and setups.</p>
                                <a href="https://t.me/+xMqfUsDrsD00Yzhk" target="_blank" rel="noopener noreferrer" className="text-[#229ED9] flex items-center gap-2 text-sm font-semibold hover:underline">
                                    Join Channel <ArrowRight className="w-4 h-4" />
                                </a>
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
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/80 pl-1 transition-colors duration-500">First Name</label>
                                    <Input
                                        type="text"
                                        placeholder="John"
                                        required
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        className="bg-background/50 border-border focus-visible:ring-[#E40914] h-12 transition-colors duration-500 text-foreground"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/80 pl-1 transition-colors duration-500">Last Name</label>
                                    <Input
                                        type="text"
                                        placeholder="Doe"
                                        required
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        className="bg-background/50 border-border focus-visible:ring-[#E40914] h-12 transition-colors duration-500 text-foreground"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/80 pl-1 transition-colors duration-500">Email Address</label>
                                <Input
                                    type="email"
                                    placeholder="john@example.com"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="bg-background/50 border-border focus-visible:ring-[#E40914] h-12 transition-colors duration-500 text-foreground"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/80 pl-1 transition-colors duration-500">How can we help?</label>
                                <textarea
                                    rows={4}
                                    placeholder="I'm interested in the Pro Mentorship..."
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="flex w-full rounded-md border border-border bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E40914] transition-colors duration-500 font-sans resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                variant="accent"
                                className="w-full h-14 text-lg font-bold disabled:opacity-70"
                                disabled={status === "sending" || status === "success"}
                            >
                                {status === "sending" ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </div>
                                ) : status === "success" ? (
                                    "Message Sent! ✅"
                                ) : status === "error" ? (
                                    "Error! Try Again ❌"
                                ) : (
                                    "Send Message"
                                )}
                            </Button>

                            {status === "success" && (
                                <p className="text-green-500 text-center text-sm font-medium animate-in fade-in slide-in-from-top-2">
                                    Thank you! Your message has been delivered directly.
                                </p>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
