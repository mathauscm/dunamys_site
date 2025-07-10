const Doacoes = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-dunamys-700 to-dunamys-900 bg-clip-text text-transparent">
              Seja um Parceiro da Obra
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Sua contribuição é fundamental para expandir o Reino de Deus na região da Serra da Ibiapaba. 
              Juntos, podemos alcançar mais vidas e transformar comunidades através do amor de Cristo.
            </p>
            
            <div className="bg-gradient-to-r from-dunamys-700 to-dunamys-900 p-8 rounded-2xl mb-12 inline-block">
              <p className="text-black font-bold text-lg">
                "Cada um dê segundo propôs no seu coração, não com tristeza ou por necessidade; 
                porque Deus ama ao que dá com alegria." - 2 Coríntios 9:7
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Opções de Doação */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-dunamys-700 to-dunamys-900 bg-clip-text text-transparent">
            Formas de Contribuir
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dízimo */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-dunamys-700 to-dunamys-900 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-gray-900 border border-gray-700 rounded-lg p-8 h-full hover:border-dunamys-600 transition-colors duration-300 text-center">
                <div className="w-16 h-16 bg-dunamys-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dunamys-400 mb-4">Dízimo</h3>
                <p className="text-gray-300 mb-6">
                  O dízimo é uma expressão de gratidão e reconhecimento de que tudo vem de Deus. 
                  Contribua com 10% de sua renda para sustentar a obra do Senhor.
                </p>
              </div>
            </div>

            {/* Oferta */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-dunamys-700 to-dunamys-900 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-gray-900 border border-gray-700 rounded-lg p-8 h-full hover:border-dunamys-600 transition-colors duration-300 text-center">
                <div className="w-16 h-16 bg-dunamys-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dunamys-400 mb-4">Oferta</h3>
                <p className="text-gray-300 mb-6">
                  Ofertas espontâneas movidas pelo coração. Contribua com qualquer valor 
                  para apoiar projetos específicos e necessidades da igreja.
                </p>
              </div>
            </div>

            {/* Missões */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-dunamys-700 to-dunamys-900 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-gray-900 border border-gray-700 rounded-lg p-8 h-full hover:border-dunamys-600 transition-colors duration-300 text-center">
                <div className="w-16 h-16 bg-dunamys-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dunamys-400 mb-4">Missões</h3>
                <p className="text-gray-300 mb-6">
                  Apoie o trabalho missionário e a evangelização. Sua contribuição ajuda 
                  a levar o Evangelho aos confins da terra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Métodos de Pagamento */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-dunamys-700 to-dunamys-900 bg-clip-text text-transparent">
            Métodos de Pagamento
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* PIX */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-dunamys-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dunamys-400 mb-2">PIX</h3>
                <p className="text-gray-300">Método rápido e seguro</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">Chave PIX:</p>
                  <p className="text-white font-mono text-lg break-all">dunamys@igreja.com.br</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">CNPJ:</p>
                  <p className="text-white font-mono">12.345.678/0001-90</p>
                </div>
                <button className="w-full bg-dunamys-600 hover:bg-dunamys-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
                  Copiar Chave PIX
                </button>
              </div>
            </div>

            {/* Transferência Bancária */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-dunamys-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dunamys-400 mb-2">Transferência Bancária</h3>
                <p className="text-gray-300">Dados bancários completos</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Banco:</p>
                      <p className="text-white">Banco do Brasil</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Agência:</p>
                      <p className="text-white font-mono">1234-5</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Conta:</p>
                      <p className="text-white font-mono">12345-6</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Tipo:</p>
                      <p className="text-white">Conta Corrente</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">Favorecido:</p>
                  <p className="text-white">Comunidade Cristã Dunamys</p>
                </div>
                <button className="w-full bg-dunamys-600 hover:bg-dunamys-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
                  Copiar Dados
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Transparência */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-dunamys-700 to-dunamys-900 bg-clip-text text-transparent">
            Transparência e Responsabilidade
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-dunamys-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dunamys-400 mb-4">Uso Responsável</h3>
              <p className="text-gray-300">
                Todas as doações são utilizadas de forma responsável e transparente, 
                sempre priorizando a expansão do Reino de Deus.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-dunamys-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dunamys-400 mb-4">Prestação de Contas</h3>
              <p className="text-gray-300">
                Mantemos registros detalhados de todas as movimentações financeiras 
                e prestamos contas regularmente à comunidade.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-dunamys-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dunamys-400 mb-4">Impacto Real</h3>
              <p className="text-gray-300">
                Sua contribuição gera impacto real na vida das pessoas, 
                transformando comunidades através do amor de Cristo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Final */}
      <div className="py-20 bg-gradient-to-r from-dunamys-700 to-dunamys-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Seja Parte desta Transformação
          </h2>
          <p className="text-xl text-black mb-8">
            Juntos podemos alcançar mais vidas e expandir o Reino de Deus na Serra do Ceará.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doacoes;