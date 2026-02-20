import { useEffect, useState, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Music, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface SimulationOverlayProps {
    isVisible: boolean;
    onComplete: () => void;
}

const STEPS = [
    { id: 'demucs', label: 'Separating Stems (Demucs v4)...', icon: Music, color: 'text-blue-400' },
    { id: 'midi', label: 'Extracting MIDI Onsets...', icon: Terminal, color: 'text-purple-400' },
    { id: 'ghost', label: 'Filtering Ghost Notes...', icon: Cpu, color: 'text-emerald-400' },
    { id: 'synth', label: 'Neural Resynthesis via NSynth...', icon: CheckCircle2, color: 'text-pink-400' },
];

export const SimulationOverlay: FC<SimulationOverlayProps> = ({ isVisible, onComplete }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        if (!isVisible) return;

        let stepIndex = 0;
        const interval = setInterval(() => {
            if (stepIndex >= STEPS.length) {
                clearInterval(interval);
                setTimeout(onComplete, 800);
                return;
            }

            setLogs(prev => [...prev, `> Executing: ${STEPS[stepIndex].id}_module.py --gpu 0`]);
            setCurrentStep(stepIndex);
            stepIndex++;
        }, 1500);

        return () => clearInterval(interval);
    }, [isVisible, onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center justify-center font-mono"
                >
                    <div className="w-full max-w-2xl p-6 glass neon-border-blue rounded-lg shadow-2xl overflow-hidden relative">
                        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                        <div className="flex items-center space-x-2 border-b border-zinc-800 pb-4 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="ml-4 text-xs text-zinc-500">chordsplit-ai-engine — bash — 80x24</span>
                        </div>

                        <div className="space-y-4">
                            {STEPS.map((step, index) => (
                                <div
                                    key={step.id}
                                    className={cn(
                                        "flex items-center space-x-3 transition-opacity duration-300",
                                        index > currentStep ? "opacity-20" : "opacity-100"
                                    )}
                                >
                                    <step.icon className={cn("w-5 h-5", index === currentStep ? "animate-pulse" : "", step.color)} />
                                    <span className={cn(
                                        "text-sm",
                                        index === currentStep ? "text-white font-bold" : "text-zinc-400"
                                    )}>
                                        {step.label}
                                    </span>
                                    {index < currentStep && <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" />}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-4 border-t border-zinc-800 h-32 overflow-y-auto font-mono text-xs text-zinc-500 space-y-1">
                            {logs.map((log, i) => (
                                <div key={i}>{log}</div>
                            ))}
                            <div className="animate-pulse">_</div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
