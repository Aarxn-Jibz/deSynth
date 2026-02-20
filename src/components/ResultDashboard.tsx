import { useState } from 'react';
import { motion } from 'framer-motion';
import { StemVisualizer } from './StemVisualizer';
import { ConfidenceSlider } from './ConfidenceSlider';
import { MorphPad } from './MorphPad';
import { Download, Share2, Play } from 'lucide-react';

export const ResultDashboard = () => {
    const [confidence, setConfidence] = useState(75);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-6xl mx-auto p-6 space-y-6 w-full"
        >
            <motion.div variants={item} className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-zinc-800/50 pb-6">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2 neon-text-blue">Analysis Complete</h2>
                    <p className="text-zinc-400 font-mono text-sm">Session ID: <span className="text-blue-400">#8X29-ALPHA</span> • 4 Stems Isolated</p>
                </div>
                <div className="flex space-x-3 mt-4 md:mt-0">
                    <button className="flex items-center space-x-2 px-4 py-2 glass hover:bg-zinc-800 rounded-lg text-sm text-white transition-all border border-zinc-700/50">
                        <Share2 className="w-4 h-4" />
                        <span>Share</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm text-white transition-all font-semibold neon-border-blue">
                        <Download className="w-4 h-4" />
                        <span>Export Stems</span>
                    </button>
                </div>
            </motion.div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column: Visuals */}
                <motion.div variants={item} className="lg:col-span-2 space-y-6">
                    <StemVisualizer />

                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-semibold text-zinc-300">Master Waveform</h3>
                            <button className="w-8 h-8 rounded-full bg-white text-zinc-950 flex items-center justify-center hover:scale-105 transition-transform">
                                <Play className="w-4 h-4 ml-0.5" />
                            </button>
                        </div>
                        {/* Mock Waveform */}
                        <div className="w-full h-24 flex items-center space-x-0.5 opacity-60">
                            {[...Array(60)].map((_, i) => (
                                <div
                                    key={i}
                                    className="flex-1 bg-zinc-500 rounded-full"
                                    style={{ height: `${Math.sin(i * 0.2) * 40 + 50}%`, opacity: Math.sin(i * 0.1) * 0.5 + 0.5 }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Controls */}
                <motion.div variants={item} className="space-y-6">
                    <ConfidenceSlider value={confidence} onChange={setConfidence} />
                    <MorphPad />

                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                        <h3 className="text-sm font-semibold text-zinc-300 mb-4">Export Format</h3>
                        <div className="space-y-2">
                            {['WAV (32-bit Float)', 'MIDI Type 1', 'MusicXML', 'Ableton Project'].map((format) => (
                                <div key={format} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zinc-800 cursor-pointer transition-colors group">
                                    <div className="w-4 h-4 rounded border border-zinc-600 group-hover:border-blue-500" />
                                    <span className="text-sm text-zinc-400 group-hover:text-white">{format}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};
