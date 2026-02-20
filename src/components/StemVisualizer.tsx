import { motion } from 'framer-motion';

const STEMS = [
    { name: 'Vocals', color: 'bg-blue-500' },
    { name: 'Drums', color: 'bg-purple-500' },
    { name: 'Bass', color: 'bg-emerald-500' },
    { name: 'Synth', color: 'bg-pink-500' },
];

export const StemVisualizer = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STEMS.map((stem) => (
                <div key={stem.name} className="relative group overflow-hidden glass rounded-xl p-4 hover:border-zinc-700/80 transition-all duration-300">
                    <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors" />
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-sm font-semibold text-zinc-300">{stem.name}</span>
                        <div className={`w-2 h-2 rounded-full ${stem.color} animate-pulse`} />
                    </div>

                    <div className="flex items-end justify-between space-x-1 h-16">
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className={`w-full rounded-t-sm ${stem.color} opacity-80`}
                                animate={{
                                    height: ["10%", "100%", "30%", "60%", "10%"],
                                }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: i * 0.1,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
