import { FC } from 'react';
import { motion } from 'framer-motion';
import { Terminal, MoveDown } from 'lucide-react';

export const SectionHero: FC = () => {
    const scrollToNext = () => {
        const problemSection = document.getElementById('problem');
        problemSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
            {/* Background Grids */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center space-y-12 px-6">

                {/* Glitch Typography Title */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                >
                    <h1 className="font-display text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 drop-shadow-neon-cyan">
                        Music Is <br />
                        <span className="text-neon-pink drop-shadow-neon-pink">Structure.</span>
                    </h1>
                    <p className="font-display text-4xl md:text-6xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-500 mt-4 drop-shadow-neon-cyan opacity-90">
                        We Are The <br /> Architects.
                    </p>
                </motion.div>

                {/* Subtitle / Analog Feel */}
                <motion.div
                    initial={{ opacity: 0, rotate: -5 }}
                    animate={{ opacity: 1, rotate: -2 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="font-accent text-neon-yellow text-2xl md:text-3xl rotate-[-2deg] drop-shadow-neon-yellow"
                >
                    ( v2.5.0 // Neural-Link Established )
                </motion.div>

                {/* Terminal Boot-up Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="w-full max-w-md glass-panel p-4 rounded-lg font-mono text-xs md:text-sm text-neon-cyan text-left space-y-1 opacity-80"
                >
                    <div className="flex items-center space-x-2 border-b border-white/10 pb-2 mb-2">
                        <Terminal className="w-4 h-4" />
                        <span>SYSTEM_BOOT.LOG</span>
                    </div>
                    <p>{'>'} Initializing core audio engine...</p>
                    <p>{'>'} Loading Demucs_v4 weights... [OK]</p>
                    <p>{'>'} Connecting to neural synthesis grid... [OK]</p>
                    <p className="animate-pulse">{'>'} Ready for input_</p>
                </motion.div>

                {/* Interaction Button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    onClick={scrollToNext}
                    className="group relative px-8 py-4 bg-transparent border border-neon-pink text-neon-pink font-display font-bold text-lg md:text-xl tracking-wider uppercase hover:bg-neon-pink hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,0,229,0.3)] hover:shadow-[0_0_40px_rgba(255,0,229,0.6)]"
                >
                    Initialize Pitch
                    <span className="absolute -bottom-2 -right-2 w-full h-full border border-neon-cyan -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                </motion.button>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <MoveDown className="w-8 h-8" />
            </motion.div>
        </section>
    );
};
