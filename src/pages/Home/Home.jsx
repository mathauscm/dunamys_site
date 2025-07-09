import React from 'react';
import { Hero } from '../../components/sections';

/**
 * Home Page Component
 * Main landing page
 */
const Home = () => {
  return (
    <>
      <Hero />
      
      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sobre o Ministério Dunamys
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos um ministério dedicado a transformar vidas através do poder de Deus, 
              espalhando o evangelho da fé e prosperidade por todo o mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="section-padding bg-gray-50">
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
              <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-400"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Título da Mensagem {item}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Descrição breve da mensagem que inspira e transforma vidas através do poder de Deus.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">15 de Janeiro, 2024</span>
                    <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                      Ler mais →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Transformar sua Vida?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a nossa comunidade e experimente o poder transformador de Deus em sua vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Participar dos Eventos
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors duration-200">
              Falar Conosco
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;