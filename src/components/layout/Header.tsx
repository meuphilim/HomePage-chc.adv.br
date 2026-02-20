"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { scrollToSection, cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';

type NavItem = {
    id: string;
    label: string;
    isPage?: boolean;
    children?: { label: string; href: string }[];
    isAnchor?: boolean;
};

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const router = useRouter();

    const handleNavClick = (id: string, isAnchor: boolean = true) => {
        setMobileMenuOpen(false);

        // Home Navigation
        if (id === 'home') {
            if (pathname !== '/') {
                router.push('/');
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            return;
        }

        // Section Navigation (Anchor)
        if (isAnchor) {
            if (pathname === '/') {
                scrollToSection(`#${id}`);
            } else {
                router.push(`/#${id}`);
            }
        } else {
            // If it's a page and we are handling it here (though most pages use Link directly)
            router.push(`/${id}`);
        }
    };

    const navItems: NavItem[] = [
        { id: 'home', label: 'Início', isAnchor: true },
        { id: 'areas-de-atuacao', label: 'Áreas de Atuação', isAnchor: true },
        { id: 'career', label: 'Carreira', isPage: true, isAnchor: false },
        {
            id: 'autor',
            label: 'Biblioteca Jurídica',
            isAnchor: false,
            children: [
                { label: 'Acervo Pessoal', href: '/autor' },
                { label: 'Livros Publicados', href: '/autor/livros' },
                { label: 'Produção Acadêmica', href: '/autor/publicacoes' },
            ]
        }
    ];

    return (
        <header className="fixed w-full glass-panel z-50 border-b border-white/5 top-0 shadow-lg">
            {/* Subtle gradient border effect */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex flex-col" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="text-xl font-bold font-serif text-gold-500 tracking-wider">DR. CLÁUDIO HENRIQUE DE CASTRO</span>
                    <span className="text-xs text-gray-400 tracking-[0.2em] uppercase">Consultoria Jurídica</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 items-center">
                    {navItems.map((item) => (
                        item.children ? (
                            <div
                                key={item.id}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(item.id)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    className={cn(
                                        "text-sm font-medium tracking-wide transition-all duration-300 relative group flex items-center gap-1",
                                        (pathname.includes(item.id) || activeDropdown === item.id)
                                            ? 'text-gold-400'
                                            : 'text-gray-300 hover:text-gold-400'
                                    )}
                                >
                                    {item.label}
                                    <ChevronDown className={cn(
                                        "w-4 h-4 transition-transform",
                                        activeDropdown === item.id && "rotate-180"
                                    )} />
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 group-hover:w-full transition-all duration-300"></span>
                                </button>

                                {/* Dropdown Menu */}
                                <div className={cn(
                                    "absolute top-full left-0 mt-2 w-56 bg-dark-800 border border-white/10 rounded-lg shadow-xl overflow-hidden transition-all duration-200",
                                    activeDropdown === item.id ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                                )}>
                                    {item.children.map((child, idx) => (
                                        <Link
                                            key={idx}
                                            href={child.href}
                                            className={cn(
                                                "block px-4 py-3 text-sm text-gray-300 hover:bg-gold-500/10 hover:text-gold-400 transition-colors",
                                                idx !== item.children!.length - 1 && "border-b border-white/5"
                                            )}
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : item.isPage ? (
                            <Link
                                key={item.id}
                                href={`/${item.id}`}
                                className={cn(
                                    "text-sm font-medium tracking-wide transition-all duration-300 relative group",
                                    pathname === `/${item.id}`
                                        ? 'text-gold-400'
                                        : 'text-gray-300 hover:text-gold-400'
                                )}
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ) : (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id, item.isAnchor)}
                                className={cn(
                                    "text-sm font-medium tracking-wide transition-all duration-300 relative group",
                                    (pathname === '/' && item.id === 'home')
                                        ? 'text-gold-400'
                                        : 'text-gray-300 hover:text-gold-400'
                                )}
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 group-hover:w-full transition-all duration-300"></span>
                            </button>
                        )
                    ))}
                </nav>

                <div className="hidden md:flex">
                    <button
                        onClick={() => handleNavClick('contact')}
                        className="px-6 py-2 bg-gold-600/10 border border-gold-600/50 text-gold-400 rounded-full font-medium hover:bg-gold-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-gold-900/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:ring-offset-2 focus:ring-offset-dark-900"
                    >
                        Agendar Consulta
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-gold-500"
                    aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-dark-800 py-4 px-6 shadow-xl border-t border-white/10">
                    <div className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            item.children ? (
                                <div key={item.id}>
                                    <span className="block text-gray-300 font-semibold py-2">
                                        {item.label}
                                    </span>
                                    <div className="pl-4 mt-2 space-y-2 border-l border-white/10 ml-2">
                                        {item.children.map((child, idx) => (
                                            <Link
                                                key={idx}
                                                href={child.href}
                                                className="block text-sm text-gray-400 hover:text-gold-400 py-1"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : item.isPage ? (
                                <Link
                                    key={item.id}
                                    href={`/${item.id}`}
                                    className="text-left text-gray-300 hover:text-gold-400 py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id, item.isAnchor)}
                                    className="text-left text-gray-300 hover:text-gold-400 py-2"
                                >
                                    {item.label}
                                </button>
                            )
                        ))}

                        <button
                            onClick={() => handleNavClick('contact')}
                            className="px-6 py-3 bg-gold-600 text-white rounded-lg font-medium text-center hover:bg-gold-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-500/50 mt-4"
                        >
                            Agendar Consulta
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
