"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface PaymentFlowProps {
    isOpen: boolean;
    onClose: () => void;
    packageName: string;
    packagePrice: number;
}

export function PaymentFlow({ isOpen, onClose, packageName, packagePrice }: PaymentFlowProps) {
    const [method, setMethod] = useState<"momo" | "usdt" | null>(null);

    // Placeholder phone number. Will be replaced by actual client number.
    const PHONE_NUMBER = "1234567890";
    const MENTOR_NAME = "Kelly";

    const handleConfirm = () => {
        if (!method) return;

        const message = `Hi ${MENTOR_NAME}, I want to enroll in the ${packageName} using ${method.toUpperCase()}. Please send me the payment details to get started!`;
        const encodedMessage = encodeURIComponent(message);
        const waUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;

        // Open in new tab
        window.open(waUrl, "_blank");
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Complete Your Enrollment">
            <div className="space-y-6">
                <div>
                    <p className="text-muted-foreground mb-2 font-sans transition-colors duration-500">You are selecting:</p>
                    <div className="p-4 rounded-lg bg-secondary border border-border flex justify-between items-center transition-colors duration-500">
                        <span className="font-semibold text-foreground font-serif transition-colors duration-500">{packageName}</span>
                        <span className="text-[#1E65F3] font-bold">${packagePrice}</span>
                    </div>
                </div>

                <div>
                    <p className="text-muted-foreground mb-3 font-sans transition-colors duration-500">Select Payment Method:</p>
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={() => setMethod("momo")}
                            className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 ${method === "momo"
                                ? "border-[#E40914] bg-[#E40914]/10 text-foreground"
                                : "border-border glass text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                                }`}
                        >
                            <span className="text-2xl">📱</span>
                            <span className="font-semibold">Mobile Money (MoMo)</span>
                        </button>
                        <button
                            onClick={() => setMethod("usdt")}
                            className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 ${method === "usdt"
                                ? "border-[#1E65F3] bg-[#1E65F3]/10 text-foreground"
                                : "border-border glass text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                                }`}
                        >
                            <span className="text-2xl">🪙</span>
                            <span className="font-semibold">Crypto (USDT)</span>
                        </button>
                    </div>
                </div>

                <Button
                    onClick={handleConfirm}
                    disabled={!method}
                    variant="primary"
                    className="w-full h-12 text-lg"
                >
                    {method ? "Proceed to WhatsApp" : "Select a method"}
                </Button>
            </div>
        </Modal>
    );
}
