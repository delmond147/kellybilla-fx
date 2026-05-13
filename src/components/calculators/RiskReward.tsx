"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function RiskReward() {
    const [entry, setEntry] = useState<string>("1.1050");
    const [stopLoss, setStopLoss] = useState<string>("1.1000");
    const [takeProfit, setTakeProfit] = useState<string>("1.1200");
    const [lotSize, setLotSize] = useState<string>("1");
    const [pipValue, setPipValue] = useState<string>("10"); // $10 per pip for standard lot

    const [result, setResult] = useState<{ ratio: number; riskAmount: number; rewardAmount: number } | null>(null);

    const calculate = () => {
        const e = parseFloat(entry);
        const sl = parseFloat(stopLoss);
        const tp = parseFloat(takeProfit);
        const lots = parseFloat(lotSize);
        const pv = parseFloat(pipValue);

        if (!isNaN(e) && !isNaN(sl) && !isNaN(tp) && !isNaN(lots) && !isNaN(pv)) {
            // Calculate diff in exact values (simplistic pip calc assuming 4th decimal for EURUSD)
            // We will deal in raw price differences scaled by a multiplier to find pips.
            // E.g. 0.0050 difference is 50 pips. Multiplier could simply be 10000.
            // But more universally, we can just say: pips = priceDiff * 10000

            const pipMultiplier = e.toString().indexOf('.') !== -1 && e.toString().split('.')[1].length <= 2 ? 100 : 10000;

            const riskPips = Math.abs(e - sl) * pipMultiplier;
            const rewardPips = Math.abs(tp - e) * pipMultiplier;

            const ratio = riskPips > 0 ? (rewardPips / riskPips) : 0;

            const riskAmount = riskPips * lots * (pv / 10); // adjusting assuming pv is per 1 lot which is 100,000 units
            const rewardAmount = rewardPips * lots * (pv / 10);

            // correction: if pv is $10 per standard lot per pip. 
            // riskAmount = riskPips * lotSize * pv.
            // Wait, if pv is 10, lot=1, pips=50 -> 50*1*10 = $500 risk.
            const actualRisk = riskPips * lots * pv;
            const actualReward = rewardPips * lots * pv;

            setResult({ ratio, riskAmount: actualRisk, rewardAmount: actualReward });
        } else {
            setResult(null);
        }
    };

    return (
        <div className="glass rounded-xl p-6 md:p-8 space-y-6 shadow-border hover:shadow-border-hover transition-all duration-500">
            <h3 className="text-2xl font-serif text-[#E40914]">Risk / Reward Calculator</h3>
            <p className="text-muted-foreground text-sm transition-colors duration-500">Evaluate your trade setup profitability.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="space-y-2">
                    <span className="text-sm font-medium text-foreground transition-colors duration-500">Entry Price</span>
                    <Input type="number" step="0.00001" value={entry} onChange={(e) => setEntry(e.target.value)} placeholder="1.1050" />
                </label>

                <label className="space-y-2">
                    <span className="text-sm font-medium text-foreground transition-colors duration-500">Stop Loss</span>
                    <Input type="number" step="0.00001" value={stopLoss} onChange={(e) => setStopLoss(e.target.value)} placeholder="1.1000" />
                </label>

                <label className="space-y-2">
                    <span className="text-sm font-medium text-foreground transition-colors duration-500">Take Profit</span>
                    <Input type="number" step="0.00001" value={takeProfit} onChange={(e) => setTakeProfit(e.target.value)} placeholder="1.1200" />
                </label>

                <label className="space-y-2">
                    <span className="text-sm font-medium text-foreground transition-colors duration-500">Trade Size (Lots)</span>
                    <Input type="number" value={lotSize} onChange={(e) => setLotSize(e.target.value)} placeholder="1.0" />
                </label>
            </div>

            <Button onClick={calculate} variant="accent" className="w-full">
                Calculate R:R
            </Button>

            {result !== null && (
                <div className="mt-6 p-4 rounded-lg bg-[#E40914]/10 border border-[#E40914]/30 text-center grid grid-cols-3 gap-2">
                    <div>
                        <span className="block text-xs text-muted-foreground mb-1 transition-colors duration-500">Ratio</span>
                        <span className="text-2xl font-bold text-foreground transition-colors duration-500">1 : {result.ratio.toFixed(2)}</span>
                    </div>
                    <div>
                        <span className="block text-xs text-muted-foreground mb-1 transition-colors duration-500">Potential Risk</span>
                        <span className="text-xl font-bold text-red-500">-${result.riskAmount.toFixed(2)}</span>
                    </div>
                    <div>
                        <span className="block text-xs text-muted-foreground mb-1 transition-colors duration-500">Potential Reward</span>
                        <span className="text-xl font-bold text-green-400">+${result.rewardAmount.toFixed(2)}</span>
                    </div>
                </div>
            )}
        </div>
    );
}
