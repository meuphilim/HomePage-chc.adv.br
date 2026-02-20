import Link from 'next/link';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-900 border-t border-white/5 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Digital Persona / Institutional */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold font-serif text-white tracking-tight">
                            Dr. Cláudio Henrique <br />
                            <span className="text-gradient-gold">de Castro</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed text-justify max-w-sm">
                            Consultoria jurídica baseada em rigor técnico e solidez acadêmica.
                            Soluções preventivas e contenciosas voltadas à proteção patrimonial
                            e conformidade institucional, com expertise de mais de 30 anos na alta docência e prática jurídica.
                        </p>
                        <div className="flex gap-4">
                            <span className="text-xs font-bold text-gold-500 uppercase tracking-widest border-b border-gold-500/30 pb-1">
                                OAB/PR 23.743
                            </span>
                        </div>
                    </div>

                    {/* Áreas de Atuação Estratégicas */}
                    <div>
                        <h4 className="text-white font-serif font-bold text-lg mb-6 flex items-center gap-2">
                            Apoio Estratégico
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Direito Administrativo", href: "/#areas-de-atuacao" },
                                { name: "Direito Privado", href: "/#areas-de-atuacao" },
                                { name: "Direito Penal", href: "/#areas-de-atuacao" },
                                { name: "Direitos Humanos", href: "/#areas-de-atuacao" },
                                { name: "Direito Internacional", href: "/#areas-de-atuacao" },
                                { name: "Compliance & Integridade", href: "/#areas-de-atuacao" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        aria-label={`Saiba mais sobre ${item.name}`}
                                        className="text-gray-400 hover:text-gold-400 text-sm transition-colors duration-300 flex items-center gap-1 group focus:outline-none focus:ring-2 focus:ring-gold-500/50 rounded"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-600/30 group-hover:bg-gold-500 transition-colors mr-2" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Institucional */}
                    <div>
                        <h4 className="text-white font-serif font-bold text-lg mb-6">Institucional</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "O Autor", href: "/autor" },
                                { name: "Biblioteca Jurídica", href: "/autor/livros" },
                                { name: "Trajetória Profissional", href: "/career" },
                                { name: "Produção Acadêmica", href: "/autor/publicacoes" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        aria-label={`Ir para ${item.name}`}
                                        className="text-gray-400 hover:text-gold-400 text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500/50 rounded"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contato & Localização */}
                    <div className="space-y-6">
                        <h4 className="text-white font-serif font-bold text-lg mb-6">Canais de Atendimento</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <Mail size={18} className="text-gold-500 mt-0.5" />
                                <a href="mailto:contato@claudiohenrique.adv.br" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    contato@claudiohenrique.adv.br
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-gold-500 mt-0.5" />
                                <span className="text-gray-400 text-sm">(41) 99335-5026</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-gold-500 mt-0.5" />
                                <span className="text-gray-400 text-sm leading-relaxed">
                                    Curitiba/PR — Atendimento em <br /> todo o território nacional.
                                </span>
                            </li>
                        </ul>
                        <div className="pt-4">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 text-xs font-bold text-gold-500 uppercase tracking-widest hover:text-gold-400 transition-colors group"
                            >
                                Agendar Reunião Técnica <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sub-footer / Legal */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p className="text-xs text-gray-500 font-medium">
                            © {currentYear} Dr. Cláudio Henrique de Castro — Todos os direitos reservados.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/politica-privacidade" className="text-xs text-gray-500 hover:text-gold-500 transition-colors">
                                Privacidade
                            </Link>
                            <Link href="/termos-uso" className="text-xs text-gray-500 hover:text-gold-500 transition-colors">
                                Termos
                            </Link>
                        </div>
                    </div>

                    <p className="text-[10px] text-gray-600 max-w-xs text-center md:text-right leading-tight">
                        Aviso: O conteúdo deste site é meramente informativo. Não estabelece relação advogado-cliente automática e não substitui consulta jurídica formal.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
