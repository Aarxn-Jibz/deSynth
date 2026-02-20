import { FC } from 'react';
import { motion } from 'framer-motion';

export const SectionTech: FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-background p-6 font-mono">

            <div className="max-w-5xl w-full border border-white/20 p-8 relative">
                {/* Tech Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-yellow" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-yellow" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-yellow" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-yellow" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left: Data Table */}
                    <div className="space-y-6">
                        <h2 className="font-display text-4xl text-white uppercase tracking-tighter">
                            Technical <span className="text-neon-yellow">Readout</span>
                        </h2>

                        <div className="w-full border border-white/10 text-sm">
                            <div className="flex border-b border-white/10 bg-white/5 p-2 font-bold text-neon-cyan">
                                <span className="w-1/3">METRIC</span>
                                <span className="w-2/3">VALUE</span>
                            </div>
                            {[
                                { label: 'Quantization', value: '1/64th Note Preserved' },
                                { label: 'Latency', value: '< 240ms (CuPy Accelerated)' },
                                { label: 'Confidence', value: '98.4% (F1 Score)' },
                                { label: 'Model Size', value: '45MB (Quantized .onnx)' },
                            ].map((row, i) => (
                                <div key={i} className="flex border-b border-white/10 p-2 text-slate-300 hover:bg-white/5 transition-colors">
                                    <span className="w-1/3 text-slate-500">{row.label}</span>
                                    <span className="w-2/3 font-mono">{row.value}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-xs text-slate-500 border-l-2 border-neon-pink pl-4 py-1">
                            {'>'}{'>'} Challenge: MIDI quantization typically destroys "groove". <br />
                            {'>'}{'>'} Fix: We implemented a custom adaptive grid based on tempo-map estimation.
                        </p>
                    </div>

                    {/* Right: Code/Lab Visual */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-black border border-zinc-800 p-4 rounded h-full text-xs text-green-500 font-mono opacity-80 overflow-hidden"
                        >
                            <div className="mb-2 text-white/50 border-b border-white/10 pb-1">Compute_Shader.glsl</div>
                            <pre>
                                {`void main() {
  vec2 uv = gl_FragCoord.xy/u_resolution.xy;
  float fft = texture(u_audio, uv.x).r;
  
  // Neural onset detection
  float onset = step(0.8, fft);
  
  // Quantize to nearest 1/16th
  float grid = floor(uv.x * 16.0) / 16.0;
  
  vec3 color = mix(
    vec3(0.0), 
    vec3(1.0, 0.0, 0.9), 
    onset * (1.0 - distance(uv.x, grid))
  );
  
  gl_FragColor = vec4(color, 1.0);
}`}
                            </pre>
                            <div className="absolute bottom-4 right-4 animate-pulse w-3 h-4 bg-green-500" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
