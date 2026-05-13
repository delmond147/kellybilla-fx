"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
    {
        id: 1,
        question: "Do I need prior trading experience?",
        answer: "No. The Essential Blueprint is designed specifically for complete beginners. It takes you from understanding what a pip is, all the way to executing your first live trade safely."
    },
    {
        id: 2,
        question: "How long until I see results?",
        answer: "Trading is a marathon, not a sprint. While some students see consistency within 3-6 months, we focus on building sustainable, long-term skills rather than get-rich-quick promises."
    },
    {
        id: 3,
        question: "What capital do I need to start?",
        answer: "You can start learning on a demo account with zero risk. Once you are consistently profitable, you can trade live with as little as $100 or take a prop firm challenge to manage larger capital."
    },
    {
        id: 4,
        question: "Is this a signal group?",
        answer: "No. While Pro and Elite students get access to live market breakdowns and trade setups, the ultimate goal is to teach you how to fish, so you can analyze the market and execute independently."
    },
    {
        id: 5,
        question: "Which payment methods do you accept?",
        answer: "To ensure a frictionless global experience, we currently accept Mobile Money (MoMo) and Cryptocurrency (USDT). Enrollment is handled directly alongside the mentor via WhatsApp."
    }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
    return (
        <div className="border-b border-border last:border-0 transition-colors duration-500">
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-[#1E65F3]"
            >
                <span className="text-lg font-medium text-foreground transition-colors duration-500">{question}</span>
                <ChevronDown
                    className={cn(
                        "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-180 text-[#1E65F3]"
                    )}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-muted-foreground leading-relaxed font-sans pr-12 transition-colors duration-500">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FAQ() {
    const [openId, setOpenId] = useState<number | null>(1);

    const fadeUpVariant: any = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="py-24 relative transition-colors duration-500" id="faq">
            <div className="w-[95%] max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUpVariant}
                        className="lg:col-span-4"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 transition-colors duration-500">Got <span className="text-[#1E65F3]">Questions?</span></h2>
                        <p className="text-muted-foreground mb-8 transition-colors duration-500">
                            Everything you need to know about the academy, the mentorship process, and what it takes to succeed.
                        </p>
                        <div className="hidden lg:block w-32 h-1 bg-gradient-to-r from-[#1E65F3] to-transparent rounded-full opacity-50"></div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUpVariant}
                        className="lg:col-span-8 glass rounded-2xl p-6 md:p-10 border border-border transition-all duration-500 shadow-border hover:shadow-border-hover"
                    >
                        <div className="divide-y divide-border transition-colors duration-500">
                            {FAQS.map((faq) => (
                                <FAQItem
                                    key={faq.id}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openId === faq.id}
                                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                />
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
