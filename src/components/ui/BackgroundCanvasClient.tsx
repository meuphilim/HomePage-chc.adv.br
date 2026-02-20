"use client";

import dynamic from 'next/dynamic';

// Lazy load BackgroundCanvas (Three.js is heavy)
const BackgroundCanvas = dynamic(
    () => import('./BackgroundCanvas'),
    {
        ssr: false,
        loading: () => null
    }
);

export default function BackgroundCanvasClient() {
    return <BackgroundCanvas />;
}
