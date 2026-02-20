import { useState, useEffect } from 'react';
import { storage, CookiePreferences } from '@/lib/storage';
import { ANIMATION } from '@/lib/constants';

const initializeAnalytics = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
            analytics_storage: 'granted'
        });
    }
};

export const useCookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        const consent = storage.get<CookiePreferences>('cookie-consent');
        if (!consent) {
            setTimeout(() => setShowBanner(true), ANIMATION.BANNER_DELAY);
        } else {
            setPreferences(consent);
            if (consent.analytics) {
                initializeAnalytics();
            }
        }
    }, []);

    const acceptAll = () => {
        const prefs: CookiePreferences = {
            necessary: true,
            analytics: true,
            marketing: true
        };
        setPreferences(prefs);
        storage.set('cookie-consent', prefs);
        initializeAnalytics();
        setShowBanner(false);
    };

    const rejectAll = () => {
        const prefs: CookiePreferences = {
            necessary: true,
            analytics: false,
            marketing: false
        };
        setPreferences(prefs);
        storage.set('cookie-consent', prefs);
        setShowBanner(false);
    };

    const savePreferences = () => {
        storage.set('cookie-consent', preferences);
        if (preferences.analytics) {
            initializeAnalytics();
        }
        setShowBanner(false);
        setShowSettings(false);
    };

    return {
        showBanner,
        showSettings,
        preferences,
        setShowSettings,
        setPreferences,
        acceptAll,
        rejectAll,
        savePreferences
    };
};
