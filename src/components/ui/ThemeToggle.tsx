"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-8 h-8 rounded-full bg-secondary" />;
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative flex items-center justify-center w-8 h-8 rounded-full transition-colors bg-secondary hover:bg-secondary/80 group overflow-hidden"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: isDark ? 1 : 0,
                    opacity: isDark ? 1 : 0,
                    rotate: isDark ? 0 : -90
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center text-[#1E65F3]"
            >
                <Moon className="w-4 h-4 fill-current" />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    scale: isDark ? 0 : 1,
                    opacity: isDark ? 0 : 1,
                    rotate: isDark ? 90 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center text-[#1E65F3]"
            >
                <Sun className="w-4 h-4 fill-current" />
            </motion.div>
        </button>
    );
}
