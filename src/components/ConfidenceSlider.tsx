import { FC } from 'react';
import { ScanLine, Music2 } from 'lucide-react';

interface ConfidenceSliderProps {
    value: number;
    onChange: (val: number) => void;
}

export const ConfidenceSlider: FC<ConfidenceSliderProps> = ({ value, onChange }) => {
    return (
        <div className="glass rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-semibold text-zinc-300">Transcription Mode</h3>
                <span className="text-xs font-mono text-blue-400">
                    {value < 50 ? 'RAW_MIDI' : 'QUANTIZED_SHEET'}
                </span>
            </div>

            <div className="relative h-[200px] bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800 mb-6 flex items-center justify-center">
                {value < 50 ? (
                    // Raw MIDI Visualization
                    <div className="absolute inset-0 flex items-center justify-center opacity-80">
                        <div className="space-y-1 w-full px-4">
                            {[...Array(10)].map((_, i) => (
                                <div key={i} className="flex space-x-2">
                                    <div className="h-1 bg-green-500 rounded-full" style={{ width: `${(i * 7 + 23) % 40 + 10}%`, marginLeft: `${(i * 13 + 7) % 50}%` }} />
                                </div>
                            ))}
                            <p className="text-center text-xs text-green-500 mt-4 font-mono">Raw MIDI Data detected...</p>
                        </div>
                    </div>
                ) : (
                    // Sheet Music Visualization (Mock SVG)
                    <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                        <Music2 className="w-16 h-16 text-white opacity-90" />
                        <p className="absolute bottom-4 text-xs text-zinc-400">Standard Notation</p>
                    </div>
                )}
            </div>

            <div className="flex items-center space-x-4">
                <ScanLine className="w-4 h-4 text-zinc-500" />
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="flex-1 h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <Music2 className="w-4 h-4 text-zinc-500" />
            </div>
        </div>
    );
};
