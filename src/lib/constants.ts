export const ANIMATION = {
    DURATION: {
        FAST: 0.3,
        NORMAL: 0.6,
        SLOW: 1.2
    },
    DELAY: {
        SHORT: 0.3,
        MEDIUM: 0.6,
        LONG: 1.0
    },
    MODAL_DELAY: 1000,
    BANNER_DELAY: 2000,
    STAGGER: {
        FAST: 0.1,
        NORMAL: 0.15,
        SLOW: 0.2
    }
} as const;

export const SCROLL_TRIGGER = {
    START: 'top 80%',
    TOGGLE_ACTIONS: 'play none none none'
} as const;
