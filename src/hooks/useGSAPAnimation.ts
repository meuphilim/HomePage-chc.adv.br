import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SCROLL_TRIGGER } from '@/lib/constants';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface AnimationConfig {
    from: gsap.TweenVars;
    to: gsap.TweenVars;
    scrollTrigger?: {
        trigger?: string | HTMLElement;
        start?: string;
        toggleActions?: string;
    };
    stagger?: number;
    useChildren?: boolean;
}

export const useGSAPAnimation = (
    ref: RefObject<HTMLElement | null>,
    config: AnimationConfig
) => {
    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            const elements = config.useChildren ? ref.current!.children : ref.current;

            gsap.fromTo(elements, config.from, {
                ...config.to,
                scrollTrigger: config.scrollTrigger ? {
                    trigger: config.scrollTrigger.trigger || ref.current,
                    start: config.scrollTrigger.start || SCROLL_TRIGGER.START,
                    toggleActions: config.scrollTrigger.toggleActions || SCROLL_TRIGGER.TOGGLE_ACTIONS
                } : undefined,
                stagger: config.stagger
            });
        }, ref);

        return () => ctx.revert();
    }, []);
};
