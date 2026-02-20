import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de Privacidade',
    description: 'Política de Privacidade e proteção de dados pessoais em conformidade com a LGPD (Lei Geral de Proteção de Dados).',
};

export default function PoliticaPrivacidadePage() {
    return (
        <div className="min-h-screen pt-20">
            <div className="container mx-auto px-6 py-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">
                    Política de <span className="text-gradient-gold">Privacidade</span>
                </h1>
                <p className="text-gray-400 mb-8">
                    Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>

                <div className="prose prose-invert max-w-none space-y-8">
                    {/* Introdução */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">1. Introdução</h2>
                        <p className="text-gray-300 leading-relaxed">
                            A <strong>Dr. Cláudio Henrique de Castro Advocacia & Consultoria</strong> ("nós", "nosso" ou "escritório")
                            está comprometida com a proteção da privacidade e dos dados pessoais de nossos clientes,
                            visitantes do site e demais usuários de nossos serviços.
                        </p>
                        <p className="text-gray-300 leading-relaxed mt-4">
                            Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas
                            informações pessoais em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>.
                        </p>
                    </section>

                    {/* Dados Coletados */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">2. Dados Coletados</h2>

                        <h3 className="text-xl font-semibold text-gold-400 mb-3 mt-6">2.1 Dados Fornecidos por Você</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li><strong>Nome completo</strong></li>
                            <li><strong>Telefone</strong></li>
                            <li><strong>Área jurídica de interesse</strong></li>
                            <li><strong>Mensagem/descrição do caso</strong></li>
                            <li><strong>Endereço de e-mail</strong> (quando fornecido)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gold-400 mb-3 mt-6">2.2 Dados Coletados Automaticamente</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li><strong>Endereço IP</strong></li>
                            <li><strong>Tipo de navegador e dispositivo</strong></li>
                            <li><strong>Páginas visitadas e tempo de permanência</strong></li>
                            <li><strong>Origem do acesso</strong> (referrer)</li>
                            <li><strong>Cookies e tecnologias similares</strong></li>
                        </ul>
                    </section>

                    {/* Finalidade */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">3. Finalidade do Tratamento</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Utilizamos seus dados pessoais para as seguintes finalidades:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li><strong>Atendimento de solicitações:</strong> Responder a consultas e pedidos de contato</li>
                            <li><strong>Prestação de serviços jurídicos:</strong> Análise de casos e consultoria</li>
                            <li><strong>Comunicação:</strong> Envio de informações sobre nossos serviços</li>
                            <li><strong>Melhoria do site:</strong> Análise de navegação para otimizar a experiência</li>
                            <li><strong>Cumprimento de obrigações legais:</strong> Atendimento a requisições judiciais e regulatórias</li>
                        </ul>
                    </section>

                    {/* Base Legal */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">4. Base Legal</h2>
                        <p className="text-gray-300 leading-relaxed">
                            O tratamento de seus dados pessoais é realizado com base nas seguintes hipóteses legais:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                            <li><strong>Consentimento:</strong> Quando você fornece seus dados voluntariamente</li>
                            <li><strong>Execução de contrato:</strong> Para prestação de serviços jurídicos contratados</li>
                            <li><strong>Legítimo interesse:</strong> Melhoria de nossos serviços e segurança</li>
                            <li><strong>Obrigação legal:</strong> Cumprimento de determinações judiciais e regulatórias</li>
                        </ul>
                    </section>

                    {/* Compartilhamento */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">5. Compartilhamento de Dados</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Seus dados pessoais <strong>não serão vendidos, alugados ou compartilhados</strong> com terceiros,
                            exceto nas seguintes situações:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li><strong>Prestadores de serviços:</strong> Empresas que nos auxiliam (hospedagem, analytics)</li>
                            <li><strong>Autoridades competentes:</strong> Quando exigido por lei ou ordem judicial</li>
                            <li><strong>Parceiros jurídicos:</strong> Advogados correspondentes em outras jurisdições (com seu consentimento)</li>
                        </ul>
                    </section>

                    {/* Segurança */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">6. Segurança dos Dados</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Implementamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado,
                            perda, destruição ou alteração:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                            <li>Criptografia SSL/TLS para transmissão de dados</li>
                            <li>Controle de acesso restrito aos dados</li>
                            <li>Backups regulares e seguros</li>
                            <li>Monitoramento de segurança contínuo</li>
                        </ul>
                    </section>

                    {/* Retenção */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">7. Retenção de Dados</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas,
                            respeitando os prazos legais de prescrição e obrigações regulatórias (mínimo de 5 anos conforme
                            Código de Ética da OAB).
                        </p>
                    </section>

                    {/* Direitos do Titular */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">8. Seus Direitos (LGPD)</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Você tem os seguintes direitos em relação aos seus dados pessoais:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li><strong>Confirmação e acesso:</strong> Saber se tratamos seus dados e acessá-los</li>
                            <li><strong>Correção:</strong> Solicitar correção de dados incompletos ou desatualizados</li>
                            <li><strong>Anonimização ou eliminação:</strong> Solicitar exclusão de dados desnecessários</li>
                            <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                            <li><strong>Revogação do consentimento:</strong> Retirar consentimento a qualquer momento</li>
                            <li><strong>Oposição:</strong> Opor-se ao tratamento em determinadas situações</li>
                        </ul>
                        <p className="text-gray-300 leading-relaxed mt-4">
                            Para exercer seus direitos, entre em contato: <strong className="text-gold-400">contato@claudiohenrique.adv.br</strong>
                        </p>
                    </section>

                    {/* Cookies */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">9. Cookies</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Utilizamos cookies para melhorar sua experiência. Você pode gerenciar suas preferências através
                            do banner de cookies ou configurações do navegador. Para mais informações, consulte nossa
                            Política de Cookies.
                        </p>
                    </section>

                    {/* Alterações */}
                    <section className="bg-dark-800 rounded-xl p-6 border border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-white">10. Alterações nesta Política</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Podemos atualizar esta Política periodicamente. Recomendamos que você a revise regularmente.
                            Alterações significativas serão comunicadas por e-mail ou aviso no site.
                        </p>
                    </section>

                    {/* Contato */}
                    <section className="bg-gradient-to-br from-gold-500/10 to-gold-600/5 rounded-2xl p-8 border border-gold-500/20">
                        <h2 className="text-2xl font-bold mb-4 text-white">11. Contato e Encarregado de Dados (DPO)</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Para dúvidas, solicitações ou exercício de direitos relacionados aos seus dados pessoais:
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
