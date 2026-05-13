import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import { ThemeProvider } from '@/components/ThemeProvider';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

export const metadata: Metadata = {
  title: "KellyBillaFX | Professional Forex Mentorship",
  description: "Aspiring and intermediate forex traders looking for structured mentorship. Professionalism, transparency, and seamless enrollment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${poppins.variable} font-sans antialiased min-h-screen text-foreground bg-background transition-colors duration-500`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
