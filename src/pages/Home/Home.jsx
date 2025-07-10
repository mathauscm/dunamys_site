import React from 'react';
import Hero from '../../components/sections/Hero/Hero.jsx';
import DunamysTV from '../../components/sections/DunamysTV/DunamysTV.jsx';

/**
 * Home Page Component
 * Main landing page
 */
const Home = () => {
  return (
    <>
      <Hero />
      <DunamysTV />
      
      {/* About Section */}
       <section className="section-padding bg-gray-100">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sobre o Ministério Dunamys
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Somos uma Comunidade Cristã que cremos! <strong className="text-gray-800">Impossibilidades</strong> se tornam possibilidades pela <strong className="text-gray-800">Fé</strong>. É fato, tudo é possível para aquele que crê!
            </p>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              <strong className="text-gray-800">DUNAMYS</strong> é a palavra grega descrita em Atos, cujo significado é <strong className="text-gray-800">PODER</strong>.
            </p>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Temos a <strong className="text-gray-800">MISSÃO</strong> de <strong className="text-gray-800">SERVIR</strong> a Deus e as pessoas através dos ensinamentos de Cristo, <strong className="text-gray-800">TREINANDO</strong> líderes aptos a <strong className="text-gray-800">PROPAGAR</strong> o poderoso Evangelho!
            </p>         
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#8B9A3D'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ensino Bíblico</h3>
              <p className="text-gray-600">
                Fundamentados na Palavra de Deus, oferecemos ensino sólido e prático 
                para o crescimento espiritual.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#8B9A3D'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comunidade</h3>
              <p className="text-gray-600">
                Construímos uma comunidade forte e acolhedora onde todos podem 
                crescer juntos na fé.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#8B9A3D'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Poder Sobrenatural</h3>
              <p className="text-gray-600">
                Experimentamos e ensinamos sobre o poder sobrenatural de Deus 
                manifestado em nossas vidas.
              </p>
            </div>
          </div>

          {/* Botão Valores e Crenças */}
          <div className="text-center mt-12">
            <a
              href="http://127.0.0.1:5173/ministerio/missao-valores"
              className="inline-block text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-colors duration-200 shadow-lg"
              style={{backgroundColor: '#8B9A3D'}}
            >
              Valores e Crenças
            </a>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conteúdo em Destaque
            </h2>
            <p className="text-xl text-gray-600">
              Mensagens inspiradoras e conteúdo que transforma vidas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for featured content */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Título da Mensagem {item}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Descrição breve da mensagem que inspira e transforma vidas através do poder de Deus.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">15 de Janeiro, 2024</span>
                    <a href="#" className="font-medium hover:underline transition-colors duration-200" style={{color: '#8B9A3D'}}>
                      Ler mais →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      
    </>
  );
};

export default Home;