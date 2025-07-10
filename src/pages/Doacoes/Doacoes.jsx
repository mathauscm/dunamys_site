const Doacoes = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: "url('/uni.jpg')"}}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-white">
              Seja um Parceiro da Obra
            </h1>
            
            <p className="text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
              Sua contribuição é fundamental para expandir o Reino de Deus na região da Serra da Ibiapaba. 
              Juntos, podemos alcançar mais vidas e transformar comunidades através do amor de Cristo.
            </p>
            
            <div className="bg-gradient-to-r from-dunamys-700 to-dunamys-900 p-8 rounded-2xl mb-12 inline-block">
              <p className="text-white font-bold text-lg">
                "Cada um dê segundo propôs no seu coração, não com tristeza ou por necessidade; 
                porque Deus ama ao que dá com alegria." - 2 Coríntios 9:7
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Seção de Métodos de Pagamento */}
      <div className="py-20 bg-black relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{backgroundImage: "url('/roll1.jpg')"}}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-dunamys-700 to-dunamys-900 bg-clip-text text-transparent">
            
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Texto Generosidade */}
            <div className="flex flex-col justify-center text-center">
              <h3 className="text-4xl font-bold text-dunamys-400 mb-6">GENEROSIDADE</h3>
              <p className="text-xl text-white mb-4">"A alma generosa prosperará!"</p>
              <p className="text-lg text-gray-300">Pv 11.25</p>
            </div>
            
            {/* PIX */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-dunamys-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dunamys-400 mb-2">PIX</h3>
                <p className="text-gray-300">Faça parte desse chamado!</p>
                <p className="text-gray-300">Oferte e contribua para o avanço do Reino de Deus</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg flex justify-center">
                  <img src="/qrcode.png" alt="QR Code PIX" className="w-48 h-48" />
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">Chave PIX CNPJ:</p>
                  <p className="text-white font-mono">39.263.139/0001-63</p>
                  <p className="text-white font-mono">Comunidade Dunamys</p>
                </div>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText("39.263.139/0001-63");
                  }}
                  className="w-full bg-dunamys-600 hover:bg-dunamys-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                >
                  Copiar Chave PIX
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Call to Action Final */}
    </div>
  );
};

export default Doacoes;