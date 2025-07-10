
const MissaoValores = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Conteúdo Principal */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto Principal */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-dunamys-700 to-dunamys-900 bg-clip-text text-transparent">
                Prosseguindo para o ALVO.
              </h1>
              
              <div className="bg-gradient-to-r from-dunamys-700 to-dunamys-900 p-8 rounded-lg mb-8 transform hover:scale-105 transition-transform duration-300">
                <p className="text-white font-bold text-lg leading-relaxed">
                  Implantar e promover o Reino de Deus, cultivanto os valores do Céu, 
                  discipulando Líderes aptos a propagar e viver a Palavra da fé...
                </p>
              </div>
              
              <div className="text-gray-300 space-y-6 text-lg">
                <p className="leading-relaxed">
                  A Comunidade Cristã Dunamys Ibiapaba está implantada no 
                  interior do estado do Ceará na região da Serra. A região 
                  possui aproximadamente 380 mil habitantes, cuja maioria só 
                  conhecem Deus de ouvir Falar, ou seja, conhecem o Jesus que 
                  está na Cruz.... Queremos levar para as pessoas o Jesus que 
                  Ressuscitou! um Deus vivo e que quer se relacionar com o 
                  homem de forma pessoal e íntima.
                </p>
                <p className="text-xl font-bold text-dunamys-400">
                  Jesus disse: Os Campos estão Brancos e Prontos para a Ceifa!
                </p>
              </div>
            </div>

            {/* Imagem Principal */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-dunamys-700 to-dunamys-900 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <img 
                  src="/Dunamys_site_abra.jpg" 
                  alt="Dunamys Abraço" 
                  className="relative z-10 w-96 h-96 object-cover rounded-full border-4 border-dunamys-600 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Crenças */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-dunamys-700 to-dunamys-900 bg-clip-text text-transparent">
            Nossos Valores e Crenças
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CREMOS NA BÍBLIA",
                content: "A Bíblia é a inspirada por Deus! Ela é o resultado de homens santos do passado que falaram e escreveram movidos pelo Espírito Santo. O Novo Testamento revela a NOVA ALIANÇA que é o guia doutrinário para nossa Comunidade.",
                verses: "(2Tm 3.16, 1Ts 2.13 e 1Pe 1.21)"
              },
              {
                title: "CREMOS NA TRINDADE",
                content: "Nosso Deus é um, mas é manifesto em três pessoas – o Pai, o Filho e o Espírito Santo. São co-iguais. Deus Pai é a Fonte da Palavra (Logos) e o Gerador da vida. O Filho é a Palavra revestida de carne.",
                verses: "(Fp 2.6, Jo 14.28, 16.28 e 1.14)"
              },
              {
                title: "CREMOS NA REDENÇÃO",
                content: "Pela queda de Adão o pecado entrou no mundo e a morte reinou, porque TODOS PECARAM.... Jesus Cristo, o Filho de Deus, derramou Seu Sangue para pagar a dívida do homem. A Salvação é um DOM de Deus.",
                verses: "(Ef 2.8, Rm 5.14; 3.10; 3.23)"
              },
              {
                title: "CREMOS NO NOVO NASCIMENTO",
                content: "Aquele que recebe Jesus tem o poder de Nascer de novo. Em João 3 Jesus declara: 'Quem não nascer de novo não pode ver o Reino de Deus!'. O Novo Nascimento é necessário para todos os homens.",
                verses: "(Jo 1.12, 3.3-5, Rm 10.9-10)"
              },
              {
                title: "CREMOS NO BATISMO",
                content: "O batismo nas águas é por imersão, constitui um mandamento expresso do nosso Senhor. O BATISMO NO ESPÍRITO SANTO é um dom de Deus prometido pelo Senhor Jesus Cristo para a igreja.",
                verses: "(Mt 28.19, At 2.38, 19.1-7)"
              },
              {
                title: "CREMOS NA SANTIDADE",
                content: "A Bíblia ensina que sem santificação ninguém pode ver o Senhor. A permanência em Jesus tem um selo: 'Aparte-se da iniquidade todo aquele que professa o nome do Senhor'.",
                verses: "(Hb 12.14, 1 Ts 5.23, 2 Pe 3.18)"
              },
              {
                title: "CREMOS QUE DEUS CURA",
                content: "Jesus Conquistou nossa cura! Doenças físicas do corpo humano são destruídas pelo poder de Deus através da oração da fé e pela imposição de mãos.",
                verses: "(Mc 16.18, Tg 5.14-25, 1 Pe 2.24)"
              },
              {
                title: "CREMOS NA RESSURREIÇÃO",
                content: "Os anjos disseram: 'O mesmo Jesus voltará da mesma maneira que o vistes subir'. Sua volta é iminente. Os mortos em Cristo ressuscitarão primeiro.",
                verses: "(At 1.11, 1Ts 4.16 e 17)"
              },
              {
                title: "CREMOS NO JUÍZO ETERNO",
                content: "Aquele que morre fisicamente em seus pecados, sem Cristo, está sem esperança e perdido eternamente! O Lago de Fogo foi preparado para o diabo e seus anjos.",
                verses: "(Hb 9.27, Ap 19.20)"
              }
            ].map((belief, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-dunamys-700 to-dunamys-900 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-gray-900 border border-gray-700 rounded-lg p-6 h-full hover:border-dunamys-600 transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-lg font-bold text-dunamys-400 mb-4">{belief.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{belief.content}</p>
                  <p className="text-dunamys-400 text-xs font-semibold">{belief.verses}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Galeria de Imagens */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-dunamys-700 to-dunamys-900 bg-clip-text text-transparent">
            Nossa Comunidade
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/roll1.jpg", alt: "Comunidade Dunamys 1" },
              { src: "/roll2.jpg", alt: "Comunidade Dunamys 2" },
              { src: "/background.jpg", alt: "Comunidade Dunamys 3" }
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer com Dunamys branding */}
    </div>
  );
};

export default MissaoValores;