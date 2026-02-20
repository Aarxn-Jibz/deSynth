import { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

export const SectionVision: FC = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-background p-6 overflow-hidden text-center">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/20 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-4xl w-full z-10 space-y-12">

                {/* Visual: Timbre Design Disco Space */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative w-64 h-64 mx-auto"
                >
                    <div className="absolute inset-0 bg-neon-purple rounded-full blur-[100px] opacity-40 animate-pulse" />
                    <div className="relative w-full h-full border border-white/20 rounded-full flex items-center justify-center glass-panel">
                        <div className="text-6xl animate-bounce">🎹</div>
                        <div className="absolute inset-0 border border-neon-pink/30 rounded-full animate-spin-slow" />
                        <div className="absolute -inset-4 border border-neon-cyan/20 rounded-full animate-reverse-spin" />
                    </div>
                    <div className="absolute top-1/2 -left-20 text-xs font-mono text-neon-pink">FLUTE</div>
                    <div className="absolute top-1/2 -right-20 text-xs font-mono text-neon-cyan">SYNTH_BASS</div>
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-mono text-white/50">NSynth_Morph_Space</div>
                </motion.div>

                {/* Content */}
                <div className="space-y-6">
                    <h2 className="font-display text-5xl md:text-8xl font-bold text-white uppercase tracking-tighter">
                        We Don't Just Transcribe. <br />
                        <span className="text-neon-purple drop-shadow-neon-pink">We Synthesize.</span>
                    </h2>

                    <p className="font-sans text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
                        The future isn't just analyzing the past. It's creating new timbres from the DNA of old recordings.
                    </p>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                    <button className="px-8 py-4 bg-white text-black font-bold font-display text-xl tracking-wider hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        SEE THE DEMO
                    </button>

                    <button className="flex items-center space-x-2 px-8 py-4 border border-white/20 text-white font-mono hover:bg-white/10 transition-colors">
                        <Github className="w-5 h-5" />
                        <span>ACCESS REPOSITORY</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="pt-20 text-xs font-mono text-slate-600">
                    PROJECT_RESONANCE // CHORDSPLIT_AI © 2024
                </div>
            </div>
        </section>
    );
};
