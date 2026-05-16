"use client";

import { useState } from "react";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { ExternalLink, PlayCircle, CheckCircle2 } from "lucide-react";

interface BeginnerFlowProps {
    isOpen: boolean;
    onClose: () => void;
}

export function BeginnerFlow({ isOpen, onClose }: BeginnerFlowProps) {
    const [step, setStep] = useState(1);
    const [accessCode, setAccessCode] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [error, setError] = useState(false);

    const PARTNER_LINK = "https://one.exnesstrack.org/a/yhy4iuxjzd";
    const WHATSAPP_LINK = "https://wa.me/237677815907?text=" + encodeURIComponent("Hi Kelly, I have created my trading account. Please verify my Account ID so I can access the beginner lessons.");
    const DRIVE_LINK = "https://drive.google.com/drive/folders/YOUR_FOLDER_ID";

    // You can change this code to whatever you want to give to verified users
    const VALID_CODE = "KELLY@FX10!";

    const handleUnlock = () => {
        if (accessCode.toUpperCase() === VALID_CODE) {
            setIsUnlocked(true);
            setError(false);
            setStep(3);
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Unlock Beginner Mentorship">
            <div className="space-y-6 py-2">
                <div className="text-center space-y-1">
                    <p className="text-sm text-muted-foreground transition-colors duration-500">
                        Follow these steps to verify your account and get access.
                    </p>
                </div>

                <div className="space-y-4">
                    {/* Step 1: Signup */}
                    <div className={`relative p-5 rounded-2xl border transition-all duration-500 ${step >= 1 ? "bg-secondary/50 border-border" : "opacity-50"}`}>
                        <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-[#1E65F3] text-white flex items-center justify-center text-xs font-bold shadow-lg">1</div>
                        <div className="flex flex-col gap-3">
                            <div>
                                <h4 className="font-bold text-sm text-foreground">Create Trading Account</h4>
                                <p className="text-[11px] text-muted-foreground">Sign up with our partner broker link.</p>
                            </div>
                            <Button
                                variant="primary"
                                size="sm"
                                className="w-full gap-2 h-10"
                                onClick={() => {
                                    window.open(PARTNER_LINK, '_blank');
                                    if (step === 1) setStep(2);
                                }}
                            >
                                <ExternalLink className="w-3.5 h-3.5" /> Open Signup Link
                            </Button>
                            <div className="text-center">
                                <p className="text-[10px] text-muted-foreground transition-colors duration-500">
                                    Already have an account?{" "}
                                    <button
                                        onClick={() => window.open('https://wa.me/237677815907', '_blank')}
                                        className="text-[#1E65F3] font-bold hover:underline transition-all"
                                    >
                                        Contact the Mentor on WhatsApp
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: WhatsApp Verification */}
                    <div className={`relative p-5 rounded-2xl border transition-all duration-500 ${step >= 2 ? "bg-secondary/50 border-border" : "opacity-40 grayscale"}`}>
                        <div className={`absolute -top-3 -left-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shadow-lg transition-colors ${step >= 2 ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"}`}>2</div>
                        <div className="flex flex-col gap-3">
                            <div>
                                <h4 className="font-bold text-sm text-foreground">Verify & Get Access Code</h4>
                                <p className="text-[11px] text-muted-foreground">Send your Account ID to Kelly on WhatsApp for verification.</p>
                            </div>
                            <Button
                                variant="secondary"
                                size="sm"
                                disabled={step < 2}
                                className="w-full gap-2 h-10 border-green-500/30 hover:bg-green-500/10 text-green-600 dark:text-green-400"
                                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                            >
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                Message on WhatsApp
                            </Button>
                        </div>
                    </div>

                    {/* Step 3: Enter Code */}
                    <div className={`relative p-5 rounded-2xl border transition-all duration-500 ${step >= 2 ? "bg-secondary/50 border-border" : "opacity-40 grayscale"}`}>
                        <div className={`absolute -top-3 -left-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shadow-lg transition-colors ${isUnlocked ? "bg-blue-500 text-white" : (step >= 2 ? "bg-[#E40914] text-white" : "bg-muted text-muted-foreground")}`}>3</div>
                        <div className="flex flex-col gap-3">
                            <div>
                                <h4 className="font-bold text-sm text-foreground">Unlock Lessons</h4>
                                <p className="text-[11px] text-muted-foreground">Enter the access code provided by Kelly to unlock the Drive folder.</p>
                            </div>

                            {!isUnlocked ? (
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Enter Access Code"
                                        value={accessCode}
                                        onChange={(e) => setAccessCode(e.target.value)}
                                        className={`flex-1 bg-background border ${error ? "border-red-500 animate-shake" : "border-border"} rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#1E65F3] uppercase`}
                                    />
                                    <Button
                                        variant="accent"
                                        size="sm"
                                        disabled={step < 2 || !accessCode}
                                        onClick={handleUnlock}
                                        className="px-4"
                                    >
                                        Unlock
                                    </Button>
                                </div>
                            ) : (
                                <Button
                                    variant="solid"
                                    className="w-full gap-2 bg-[#E40914] text-white hover:bg-[#E40914]/90"
                                    onClick={() => window.open(DRIVE_LINK, '_blank')}
                                >
                                    <PlayCircle className="w-4 h-4" /> Go to Drive Folder
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <p className="text-[9px] text-muted-foreground leading-relaxed transition-colors duration-500 italic">
                        Verification is required to prevent misuse and ensure only active traders get access to these premium lessons.
                    </p>
                </div>
            </div>
        </Modal>
    );
}
