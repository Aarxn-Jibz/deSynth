import { FC } from 'react';
import { motion } from 'framer-motion';
import { Upload, ArrowRight } from 'lucide-react';

interface HeroProps {
    onStartSimulation: () => void;
}

export const Hero: FC<HeroProps> = ({ onStartSimulation }) => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden p-6">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full bg-zinc-950">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-4xl w-full text-center space-y-8">
                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-4"
                >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm text-sm text-zinc-400 mb-4">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="font-mono">v2.0.4 Online</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                        Audio In. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Notation Out.
                        </span>{" "}
                        Reimagined.
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                        The first unified pipeline for source separation, MIDI transcription, and neural resynthesis.
                        Designed for producers, modeled by AI.
                    </p>
                </motion.div>

                {/* Drop Zone */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-12 group cursor-pointer"
                    onClick={onStartSimulation}
                >
                    <div className="relative w-full max-w-lg mx-auto aspect-[2/1] rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/20 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300 group-hover:border-blue-500/50 group-hover:bg-blue-500/5 group-hover:shadow-neon-blue-strong">
                        {/* Pulsing Glow */}
                        <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 p-8 flex flex-col items-center space-y-4">
                            <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-zinc-700 group-hover:border-blue-500">
                                <Upload className="w-8 h-8 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                            </div>

                            <div className="text-center space-y-2">
                                <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors">
                                    Drop Audio File
                                </h3>
                                <p className="text-sm text-zinc-500 font-mono">
                                    .WAV, .MP3, .FLAC (Max 50MB)
                                </p>
                            </div>

                            <div className="flex items-center space-x-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                                <span>Start Processing</span>
                                <ArrowRight className="w-3 h-3" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Footer hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-0 right-0 text-center"
            >
                <p className="text-xs text-zinc-600 font-mono uppercase tracking-widest">
                    Powered by Demucs v4 & Magenta
                </p>
            </motion.div>
        </section>
    );
};
