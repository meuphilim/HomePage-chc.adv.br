import { useState, useEffect } from 'react';
import { storage } from '@/lib/storage';

export const useModal = (storageKey?: string, delay = 0) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (storageKey) {
            const hasAccepted = storage.get<string>(storageKey);
            if (hasAccepted) return;
        }

        if (delay > 0) {
            setTimeout(() => setIsOpen(true), delay);
        } else {
            setIsOpen(true);
        }
    }, [storageKey, delay]);

    const close = () => {
        if (storageKey) {
            storage.set(storageKey, 'true');
        }
        setIsOpen(false);
    };

    const open = () => setIsOpen(true);

    return { isOpen, close, open };
};
