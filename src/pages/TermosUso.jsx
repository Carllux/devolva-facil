import React from 'react';

export default function TermosUso() {
  return (
    <main className="bg-gray-50 min-h-screen py-20 px-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-16 flex flex-col items-center text-center">
        
        <div className="mb-12 border-b border-gray-100 pb-10 w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2D2856] tracking-tight mb-4">
            Termos de Uso
          </h1>
          <p className="text-lg text-gray-500">
            Condições Gerais de Uso da Plataforma Devolva Fácil
          </p>
        </div>

        <div className="prose prose-blue max-w-3xl text-gray-600 leading-relaxed space-y-10">
          <p>
            Os serviços da plataforma <strong>Devolva Fácil</strong> são fornecidos pela <strong>POSTALGOW REVERSE LTDA</strong>, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 10.426.959/0001-47, com sede na Avenida Barueri Mirim, 730, Galpão 1, Box 3 - Jardim Belval, Barueri | SP, doravante denominada apenas "PostalGOW Reverse", titular da propriedade intelectual sobre o software, website, aplicativos, integrações de inteligência artificial e demais ativos relacionados à plataforma.
          </p>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Objeto do Serviço</h3>
            <ul className="list-none space-y-3">
              <li>• O Devolva Fácil visa fornecer ferramentas tecnológicas para auxiliar e dinamizar o processo de devolução de equipamentos.</li>
              <li>• A plataforma presta o serviço de orquestração de logística reversa.</li>
              <li>• O sistema concede aos consumidores finais uma interface segura para validação de posse, atualização de endereço e emissão automática de códigos de postagem (vouchers).</li>
              <li>• Os códigos de postagem gerados permitem a devolução gratuita de equipamentos de comodato pertencentes às operadoras parceiras, via Correios ou postos de coleta (Drop Off) credenciados.</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Aceitação e Acesso à Plataforma</h3>
            <ul className="list-none space-y-3">
              <li>• O presente termo estabelece obrigações contratadas de livre e espontânea vontade, por tempo indeterminado.</li>
              <li>• A PostalGOW Reverse pode modificar estes termos de uso a qualquer momento, mantendo a versão atualizada disponível.</li>
              <li>• Serão utilizadas todas as soluções técnicas para permitir o acesso ao serviço 24 horas por dia. A navegação poderá ser interrompida para atualizações.</li>
              <li>• Em casos de uso abusivo ou tentativas de fraude, o acesso do usuário poderá ser bloqueado ou cancelado imediatamente.</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Gratuidade (B2C)</h3>
            <ul className="list-none space-y-3">
              <li>• A utilização do Devolva Fácil pelo usuário final é <strong>totalmente gratuita</strong>.</li>
              <li>• Os custos logísticos são de responsabilidade integral da operadora parceira solicitante.</li>
              <li>• A PostalGOW Reverse jamais solicitará dados de cartão de crédito, senhas bancárias ou pagamentos via PIX.</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">4. Responsabilidades</h3>
            <h4 className="font-bold text-gray-800 mt-2 mb-2">Do Usuário:</h4>
            <ul className="list-none space-y-3 mb-6">
              <li>• Fornecer informações verídicas sobre seu endereço e posse física do equipamento.</li>
              <li>• Garantir o acondicionamento seguro (embalagem) do equipamento.</li>
              <li>• Utilizar o voucher dentro do prazo de validade.</li>
              <li>• Reconhecer que mensagens eletrônicas são provas válidas da solicitação.</li>
            </ul>

            <h4 className="font-bold text-gray-800 mb-2">Da Plataforma (PostalGOW Reverse):</h4>
            <ul className="list-none space-y-3">
              <li>• Emitir códigos de postagem válidos perante as transportadoras e Correios.</li>
              <li>• Atuar exclusivamente como integradora tecnológica de logística reversa.</li>
              <li>• A comunicação oficial se dá estritamente pelos canais homologados.</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">5. Direitos Autorais e Foro</h3>
            <ul className="list-none space-y-3">
              <li>• A propriedade intelectual é exclusiva da <strong>POSTALGOW REVERSE LTDA</strong>.</li>
              <li>• Fica eleito o foro da Comarca de São Paulo, Capital (ou Barueri/SP), para submissão de questões judiciais.</li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
}