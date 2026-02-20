import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', 'sans-serif'],
                serif: ['var(--font-serif)', 'serif'],
            },
            colors: {
                gold: {
                    100: '#F9F1D8',
                    200: '#F0DEAA',
                    300: '#F0C05A', // Brighter highlight
                    400: '#D4AF37', // Base Gold
                    500: '#C5A028',
                    600: '#B08D55', // Muted Bronze
                    700: '#8C6B3D',
                    800: '#6D522C',
                    900: '#4A371E',
                },
                dark: {
                    700: '#2A2A2A', // Hover state
                    800: '#1E1E1E', // Lighter dark for cards
                    900: '#121212', // Deep background
                    950: '#0a0a0a', // Almost black
                },
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gold-gradient': 'linear-gradient(135deg, #F0C05A 0%, #D4AF37 50%, #B08D55 100%)',
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out',
                'slide-up': 'slideUp 0.8s ease-out',
                'pulse-slow': 'pulse 4s infinite',
                'shimmer': 'shimmer 2.5s infinite linear',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                }
            },
            boxShadow: {
                'gold-sm': '0 10px 30px -10px rgba(212, 175, 55, 0.1)',
                'gold-md': '0 20px 40px -10px rgba(212, 175, 55, 0.15)',
                'gold-lg': '0 20px 50px -10px rgba(212, 175, 55, 0.25)',
                'gold-glow': '0 0 15px rgba(212, 175, 55, 0.4)',
            },
        },
    },
    plugins: [],
};
export default config;
