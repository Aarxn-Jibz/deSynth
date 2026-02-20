import { FC } from 'react';
import { motion } from 'framer-motion';

export const SectionProblem: FC = () => {
    return (
        <section id="problem" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden py-20">
            {/* Chaotic Background */}
            <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="5" />
                        <feDisplacementMap in="SourceGraphic" scale="50" />
                    </filter>
                    <path d="M0,50 Q200,100 400,50 T800,50" fill="none" stroke="#ff00e5" strokeWidth="2" filter="url(#noise)" />
                    <path d="M0,80 Q300,30 600,80 T1000,80" fill="none" stroke="#faff00" strokeWidth="1" filter="url(#noise)" />
                    {/* Add more chaotic lines as needed via CSS or repeats */}
                </svg>
                {/* CSS Noise Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

            <div className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Visual: The Tangled Mess */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative w-full aspect-square md:aspect-[4/3] glass-panel rounded-2xl p-1 overflow-hidden group">
                        <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay" />
                        {/* Mocking the "Tangled Audio" visualization */}
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="relative w-48 h-48 md:w-64 md:h-64">
                                <div className="absolute inset-0 border-2 border-red-500/50 rounded-full animate-pulse blur-sm" />
                                <div className="absolute inset-4 border border-neon-pink/30 rounded-full animate-spin-slow" />
                                <div className="absolute inset-10 border border-neon-yellow/20 rounded-full animate-reverse-spin" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500 font-mono text-xs tracking-widest bg-black px-2 py-1">
                                    ERROR: POLYPHONY_OVERLOAD
                                </div>
                            </div>
                        </div>
                        {/* Glitch Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000" />
                    </div>
                </motion.div>

                {/* Content: The Narrative */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                >
                    <h2 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight">
                        The <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">Polyphony</span> <br />
                        Problem.
                    </h2>

                    <p className="font-sans text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                        Sound is a tangled mess. When a band plays together, digital filters see chaos—not music.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                            <div className="mt-1 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_red]" />
                            <p className="text-slate-400">Existing tools fail at multi-instrument separation.</p>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="mt-1 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_red]" />
                            <p className="text-slate-400">MIDI transcription misses the "human" ghost notes.</p>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="mt-1 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_red]" />
                            <p className="text-slate-400">Digital synthesis feels cold and robotic.</p>
                        </div>
                    </div>

                    <div className="pt-4">
                        <span className="font-accent text-neon-pink text-xl rotate-2 inline-block">
                            "Digital filters can't untie it..."
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
