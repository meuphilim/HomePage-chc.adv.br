type StorageKey = 'cookie-consent' | 'legal-disclaimer-accepted' | string;

export interface CookiePreferences {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

export const storage = {
    get<T>(key: StorageKey): T | null {
        if (typeof window === 'undefined') return null;

        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch {
            return null;
        }
    },

    set<T>(key: StorageKey, value: T): boolean {
        if (typeof window === 'undefined') return false;

        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch {
            return false;
        }
    },

    remove(key: StorageKey): void {
        if (typeof window === 'undefined') return;
        try {
            localStorage.removeItem(key);
        } catch { }
    }
};
