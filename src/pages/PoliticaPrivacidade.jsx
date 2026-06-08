import React from 'react';

export default function PoliticaPrivacidade() {
  return (
    <main className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-16">
        
        <div className="text-center mb-16 border-b border-gray-100 pb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2D2856] tracking-tight mb-4">
            Política de Privacidade
          </h1>
          <p className="text-lg text-gray-500">
            Tratamento de Dados Pessoais (LGPD)
          </p>
        </div>

        <div className="prose prose-green max-w-none text-gray-600 leading-relaxed space-y-8">
          <p>
            O preenchimento dos fluxos de devolução via site ou canais de mensageria exige que o usuário forneça informações verdadeiras, exatas e atualizadas. Ao utilizar nossos serviços, o usuário autoriza expressamente a plataforma a coletar, usar, armazenar e tratar dados essenciais para a execução da logística reversa, em estrita conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
          </p>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">1. Dados Coletados e Finalidade</h3>
            <p className="mb-3">Os dados processados pela plataforma incluem, mas não se limitam a:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Nome completo e CPF para validação junto à operadora parceira.</li>
              <li>Endereço completo contendo CEP, rua, número e complementos.</li>
              <li>Dados de contato como Telefone, WhatsApp e E-mail.</li>
              <li>Logs de interação com os sistemas e agentes virtuais da plataforma.</li>
            </ul>
            
            <p className="mb-3 mt-4">O tratamento desses dados ocorre visando exclusivamente:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A emissão de vouchers de postagem ou coleta.</li>
              <li>A comunicação de instruções operacionais e logísticas.</li>
              <li>A atualização do status de devolução nos sistemas internos e das operadoras parceiras.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">2. Direitos do Usuário</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>O usuário poderá solicitar, de maneira gratuita, a modificação, exclusão ou exportação dos seus dados, conforme disposto no Art. 18 da LGPD.</li>
              <li>O usuário tem o direito de solicitar a exclusão de seus dados a qualquer momento através dos nossos canais de atendimento oficiais.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">3. Retenção e Exclusão de Dados</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Os dados estritamente necessários para a comprovação da devolução do equipamento e validação do fluxo logístico serão mantidos na base de dados de forma segura.</li>
              <li>A retenção ocorre apenas para fins de auditoria, prevenção à fraude e cumprimento de obrigações legais ou regulatórias (como a comprovação de devolução para evitar multas de comodato junto à operadora).</li>
              <li>Findo o prazo prescricional necessário para o cumprimento das obrigações regulatórias, os dados pessoais serão totalmente excluídos dos nossos servidores, sem possibilidade de reversão do processo.</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-xl border border-green-100 mt-10">
            <h4 className="font-bold text-green-900 mb-2">Dúvidas sobre seus dados?</h4>
            <p className="text-sm text-green-800">
              Entre em contato com nosso Data Protection Officer (DPO) através do e-mail: <strong>dpo@postalgow.com.br</strong>
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
