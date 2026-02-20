/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0c1b', // Deep Navy/Black
                surface: '#121425',
                neon: {
                    pink: '#ff00e5',
                    yellow: '#faff00',
                    cyan: '#00f0ff',
                    purple: '#a06cd5',
                }
            },
            fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],
                display: ['Syne', 'sans-serif'],
                accent: ['Permanent Marker', 'cursive'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
            },
            boxShadow: {
                'neon-pink': '0 0 15px rgba(255, 0, 229, 0.4)',
                'neon-cyan': '0 0 15px rgba(0, 240, 255, 0.4)',
                'neon-yellow': '0 0 15px rgba(250, 255, 0, 0.4)',
            },
            dropShadow: {
                'neon-pink': '0 0 8px rgba(255, 0, 229, 0.6)',
                'neon-cyan': '0 0 8px rgba(0, 240, 255, 0.6)',
            }
        },
    },
    plugins: [],
}
