import React from 'react';
import Button from '../../common/Button/Button.jsx';
import InstagramFeed from '../InstagramFeed/InstagramFeed.jsx';

/**
 * Hero Section Component
 * Main hero section for the homepage
 */
const Hero = () => {
  return (
    <section 
      className="relative text-white overflow-hidden min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: '100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay escuro para melhor legibilidade */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-20">
          {/* Content */}
          <div className="lg:w-1/2 lg:pr-12 text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              <span 
                className="inline-block italic font-black"
                style={{
                  fontFamily: 'Arial Black, sans-serif',
                  fontSize: 'clamp(3rem, 8vw, 7rem)',
                  fontWeight: '900',
                  fontStyle: 'italic',
                  color: 'transparent',
                  WebkitTextStroke: '2px white',
                  letterSpacing: '-0.07em',
                  transform: 'perspective(900px) rotateX(15deg)',
                  marginTop: '-50rem'
                }}
              >
                DUNAMYS
              </span>
            </h1>
            
            {/* Texto com padrão uniforme */}
            <div className="space-y-2 mb-10">
              <p 
                className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-widest opacity-95 animate-slide-up"
                style={{
                  fontFamily: 'Montserrat, "Helvetica Neue", sans-serif',
                  fontWeight: '650',
                  letterSpacing: '0.12em',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                100
              </p>
              <p 
                className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-widest opacity-95 animate-slide-up"
                style={{
                  fontFamily: 'Montserrat, "Helvetica Neue", sans-serif',
                  fontWeight: '650',
                  letterSpacing: '0.12em',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  animationDelay: '0.1s'
                }}
              >
                COMPETIÇÃO
              </p>
              <p 
                className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-widest opacity-95 animate-slide-up"
                style={{
                  fontFamily: 'Montserrat, "Helvetica Neue", sans-serif',
                  fontWeight: '650',
                  letterSpacing: '0.12em',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  animationDelay: '0.2s'
                }}
              >
                100% COOPERAÇÃO
              </p>
            </div>
          </div>

          {/* Instagram Feed substitui completamente o placeholder */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              {/* Instagram Feed Component - SEM texto nem ícone */}
              <InstagramFeed />

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gray-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS personalizado para animação flutuante */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap');
        
        @keyframes float {
          0%, 100% {
            transform: perspective(500px) rotateX(15deg) translateY(0px);
          }
          50% {
            transform: perspective(500px) rotateX(15deg) translateY(-10px);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out 0.2s both;
        }
      `}</style>
    </section>
  );
};

export default Hero;