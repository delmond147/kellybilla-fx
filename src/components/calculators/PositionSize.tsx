"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function PositionSize() {
    const [balance, setBalance] = useState<string>("10000");
    const [riskPercent, setRiskPercent] = useState<string>("1");
    const [stopLoss, setStopLoss] = useState<string>("50");
    const [pipValue, setPipValue] = useState<string>("10"); // Standard lot pip value is usually $10 for major pairs

    const [lotSize, setLotSize] = useState<number | null>(null);

    const calculate = () => {
        const bal = parseFloat(balance);
        const risk = parseFloat(riskPercent);
        const sl = parseFloat(stopLoss);
        const pipVal = parseFloat(pipValue);

        if (bal > 0 && risk > 0 && sl > 0 && pipVal > 0) {
            // Lot Size = (Balance * (Risk% / 100)) / (SL * Pip Value)
            const riskAmount = bal * (risk / 100);
            const size = riskAmount / (sl * pipVal);
            setLotSize(size);
        } else {
            setLotSize(null);
        }
    };

    return (
        <div className="glass rounded-xl p-6 md:p-8 space-y-6 shadow-border hover:shadow-border-hover transition-all duration-500">
            <h3 className="text-2xl font-serif text-[#1E65F3]">Position Size Calculator</h3>
            <p className="text-muted-foreground text-sm transition-colors duration-500">Calculate the exact lot size to safeguard your capital.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="space-y-2">
                    <span className="text-sm font-medium text-foreground transition-colors duration-500">Account Balance ($)</span>
                    <Input type="number" value={balance} onChange={(e) => setBalance(e.target.value)} placeholder="e.g. 10000" />
                </label>

                <label className="space-y-2">
                    <span className="text-sm font-medium text-foreground transition-colors duration-500">Risk Percentage (%)</span>
                    <Input type="number" value={riskPercent} onChange={(e) => setRiskPercent(e.target.value)} placeholder="e.g. 1" />
                </label>

                <label className="space-y-2">
                    <span className="text-sm font-medium text-foreground transition-colors duration-500">Stop Loss (Pips)</span>
                    <Input type="number" value={stopLoss} onChange={(e) => setStopLoss(e.target.value)} placeholder="e.g. 50" />
                </label>

                <label className="space-y-2">
                    <span className="text-sm font-medium text-foreground transition-colors duration-500">Pip Value ($ per Standard Lot)</span>
                    <Input type="number" value={pipValue} onChange={(e) => setPipValue(e.target.value)} placeholder="e.g. 10" />
                </label>
            </div>

            <Button onClick={calculate} variant="primary" className="w-full">
                Calculate Lot Size
            </Button>

            {lotSize !== null && (
                <div className="mt-6 p-4 rounded-lg bg-[#1E65F3]/10 border border-[#1E65F3]/30 text-center">
                    <span className="block text-sm text-foreground/70 mb-1 transition-colors duration-500">Recommended Position Size</span>
                    <span className="text-4xl font-bold text-[#1E65F3]">{lotSize.toFixed(2)} Lots</span>
                    <span className="block text-xs mt-2 text-[#E40914]">Risking ${(parseFloat(balance) * parseFloat(riskPercent) / 100).toFixed(2)}</span>
                </div>
            )}
        </div>
    );
}
