"use client";

import { useEffect, useRef } from "react";
import { useAnimate, motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        id: 1,
        name: "James T.",
        role: "Funded Trader ($100k)",
        text: "Before KellyBillaFX, I was jumping from strategy to strategy. The focus on psychology and risk management completely changed my trajectory. I just secured my first 100k payout.",
        rating: 5
    },
    {
        id: 2,
        name: "Sarah M.",
        role: "Pro Mentorship Student",
        text: "The institutional concepts broke my bad habits. Taking partials and leaving runners was something I always struggled with. Highly recommend the Elite circle if you're serious.",
        rating: 5
    },
    {
        id: 3,
        name: "David K.",
        role: "Beginner Trader",
        text: "I knew nothing about forex 6 months ago. The Essential Blueprint is exactly what it sounds like. No BS, just structured learning from A to Z.",
        rating: 5
    }
];

export function Testimonials() {
    const fadeUpVariant: any = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const [scope, animate] = useAnimate();
    const controlsRef = useRef<any>(null);

    useEffect(() => {
        if (scope.current) {
            controlsRef.current = animate(
                scope.current,
                { x: ["0%", "-50%"] },
                { duration: 40, repeat: Infinity, ease: "linear" }
            );
        }
        return () => {
            if (controlsRef.current) controlsRef.current.stop();
        };
    }, [animate, scope]);

    return (
        <section className="py-16 md:py-24 relative overflow-hidden transition-colors duration-500" id="testimonials">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1E65F3]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-[95%] max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUpVariant}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 transition-colors duration-500">Results Speak <span className="text-[#1E65F3]">Louder</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto transition-colors duration-500">
                        Don't just take my word for it. See what students are achieving inside the academy.
                    </p>
                </motion.div>

                <div className="relative max-w-[100vw] overflow-hidden -mx-6 px-6 mask-edges">
                    <motion.div
                        ref={scope}
                        className="flex w-max"
                        onHoverStart={() => controlsRef.current?.pause()}
                        onHoverEnd={() => controlsRef.current?.play()}
                    >
                        {/* We use two identical sets to create a seamless loop. 
                            Each set contains the original items repeated twice just to be sure it spans the screen width. */}
                        {[0, 1].map((setIndex) => (
                            <div key={`set-${setIndex}`} className="flex gap-8 pr-8 w-max">
                                {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
                                    <div
                                        key={`${setIndex}-${testimonial.id}-${i}`}
                                        className="glass p-8 rounded-2xl relative border border-border hover:border-[#1E65F3]/30 transition-all duration-500 shadow-border hover:shadow-border-hover w-[300px] sm:w-[350px] md:w-[400px] shrink-0"
                                    >
                                        <Quote className="absolute top-6 right-6 w-10 h-10 text-foreground/5 rotate-180 transition-colors duration-500" />

                                        <div className="flex gap-1 mb-6">
                                            {[...Array(testimonial.rating)].map((_, index) => (
                                                <Star key={index} className="w-4 h-4 fill-[#1E65F3] text-[#1E65F3]" />
                                            ))}
                                        </div>

                                        <p className="text-foreground/80 leading-relaxed text-sm mb-8 relative z-10 font-sans transition-colors duration-500 whitespace-normal">
                                            "{testimonial.text}"
                                        </p>

                                        <div className="flex items-center gap-4 border-t border-border pt-6 transition-colors duration-500">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E65F3] to-[#8a6e12] flex items-center justify-center font-bold text-black text-sm">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="text-foreground font-bold text-sm tracking-wide transition-colors duration-500">{testimonial.name}</h4>
                                                <p className="text-muted-foreground text-xs transition-colors duration-500">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
