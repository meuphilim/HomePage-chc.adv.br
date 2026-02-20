import React from 'react';

interface SectionContainerProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    ref?: React.Ref<HTMLDivElement>;
}

export const SectionContainer = React.forwardRef<HTMLDivElement, SectionContainerProps>(
    ({ children, className = '', id }, ref) => {
        return (
            <div
                id={id}
                ref={ref}
                className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ${className}`}
            >
                {children}
            </div>
        );
    }
);

SectionContainer.displayName = 'SectionContainer';
