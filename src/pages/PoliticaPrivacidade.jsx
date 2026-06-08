import React from 'react';

export default function PoliticaPrivacidade() {
  return (
    <main className="bg-gray-50 min-h-screen py-20 px-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-16 flex flex-col items-center text-center">
        
        <div className="mb-12 border-b border-gray-100 pb-10 w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2D2856] tracking-tight mb-4">
            Política de Privacidade
          </h1>
          <p className="text-lg text-gray-500">
            Tratamento de Dados Pessoais (LGPD)
          </p>
        </div>

        <div className="prose prose-green max-w-3xl text-gray-600 leading-relaxed space-y-10">
          <p>
            O preenchimento dos fluxos de devolução via site ou canais de mensageria exige que o usuário forneça informações verdadeiras, exatas e atualizadas. Ao utilizar nossos serviços, o usuário autoriza expressamente a plataforma a coletar, usar, armazenar e tratar dados essenciais para a execução da logística reversa, em estrita conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
          </p>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Dados Coletados e Finalidade</h3>
            <p className="mb-4">Os dados processados pela plataforma incluem, mas não se limitam a:</p>
            <ul className="list-none space-y-3 mb-6">
              <li>• Nome completo e CPF para validação junto à operadora parceira.</li>
              <li>• Endereço completo contendo CEP, rua, número e complementos.</li>
              <li>• Dados de contato como Telefone, WhatsApp e E-mail.</li>
              <li>• Logs de interação com os sistemas e agentes virtuais.</li>
            </ul>
            
            <p className="mb-4">O tratamento desses dados ocorre visando exclusivamente:</p>
            <ul className="list-none space-y-3">
              <li>• A emissão de vouchers de postagem ou coleta.</li>
              <li>• A comunicação de instruções operacionais e logísticas.</li>
              <li>• A atualização do status de devolução nos sistemas internos e das operadoras parceiras.</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Direitos do Usuário</h3>
            <ul className="list-none space-y-3">
              <li>• O usuário poderá solicitar, de maneira gratuita, a modificação, exclusão ou exportação dos seus dados (Art. 18 da LGPD).</li>
              <li>• O usuário tem o direito de solicitar a exclusão de seus dados a qualquer momento através dos nossos canais oficiais.</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Retenção e Exclusão de Dados</h3>
            <ul className="list-none space-y-3">
              <li>• Os dados estritamente necessários para a comprovação da devolução serão mantidos de forma segura.</li>
              <li>• A retenção ocorre apenas para fins de auditoria, prevenção à fraude e cumprimento de obrigações regulatórias.</li>
              <li>• Findo o prazo prescricional, os dados pessoais serão totalmente excluídos de nossos servidores.</li>
            </ul>
          </div>

        </div>

      </div>
    </main>
  );
}