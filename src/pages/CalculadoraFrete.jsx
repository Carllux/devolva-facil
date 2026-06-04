import React, { useState } from 'react';

export default function CalculadoraFrete() {
  const [formData, setFormData] = useState({
    cepOrigem: '',
    cepDestino: '',
    altura: '',
    largura: '',
    comprimento: '',
    peso: '',
    seguro: ''
  });

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [sortBy, setSortBy] = useState('price'); 

  // Mapeamento enriquecido com Logos da Orange Envios e nomes das Modalidades
  const transportadorasMap = {
    0: {
      nome: 'Correios',
      logo: 'https://www.orangeenvios.com.br/images/Transportadoracalc/correios.png',
      modalidades: { 0: 'SEDEX', 1: 'PAC', 2: 'Mini Envios' }
    },
    1: {
      nome: 'Jadlog',
      logo: 'https://www.orangeenvios.com.br/images/Transportadora/JadLog.png',
      modalidades: { 4: 'Package', 5: '.Com' }
    },
    2: {
      nome: 'Total Express',
      logo: 'https://www.orangeenvios.com.br/images/Transportadora/TotalExpress.png',
      modalidades: {}
    },
    3: {
      nome: 'Loggi',
      logo: 'https://www.orangeenvios.com.br/images/Transportadora/Loggi.png',
      modalidades: { 15: 'Expresso / Ponto' }
    },
    4: {
      nome: 'J&T Express',
      logo: 'https://www.orangeenvios.com.br/images/Transportadora/JeT.png',
      modalidades: { 14: 'Padrão' }
    }
  };

  const maskCEP = (value) => {
    return value
      .replace(/\D/g, '') 
      .replace(/^(\d{5})(\d)/, '$1-$2') 
      .slice(0, 9); 
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    
    // Máscara para CEP
    if (name === 'cepOrigem' || name === 'cepDestino') {
      value = maskCEP(value);
    } 
    // Lógica Financeira: trata o seguro para alinhar à direita (estilo calculadora)
    else if (name === 'seguro') {
      // Remove tudo que não é número
      const rawValue = value.replace(/\D/g, '');
      // Converte para centavos (divide por 100)
      const numericValue = Number(rawValue) / 100;
      // Formata como moeda brasileira
      value = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(numericValue);
      
      // Se o valor for zero, limpa o campo para o placeholder aparecer
      if (numericValue === 0) value = '';
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setResults([]);

    const parseNumber = (val) => Number(val.replace(/[R$\s]/g, '').replace(',', '.'));

    const payload = {
      remetente: formData.cepOrigem,
      destino: formData.cepDestino,
      valorSegurado: parseNumber(formData.seguro),
      volumes: [
        {
          altura: Number(formData.altura),
          largura: Number(formData.largura),
          comprimento: Number(formData.comprimento),
          peso: parseNumber(formData.peso)
        }
      ]
    };

    try {
      const response = await fetch('/api/CalculadoraInstitucional/FretesDisponiveis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      setErrorMsg(`Erro ao consultar fretes: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const getSortedResults = () => {
    const validResults = results.filter(item => !item.erro);
    if (sortBy === 'price') return validResults.sort((a, b) => a.preco - b.preco);
    if (sortBy === 'time') return validResults.sort((a, b) => a.prazo - b.prazo);
    return validResults;
  };

  return (
    <section className="py-20 bg-white" id="calculadora">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D2856] mb-4">
            Decida o frete certo para este envio
          </h2>
          <p className="text-lg text-gray-600">
            Compare custo, prazo e confiabilidade antes de postar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* COLUNA DO FORMULÁRIO */}
          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-max">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
                  <span className="text-pink-500">📍</span> De onde sai o pedido?
                </label>
                <input required type="text" name="cepOrigem" inputMode="numeric" placeholder="07177-100" value={formData.cepOrigem} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-blue-50/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"/>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
                  <span className="text-[#8B5A2B]">📦</span> Para onde você envia?
                </label>
                <input required type="text" name="cepDestino" inputMode="numeric" placeholder="44009-778" value={formData.cepDestino} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"/>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
                  <span className="text-gray-400">📐</span> Tamanho da embalagem (já fechada)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <input required type="number" name="altura" placeholder="Alt." value={formData.altura} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"/>
                  <input required type="number" name="largura" placeholder="Larg." value={formData.largura} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"/>
                  <input required type="number" name="comprimento" placeholder="Comp." value={formData.comprimento} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"/>
                </div>
                <div className="flex items-start gap-2 mt-2 text-sm text-gray-600">
                  <span className="text-orange-500 font-bold mt-0.5">✓</span>
                  <p>Use as medidas externas da embalagem em cm (Altura x Largura x Comprimento).</p>
                </div>
              </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
                <span className="text-yellow-500">⚖️</span> Peso real do pacote (kg)
              </label>
              <input 
                required 
                type="text" 
                inputMode="decimal" 
                name="peso" 
                placeholder="Ex: 2,5" 
                value={formData.peso} 
                onChange={handleInputChange} 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <div className="flex items-start gap-2 mt-2 text-sm text-gray-600">
                <span className="text-orange-500 font-bold mt-0.5">✓</span>
                <p>Use vírgula para decimais (Ex: 2,5 para 2kg e 500g).</p>
              </div>
            </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
                  <span className="text-orange-400">🛡️</span> Valor da mercadoria (seguro)
                </label>
                <input 
                  required 
                  type="text" 
                  inputMode="decimal" 
                  name="seguro" 
                  placeholder="R$ 0,00" 
                  value={formData.seguro} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none text-right" 
                />
                <div className="flex items-start gap-2 mt-2 text-sm text-gray-600">
                  <span className="text-orange-500 font-bold mt-0.5">✓</span>
                  <p>Valor usado para indenização em caso de extravio.</p>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-center text-sm mb-4">
                  <strong>Frete não é só preço.</strong> É reputação, prazo e suporte.
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-[#1A1A40] hover:bg-blue-900 text-white font-bold py-4 rounded-xl shadow-md transition-all flex justify-center items-center gap-2 disabled:bg-gray-400"
                >
                  {loading ? (
                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                  ) : (
                    "Calcular frete"
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* COLUNA DE RESULTADOS */}
          <div className="lg:col-span-7">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h3 className="text-xl font-bold text-[#2D2856]">Opções recomendadas</h3>
                <p className="text-sm text-gray-500">Selos indicam a melhor escolha por perfil de decisão.</p>
              </div>
              
              {results.length > 0 && (
                <div className="flex flex-col gap-1 w-full sm:w-auto">
                  <div className="text-xs text-gray-500 font-bold mb-1">Priorizar decisão por:</div>
                  <div className="flex bg-gray-100 p-1 rounded-lg">
                    <button onClick={() => setSortBy('price')} className={`flex-1 px-3 py-2 rounded-md text-sm font-bold transition-all ${sortBy === 'price' ? 'bg-white shadow-sm text-[#2D2856]' : 'text-gray-500 hover:text-gray-700'}`}>
                      Menor preço
                    </button>
                    <button onClick={() => setSortBy('time')} className={`flex-1 px-3 py-2 rounded-md text-sm font-bold transition-all ${sortBy === 'time' ? 'bg-white shadow-sm text-[#2D2856]' : 'text-gray-500 hover:text-gray-700'}`}>
                      Menor prazo
                    </button>
                  </div>
                </div>
              )}
            </div>

            {errorMsg && (
              <div className="bg-red-50 text-red-600 p-5 rounded-xl border border-red-200 font-medium break-words mb-6 shadow-sm">
                <span className="font-bold block mb-1">Atenção:</span>
                <span className="text-sm font-mono">{errorMsg}</span>
              </div>
            )}

            {!loading && results.length === 0 && !errorMsg && (
              <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-3xl text-gray-400 bg-gray-50/50">
                <span className="text-4xl mb-3">📦</span>
                <p>Preencha os dados ao lado para ver as cotações.</p>
              </div>
            )}

            <div className="space-y-4 max-h-[650px] overflow-y-auto pr-2 custom-scrollbar">
              {getSortedResults().map((frete, index) => {
                const transpInfo = transportadorasMap[frete.transportadora] || {
                  nome: `Transportadora ${frete.transportadora}`,
                  logo: null,
                  modalidades: {}
                };
                const modalidadeNome = transpInfo.modalidades[frete.modalidade] || frete.modalidade;

                return (
                  <div key={frete.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-md transition-all flex flex-col relative overflow-hidden">
                    
                    {/* Badge Condicional Simulado (Canto superior direito) */}
                    <div className="absolute top-4 right-4">
                      {index === 0 && sortBy === 'price' && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1.5 rounded-full border border-yellow-200 flex items-center gap-1">
                          ⭐ Melhor custo-benefício
                        </span>
                      )}
                      {index === 0 && sortBy === 'time' && (
                        <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1.5 rounded-full border border-green-200 flex items-center gap-1">
                          ⏱ Mais rápido
                        </span>
                      )}
                    </div>

                    {/* Cabeçalho do Card: Logo + Nome */}
                    <div className="flex items-center gap-4 mb-5 border-b border-gray-100 pb-5">
                      <div className="w-20 h-12 flex items-center justify-center shrink-0">
                        {transpInfo.logo ? (
                          <img src={transpInfo.logo} alt={transpInfo.nome} className="max-w-full max-h-full object-contain" />
                        ) : (
                          <span className="text-3xl">🚚</span>
                        )}
                      </div>
                      <div>
                        <div className="font-extrabold text-[#2D2856] text-xl">
                          {transpInfo.nome}
                        </div>
                        <div className="text-sm text-gray-500 font-medium tracking-wide">
                          {modalidadeNome}
                        </div>
                      </div>
                    </div>

                    {/* Dados Valores e Prazo */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gray-50 rounded-xl p-3">
                        <div className="text-xs text-gray-500 font-bold mb-1 uppercase tracking-wider">Preço</div>
                        <div className="font-black text-gray-900 text-lg">
                          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(frete.preco)}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <div className="text-xs text-gray-500 font-bold mb-1 uppercase tracking-wider">Prazo</div>
                        <div className="font-black text-gray-900 text-lg">{frete.prazo} dias</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <div className="text-xs text-gray-500 font-bold mb-1 uppercase tracking-wider">Status</div>
                        <div className="font-bold text-green-600 text-lg">Disponível</div>
                      </div>
                    </div>

                  </div>
                );
              })}

              {/* Exibição de Erros (Indisponíveis) */}
              {results.filter(r => r.erro).map(freteErr => {
                const transpInfo = transportadorasMap[freteErr.transportadora] || {
                  nome: `Transportadora ${freteErr.transportadora}`,
                  logo: null
                };
                return (
                  <div key={freteErr.id} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 opacity-70 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-8 flex items-center justify-center shrink-0 grayscale opacity-50">
                        {transpInfo.logo ? (
                          <img src={transpInfo.logo} alt={transpInfo.nome} className="max-w-full max-h-full object-contain" />
                        ) : (
                          <span className="text-2xl">🚚</span>
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-gray-600">{transpInfo.nome}</div>
                        <div className="text-xs text-red-500 font-medium mt-0.5">Bloqueado: {freteErr.erroMensagem}</div>
                      </div>
                    </div>
                    <div className="text-gray-400 font-bold text-sm bg-white px-3 py-1 rounded-lg border border-gray-200">Indisponível</div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}