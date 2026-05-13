"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PaymentFlow } from "@/components/payment/PaymentFlow";
import { Check } from "lucide-react";
import { motion, Variants } from "framer-motion";

const PACKAGES = [
    {
        id: "essential",
        name: "Essential Blueprint",
        price: 100,
        description: "Perfect for beginners looking to master the fundamentals of forex trading.",
        features: [
            "Access to Beginner Course",
            "Weekly Market Breakdown",
            "Private Discord Community",
            "Basic Trade Setups"
        ],
        highlight: false,
    },
    {
        id: "pro",
        name: "Pro Mentorship",
        price: 299,
        description: "For intermediate traders ready to refine their edge and scale capital.",
        features: [
            "Advanced SMC Strategy",
            "Daily Market Breakdown",
            "1-on-1 Monthly Review",
            "VIP Discord & Signals",
            "Psychology Masterclass"
        ],
        highlight: true,
    },
    {
        id: "elite",
        name: "Elite Inner Circle",
        price: 500,
        description: "Direct access and personalized coaching for serious traders.",
        features: [
            "Everything in Pro Mentorship",
            "Weekly 1-on-1 Zoom Calls",
            "Custom Trading Plan",
            "Funded Account Guidance",
            "Lifetime Updates"
        ],
        highlight: false,
    }
];

export function Packages() {
    const [selectedPackage, setSelectedPackage] = useState<{ name: string, price: number } | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="py-24 relative transition-colors duration-500" id="packages">
            <div className="w-[95%] max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 transition-colors duration-500">Choose Your <span className="text-[#E40914]">Path</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto transition-colors duration-500">
                        Select the mentorship tier that fits your current level and goals. Frictionless enrollment starts here.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {PACKAGES.map((pkg) => (
                        <motion.div
                            key={pkg.id}
                            variants={itemVariants}
                            className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-500 hover:-translate-y-2 ${pkg.highlight
                                ? "bg-gradient-to-b from-[#1a1a24] to-[#0a0a0e] border-[1.5px] border-[#1E65F3] shadow-border-hover hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] scale-100 md:scale-105 z-10"
                                : "glass shadow-border hover:shadow-border-hover hover:border-[#1E65F3]/30"
                                }`}
                        >
                            {pkg.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1E65F3] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest hidden md:block">
                                    Most Popular
                                </div>
                            )}

                            <div>
                                <h3 className={`text-2xl font-serif mb-2 transition-colors duration-500 ${pkg.highlight ? "text-white" : "text-foreground"}`}>{pkg.name}</h3>
                                <p className={`text-sm h-10 transition-colors duration-500 ${pkg.highlight ? "text-white/70" : "text-muted-foreground"}`}>{pkg.description}</p>
                            </div>

                            <div className={`text-4xl font-bold tracking-tight transition-colors duration-500 ${pkg.highlight ? "text-white" : "text-foreground"}`}>
                                ${pkg.price}
                            </div>

                            <ul className="space-y-4 flex-1 mt-4">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className={`flex items-start gap-3 text-sm transition-colors duration-500 ${pkg.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                                        <Check className={`h-5 w-5 shrink-0 transition-colors duration-500 ${pkg.highlight ? "text-[#1E65F3]" : "text-[#E40914]"}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={pkg.highlight ? "primary" : "secondary"}
                                className="w-full mt-4"
                                onClick={() => setSelectedPackage({ name: pkg.name, price: pkg.price })}
                            >
                                Enroll Now
                            </Button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <PaymentFlow
                isOpen={selectedPackage !== null}
                onClose={() => setSelectedPackage(null)}
                packageName={selectedPackage?.name || ""}
                packagePrice={selectedPackage?.price || 0}
            />
        </section>
    );
}
