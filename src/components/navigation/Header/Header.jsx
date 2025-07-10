import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Header Component
 * Main navigation header with specific dropdowns
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const dropdownRefs = useRef({});

  // Navegação com dropdowns específicos
  const navigation = [
    { name: 'Início', href: '/' },
    { 
      name: 'Ministério', 
      href: '/ministerio',
      dropdown: [
        { name: 'Missão e Valores?', href: '/ministerio/missao-valores' },
        { name: 'Doações', href: '/ministerio/doacoes' }
      ]
    },
    { 
      name: 'Igrejas', 
      href: '/igrejas',
      dropdown: [
        { name: 'Endereços', href: '/igrejas/enderecos' },
        { name: 'Reuniões', href: '/igrejas/reunioes' }
      ]
    },
    { name: 'DunamysTV', href: '/dunamystv' },
    { name: 'Devocional', href: '/devocional' },
    { name: 'Eventos', href: '/eventos' },
    { 
      name: 'Escolas', 
      href: '/escolas',
      dropdown: [
        { name: 'Super Classe', href: '/escolas/super-classe' }
      ]
    },
    { name: 'Área de Membro', href: '/membro' }
  ];

  // Fecha dropdown quando clica fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && dropdownRefs.current[activeDropdown]) {
        if (!dropdownRefs.current[activeDropdown].contains(event.target)) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const toggleDropdown = (itemName) => {
    // Limpa qualquer timeout pendente
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleMouseEnter = (itemName) => {
    // Limpa qualquer timeout pendente
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    
    if (navigation.find(item => item.name === itemName)?.dropdown) {
      setActiveDropdown(itemName);
    }
  };

  const handleMouseLeave = () => {
    // Limpa timeout anterior se existir
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    
    // Delay mais longo para permitir mover o mouse
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 500);
    
    setDropdownTimeout(timeout);
  };

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-center py-1">
          {/* Logo */}
          <div className="flex items-center mr-8">
            <Link to="/" className="flex items-center">
              <img 
                src="/logoprincipal.jpg" 
                alt="Dunamys" 
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Próximo ao logo */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div 
                key={item.name}
                className="relative"
                ref={el => dropdownRefs.current[item.name] = el}
              >
                {item.dropdown ? (
                  // Item com dropdown
                  <div 
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center text-white hover:text-green-400 transition-all duration-200 font-medium hover:scale-105"
                    >
                      {item.name}
                      <svg 
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div 
                        className="absolute top-full left-0 mt-1 min-w-max bg-black rounded-lg shadow-xl py-2 z-50"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-green-400 transition-colors duration-200 whitespace-nowrap"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              // Limpa timeout se existir
                              if (dropdownTimeout) {
                                clearTimeout(dropdownTimeout);
                                setDropdownTimeout(null);
                              }
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Item normal sem dropdown
                  <Link
                    to={item.href}
                    className="text-white hover:text-green-400 transition-all duration-200 font-medium hover:scale-105"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button - Posicionado absolutamente */}
          <button
            className="md:hidden absolute right-4 p-2 rounded-lg hover:bg-gray-800 transition-colors text-white"
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
                <div key={item.name}>
                  {item.dropdown ? (
                    // Item com dropdown no mobile
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-white hover:text-green-400 transition-all duration-200 font-medium py-2"
                      >
                        <span>{item.name}</span>
                        <svg 
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Dropdown items no mobile */}
                      {activeDropdown === item.name && (
                        <div className="mt-2 pl-4 space-y-2 bg-gray-800 rounded-lg py-2 mx-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block text-gray-300 hover:text-green-400 transition-colors duration-200 py-1 px-2"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                                if (dropdownTimeout) {
                                  clearTimeout(dropdownTimeout);
                                  setDropdownTimeout(null);
                                }
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Item normal no mobile
                    <Link
                      to={item.href}
                      className="text-white hover:text-green-400 transition-all duration-200 font-medium py-2 hover:scale-105"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;