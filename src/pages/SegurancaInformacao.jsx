import React from 'react';

export default function SegurancaInformacao() {
  return (
    <main className="bg-gray-50 min-h-screen py-20 px-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-16 flex flex-col items-center text-center">
        
        <div className="mb-12 border-b border-gray-100 pb-10 w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2D2856] tracking-tight mb-4">
            Segurança da Informação
          </h1>
          <p className="text-lg text-gray-500">
            Nossos compromissos com a proteção e integridade da nossa infraestrutura.
          </p>
        </div>

        <div className="prose prose-indigo max-w-3xl text-gray-600 leading-relaxed space-y-10">
          <p>
            A <strong>PostalGOW Reverse</strong> entende que atuar como o elo tecnológico entre as operadoras de telecomunicações, os operadores logísticos e os consumidores finais exige o mais alto rigor em segurança cibernética. Operamos nossa plataforma baseados nos pilares de Confidencialidade, Integridade e Disponibilidade.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-center">
            <div className="bg-indigo-50/50 p-8 rounded-2xl border border-indigo-100 flex flex-col items-center">
              <span className="text-4xl mb-4 block">🔐</span>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">APIs Encriptadas</h3>
              <p className="text-sm text-gray-600">
                Garantimos o tráfego seguro de todas as informações. As comunicações são realizadas através de APIs com criptografia de ponta a ponta e protocolos seguros (SSL/TLS).
              </p>
            </div>

            <div className="bg-indigo-50/50 p-8 rounded-2xl border border-indigo-100 flex flex-col items-center">
              <span className="text-4xl mb-4 block">🛡️</span>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Infraestrutura Robusta</h3>
              <p className="text-sm text-gray-600">
                Os dados processados são mantidos em servidores com alto padrão de segurança, protegidos contra acessos não autorizados e ataques de negação de serviço (DDoS).
              </p>
            </div>

            <div className="bg-indigo-50/50 p-8 rounded-2xl border border-indigo-100 flex flex-col items-center">
              <span className="text-4xl mb-4 block">🎭</span>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Pseudonimização</h3>
              <p className="text-sm text-gray-600">
                Sempre que possível, os dados retidos em nossos bancos de dados para fins de auditoria e cumprimento de obrigações regulatórias são pseudonimizados.
              </p>
            </div>

            <div className="bg-indigo-50/50 p-8 rounded-2xl border border-indigo-100 flex flex-col items-center">
              <span className="text-4xl mb-4 block">🛑</span>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Prevenção a Fraudes</h3>
              <p className="text-sm text-gray-600">
                Possuímos sistemas automatizados que identificam e bloqueiam comportamentos abusivos, como a implantação de robôs ou tentativas de fraude.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-500">
            <p>
              A segurança é uma responsabilidade compartilhada. Orientamos nossos usuários a zelarem pela proteção de seus dados de acesso e a confiarem apenas em comunicações realizadas pelos canais oficiais da <strong>Devolva Fácil</strong>.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}