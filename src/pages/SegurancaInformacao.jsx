import React from 'react';

export default function SegurancaInformacao() {
  return (
    <main className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-16">
        
        <div className="text-center mb-16 border-b border-gray-100 pb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2D2856] tracking-tight mb-4">
            Segurança da Informação
          </h1>
          <p className="text-lg text-gray-500">
            Nossos compromissos com a proteção e integridade da nossa infraestrutura.
          </p>
        </div>

        <div className="prose prose-indigo max-w-none text-gray-600 leading-relaxed space-y-8">
          <p>
            A <strong>PostalGOW</strong> entende que atuar como o elo tecnológico entre as operadoras de telecomunicações, os operadores logísticos e os consumidores finais exige o mais alto rigor em segurança cibernética. Operamos nossa plataforma baseados nos pilares de Confidencialidade, Integridade e Disponibilidade.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-900 mb-3 flex items-center gap-2">
                <span>🔐</span> APIs Encriptadas
              </h3>
              <p className="text-sm text-gray-600">
                Garantimos o tráfego seguro de todas as informações. As comunicações entre nossa plataforma, as transportadoras e as operadoras parceiras são realizadas exclusivamente através de APIs com criptografia de ponta a ponta e protocolos seguros (SSL/TLS).
              </p>
            </div>

            <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-900 mb-3 flex items-center gap-2">
                <span>🛡️</span> Infraestrutura Robusta
              </h3>
              <p className="text-sm text-gray-600">
                Os dados processados durante a orquestração da logística reversa são mantidos em servidores com alto padrão de segurança, protegidos contra acessos não autorizados, ataques de negação de serviço (DDoS) e vulnerabilidades conhecidas.
              </p>
            </div>

            <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-900 mb-3 flex items-center gap-2">
                <span>🎭</span> Pseudonimização
              </h3>
              <p className="text-sm text-gray-600">
                Sempre que possível, os dados retidos em nossos bancos de dados para fins de auditoria, prevenção à fraude e cumprimento de obrigações regulatórias são pseudonimizados, reduzindo drasticamente os riscos em caso de incidentes.
              </p>
            </div>

            <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-900 mb-3 flex items-center gap-2">
                <span>🛑</span> Prevenção a Fraudes
              </h3>
              <p className="text-sm text-gray-600">
                Possuímos sistemas automatizados que identificam e bloqueiam comportamentos abusivos, como a implantação de robôs, tentativas de fraude na emissão de códigos ou mecanismos de coleta de dados em lotes que visam sobrecarregar nossos sistemas.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-500">
            <p>
              A segurança é uma responsabilidade compartilhada. Orientamos nossos usuários a zelarem pela proteção de seus dados de acesso, dispositivos móveis e a confiarem apenas em comunicações realizadas pelos canais oficiais da <strong>Devolva Fácil</strong>.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
