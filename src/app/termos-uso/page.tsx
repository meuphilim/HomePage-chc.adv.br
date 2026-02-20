import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Termos de Uso',
    description: 'Termos e condições de uso do site e serviços jurídicos oferecidos.',
};

export default function TermosUsoPage() {
    return (
        <div className="min-h-screen pt-20">
            <div className="container mx-auto px-6 py-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">
                    Termos de <span className="text-gradient-gold">Uso</span>
                </h1>
                <p className="text-gray-400 mb-8">
                    Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>

                <div className="prose prose-invert max-w-none space-y-8">
                    {/* Aceitação */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">1. Aceitação dos Termos</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes
                            Termos de Uso. Se você não concordar com qualquer parte destes termos, não utilize este site.
                        </p>
                    </section>

                    {/* Serviços */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">2. Serviços Oferecidos</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Este site fornece informações sobre os serviços jurídicos oferecidos pela
                            <strong> Dr. Cláudio Henrique de Castro Advocacia & Consultoria</strong>, incluindo:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Informações sobre áreas de atuação</li>
                            <li>Formulário de contato para solicitação de consultas</li>
                            <li>Conteúdo educacional sobre questões jurídicas</li>
                            <li>Acesso a informações sobre o escritório e profissionais</li>
                        </ul>
                    </section>

                    {/* Relação Advogado-Cliente */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">3. Relação Advogado-Cliente</h2>
                        <div className="bg-gold-500/10 border border-gold-500/20 rounded-lg p-4 mb-4">
                            <p className="text-gold-200 font-semibold">⚠️ IMPORTANTE</p>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            O uso deste site e o envio de informações através do formulário de contato
                            <strong> NÃO estabelecem uma relação advogado-cliente</strong>. Uma relação formal só será
                            estabelecida mediante:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                            <li>Consulta presencial ou virtual agendada</li>
                            <li>Assinatura de contrato de prestação de serviços</li>
                            <li>Aceite formal de representação</li>
                        </ul>
                    </section>

                    {/* Confidencialidade */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">4. Confidencialidade</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Embora tratemos todas as comunicações com sigilo profissional, recomendamos que você
                            <strong> NÃO envie informações confidenciais ou sensíveis</strong> através do formulário de
                            contato antes do estabelecimento formal da relação advogado-cliente.
                        </p>
                    </section>

                    {/* Conteúdo */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">5. Conteúdo do Site</h2>

                        <h3 className="text-xl font-semibold text-gold-400 mb-3 mt-6">5.1 Informações Gerais</h3>
                        <p className="text-gray-300 leading-relaxed">
                            O conteúdo deste site é fornecido apenas para fins informativos e educacionais.
                            <strong> Não constitui aconselhamento jurídico</strong> e não deve ser interpretado como tal.
                        </p>

                        <h3 className="text-xl font-semibold text-gold-400 mb-3 mt-6">5.2 Propriedade Intelectual</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Todo o conteúdo deste site (textos, imagens, logos, design) é protegido por direitos autorais
                            e propriedade intelectual. É proibida a reprodução sem autorização prévia.
                        </p>
                    </section>

                    {/* Responsabilidades */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">6. Limitação de Responsabilidade</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            O escritório não se responsabiliza por:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Decisões tomadas com base em informações gerais do site</li>
                            <li>Erros ou omissões no conteúdo publicado</li>
                            <li>Interrupções ou falhas técnicas no site</li>
                            <li>Links para sites de terceiros</li>
                            <li>Perda de dados durante transmissão</li>
                        </ul>
                    </section>

                    {/* Uso Aceitável */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">7. Uso Aceitável</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Ao utilizar este site, você concorda em NÃO:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Violar leis ou regulamentos aplicáveis</li>
                            <li>Transmitir conteúdo ofensivo, difamatório ou ilegal</li>
                            <li>Tentar acessar áreas restritas do site</li>
                            <li>Interferir no funcionamento do site</li>
                            <li>Coletar dados de outros usuários sem consentimento</li>
                        </ul>
                    </section>

                    {/* Prazos Prescricionais */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">8. Prazos Prescricionais</h2>
                        <div className="bg-gold-500/10 border border-gold-500/20 rounded-lg p-4 mb-4">
                            <p className="text-gold-200 font-semibold">⏰ ATENÇÃO AOS PRAZOS</p>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Muitas ações judiciais possuem <strong>prazos prescricionais</strong> que, uma vez expirados,
                            impedem o ajuizamento da ação. Não deixe para procurar orientação jurídica no último momento.
                            O escritório não se responsabiliza por prazos perdidos antes da contratação formal.
                        </p>
                    </section>

                    {/* Links Externos */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">9. Links para Sites de Terceiros</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Este site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo,
                            políticas de privacidade ou práticas desses sites.
                        </p>
                    </section>

                    {/* Modificações */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">10. Modificações</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento.
                            Alterações entrarão em vigor imediatamente após publicação no site.
                        </p>
                    </section>

                    {/* Lei Aplicável */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">11. Lei Aplicável e Foro</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
                            Fica eleito o foro da Comarca de Curitiba/PR para dirimir quaisquer controvérsias.
                        </p>
                    </section>

                    {/* Contato */}
                    <section className="bg-gradient-to-br from-gold-500/10 to-gold-600/5 rounded-2xl p-8 border border-gold-500/20">
                        <h2 className="text-2xl font-bold mb-4 text-white">12. Contato</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Para dúvidas sobre estes Termos de Uso:
                        </p>
                        <div className="text-gray-300 space-y-2">
                            <p><strong>E-mail:</strong> <span className="text-gold-400">contato@claudiohenrique.adv.br</span></p>
                            <p><strong>Telefone:</strong> <span className="text-gold-400">(41) 99335-5026</span></p>
                            <p><strong>Endereço:</strong> Curitiba/PR</p>
                        </div>
                    </section>
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="javascript:history.back()"
                        className="inline-block px-8 py-3 border border-gray-600 text-gray-300 rounded-full hover:bg-white/5 transition-colors"
                    >
                        Voltar
                    </a>
                </div>
            </div>
        </div>
    );
}
