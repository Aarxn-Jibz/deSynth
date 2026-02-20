import { Code2, Database, Cpu, Music } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="w-full py-8 mt-12 border-t border-zinc-900 bg-zinc-950/80 backdrop-blur text-center relative z-10">
            <div className="max-w-4xl mx-auto flex justify-center items-center space-x-8 text-zinc-600">
                <div className="flex items-center space-x-2 hover:text-blue-400 transition-colors cursor-pointer group">
                    <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-mono">React + TS</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-green-400 transition-colors cursor-pointer group">
                    <Database className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-mono">FastAPI</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-purple-400 transition-colors cursor-pointer group">
                    <Music className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-mono">Demucs v4</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-pink-400 transition-colors cursor-pointer group">
                    <Cpu className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-mono">Magenta</span>
                </div>
            </div>
            <p className="mt-4 text-xs text-zinc-700 font-mono">
                © 2024 ChordSplit AI Research. All rights reserved.
            </p>
        </footer>
    );
};
