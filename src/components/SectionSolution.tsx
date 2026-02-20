import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

const STEMS = [
    { id: 'vocals', label: 'VOCALS', color: 'bg-neon-pink', shadow: 'shadow-neon-pink' },
    { id: 'drums', label: 'DRUMS', color: 'bg-neon-cyan', shadow: 'shadow-neon-cyan' },
    { id: 'bass', label: 'BASS', color: 'bg-neon-yellow', shadow: 'shadow-neon-yellow' },
    { id: 'other', label: 'MELODY', color: 'bg-neon-purple', shadow: 'shadow-neon-purple' },
];

export const SectionSolution: FC = () => {
    const [hoveredstem, setHoveredStem] = useState<string | null>(null);

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-background p-6 overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Visual: 3D Boombox Stem Experience */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative w-full aspect-square max-w-lg mx-auto">
                        {/* Central Core */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-surface rounded-full border-2 border-white/20 flex items-center justify-center z-20 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                            <Layers className="w-12 h-12 text-white animate-pulse" />
                        </div>

                        {/* Orbiting Stems */}
                        {STEMS.map((stem, index) => {
                            const angle = (index / STEMS.length) * 2 * Math.PI;
                            const isHovered = hoveredstem === stem.id;

                            return (
                                <motion.div
                                    key={stem.id}
                                    className={`absolute top-1/2 left-1/2 w-24 h-24 rounded-2xl glass-panel flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${isHovered ? `scale-125 z-30 border-white/50 ${stem.shadow}` : 'scale-100 z-10'}`}
                                    style={{
                                        x: Math.cos(angle) * 140 - 48, // 140px radius, centered
                                        y: Math.sin(angle) * 140 - 48,
                                    }}
                                    onMouseEnter={() => setHoveredStem(stem.id)}
                                    onMouseLeave={() => setHoveredStem(null)}
                                    animate={{
                                        rotate: [0, 5, -5, 0],
                                        y: [Math.sin(angle) * 140 - 48, Math.sin(angle) * 140 - 58, Math.sin(angle) * 140 - 48]
                                    }}
                                    transition={{
                                        rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
                                        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
                                    }}
                                >
                                    <div className={`w-3 h-3 rounded-full mb-2 ${stem.color}`} />
                                    <span className="font-mono text-xs font-bold tracking-wider">{stem.label}</span>
                                    {/* Waveform Mock */}
                                    <div className="flex space-x-0.5 mt-2 h-4 items-end">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className={`w-1 ${stem.color} opacity-80`} style={{ height: `${Math.random() * 100}%` }} />
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Content: The Narrative */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/5">
                        <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                        <span className="font-mono text-xs text-neon-cyan uppercase tracking-wider">Solution_Protocol_v4</span>
                    </div>

                    <h2 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight">
                        <span className="text-neon-cyan drop-shadow-neon-cyan">Precision</span> <br />
                        Deconstruction.
                    </h2>

                    <p className="font-sans text-xl text-slate-300 font-light leading-relaxed">
                        We don't just filter audio. We rebuild it. Our unified pipeline isolates stems with neural precision, transcribes the ghost notes, and quantizes the chaos.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        <div className="glass-panel p-4 rounded-lg border-l-4 border-l-neon-pink">
                            <h3 className="font-display text-lg text-white mb-1">Demucs v4</h3>
                            <p className="text-sm text-slate-400">Source separation trained on 400TB of studio masters.</p>
                        </div>
                        <div className="glass-panel p-4 rounded-lg border-l-4 border-l-neon-yellow">
                            <h3 className="font-display text-lg text-white mb-1">Neural Transcription</h3>
                            <p className="text-sm text-slate-400">Onset detection precise to 12ms.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
