import React from 'react';
import Button from '../../common/Button/Button.jsx';

/**
 * Hero Section Component
 * Main hero section for the homepage
 */
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container-max relative">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-20">
          {/* Content */}
          <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Transformando Vidas com o{' '}
              <span className="text-yellow-300">Poder de Deus</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
              Junte-se a nós em uma jornada de fé, crescimento espiritual e impacto no Reino de Deus.
            </p>

          </div>

          {/* Image/Visual */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              {/* Placeholder for image */}
              <div className="w-full h-96 lg:h-[600px] bg-gradient-to-br from-white/20 to-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full mb-6 mx-auto flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Poder do Alto</h3>
                  <p className="text-white/80">Experimentando o sobrenatural de Deus</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gray-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;