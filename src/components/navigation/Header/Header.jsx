import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button.jsx';

/**
 * Header Component
 * Main navigation header
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Ministério', href: '/ministerio' },
    { name: 'DunamysTV', href: '/dunamystv' },
    { name: 'Mensagens', href: '/mensagens' },
    { name: 'Eventos', href: '/eventos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' }
  ];

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/logoprincipal.jpg" 
                alt="Dunamys" 
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-green-400 transition-all duration-200 font-medium hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 hover:opacity-90" style={{backgroundColor: '#8B9A3D'}}>
              Participe
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:text-green-400 transition-all duration-200 font-medium py-2 hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <button className="w-full text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 hover:opacity-90" style={{backgroundColor: '#8B9A3D'}}>
                  Participe
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;