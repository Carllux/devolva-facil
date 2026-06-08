import React from 'react';

export default function TermosUso() {
  return (
    <main className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-16">
        
        <div className="text-center mb-16 border-b border-gray-100 pb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2D2856] tracking-tight mb-4">
            Termos de Uso
          </h1>
          <p className="text-lg text-gray-500">
            Condições Gerais de Uso da Plataforma Devolva Fácil
          </p>
        </div>

        <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed space-y-8">
          <p>
            Os serviços da plataforma <strong>Devolva Fácil</strong> são fornecidos pela <strong>PostalGOW Gestão Ltda. (PostalGow Reverse Ltda.)</strong>. A PostalGOW atua como titular da propriedade intelectual sobre o software, website, aplicativos, integrações de inteligência artificial e demais ativos relacionados à plataforma.
          </p>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">1. Objeto do Serviço</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>O Devolva Fácil visa fornecer ferramentas tecnológicas para auxiliar e dinamizar o processo de devolução de equipamentos.</li>
              <li>A plataforma presta o serviço de orquestração de logística reversa.</li>
              <li>O sistema concede aos consumidores finais uma interface segura para validação de posse, atualização de endereço e emissão automática de códigos de postagem (vouchers).</li>
              <li>Os códigos de postagem gerados permitem a devolução gratuita de equipamentos de comodato pertencentes às operadoras parceiras, via Correios ou postos de coleta (Drop Off) credenciados.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">2. Aceitação e Acesso à Plataforma</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>O presente termo estabelece obrigações contratadas de livre e espontânea vontade, por tempo indeterminado.</li>
              <li>A PostalGOW pode modificar estes termos de uso a qualquer momento, mantendo a versão atualizada disponível.</li>
              <li>A navegação ou comunicação na plataforma poderá ser interrompida, limitada ou suspensa para atualizações, modificações ou manutenção.</li>
              <li>Em casos de uso abusivo, como implantação de robôs, tentativas de fraude na emissão de códigos ou coleta de dados em lotes via APIs, o acesso do usuário poderá ser bloqueado ou cancelado imediatamente.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">3. Gratuidade (B2C)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>A utilização do Devolva Fácil pelo usuário final para a emissão de autorizações de postagem é <strong>totalmente gratuita</strong>.</li>
              <li>Os custos logísticos são de responsabilidade integral da operadora parceira solicitante.</li>
              <li>A PostalGOW jamais solicitará dados de cartão de crédito, senhas bancárias ou pagamentos via PIX para a liberação de códigos.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">4. Responsabilidades</h3>
            <h4 className="font-bold text-gray-800 mt-4 mb-2">Do Usuário:</h4>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Fornecer informações verídicas sobre seu endereço e sobre a posse física do equipamento.</li>
              <li>Garantir o acondicionamento seguro (embalagem) do equipamento para postagem.</li>
              <li>Utilizar o voucher dentro do prazo de validade estipulado.</li>
              <li>Reconhecer que mensagens eletrônicas (WhatsApp, E-mail) e registros de interações são provas válidas da solicitação e/ou recusa de devolução.</li>
            </ul>

            <h4 className="font-bold text-gray-800 mt-6 mb-2">Da Plataforma:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Emitir códigos de postagem válidos perante as transportadoras e Correios, seguindo as regras de negócio da operadora parceira.</li>
              <li>Atuar exclusivamente como integradora tecnológica, não possuindo responsabilidade sobre multas de comodato, faturamentos ou políticas comerciais das operadoras.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">5. Direitos Autorais e Foro</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>A estrutura do site, fluxogramas, códigos-fonte, logotipos, layouts e banco de dados são propriedade intelectual exclusiva da PostalGOW Gestão Ltda.</li>
              <li>As controvérsias serão solucionadas aplicando integralmente o Direito brasileiro. Fica eleito o foro da Comarca de São Paulo, Capital, para submissão de questões judiciais.</li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
}
