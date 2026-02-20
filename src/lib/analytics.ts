// Google Analytics 4 Configuration
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

// Track page views
export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: url,
        });
    }
};

// Track custom events
export const event = ({ action, category, label, value }: {
    action: string;
    category: string;
    label?: string;
    value?: number;
}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

// Predefined conversion events
export const trackWhatsAppClick = () => {
    event({
        action: 'whatsapp_click',
        category: 'engagement',
        label: 'WhatsApp Floating Button',
    });
};

export const trackFormSubmit = (areaJuridica: string) => {
    event({
        action: 'form_submit',
        category: 'conversion',
        label: areaJuridica,
    });
};

export const trackPracticeAreaView = (area: string) => {
    event({
        action: 'practice_area_view',
        category: 'engagement',
        label: area,
    });
};

export const trackFAQClick = (question: string) => {
    event({
        action: 'faq_click',
        category: 'engagement',
        label: question,
    });
};

export const trackCTAClick = (ctaName: string, location: string) => {
    event({
        action: 'cta_click',
        category: 'engagement',
        label: `${ctaName} - ${location}`,
    });
};

// Extend Window interface for TypeScript
declare global {
    interface Window {
        gtag: (
            command: 'config' | 'event',
            targetId: string,
            config?: Record<string, string | number | boolean | undefined>
        ) => void;
    }
}
