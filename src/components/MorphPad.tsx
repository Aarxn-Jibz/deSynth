import { useRef, useState, PointerEvent } from 'react';
import { motion } from 'framer-motion';

export const MorphPad = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 50, y: 50 });

    const handlePointer = (e: PointerEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
        const y = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));
        setPosition({ x, y });
    };

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold text-zinc-300">NSynth Morph</h3>
                <span className="text-xs font-mono text-purple-400">
                    X: {Math.round(position.x)} | Y: {Math.round(position.y)}
                </span>
            </div>

            <div
                ref={containerRef}
                className="relative w-full aspect-square bg-gradient-to-br from-blue-900/20 via-zinc-900 to-purple-900/20 rounded-lg border border-zinc-800 cursor-crosshair overflow-hidden"
                onPointerDown={handlePointer}
                onPointerMove={(e) => e.buttons === 1 && handlePointer(e)}
            >
                <div className="absolute top-2 left-2 text-xs text-zinc-600 font-mono">FLUTE</div>
                <div className="absolute top-2 right-2 text-xs text-zinc-600 font-mono">SYNTH</div>
                <div className="absolute bottom-2 left-2 text-xs text-zinc-600 font-mono">BASS</div>
                <div className="absolute bottom-2 right-2 text-xs text-zinc-600 font-mono">ORGAN</div>

                <motion.div
                    className="absolute w-6 h-6 rounded-full border-2 border-white bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.5)] backdrop-blur-sm -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    animate={{ left: `${position.x}%`, top: `${position.y}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
            </div>
        </div>
    );
};
