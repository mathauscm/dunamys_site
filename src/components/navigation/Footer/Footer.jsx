import React from 'react';

/**
 * Footer Component
 * Main footer with links and information
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    ministerio: {
      title: 'Ministério',
      links: [
        { name: 'Sobre Nós', href: '/sobre' },
        { name: 'Visão e Missão', href: '/visao-missao' },
        { name: 'Liderança', href: '/lideranca' },
        { name: 'História', href: '/historia' }
      ]
    },
    eventos: {
      title: 'Eventos',
      links: [
        { name: 'Próximos Eventos', href: '/eventos' },
        { name: 'Conferências', href: '/conferencias' },
        { name: 'Workshops', href: '/workshops' },
        { name: 'Cultos', href: '/cultos' }
      ]
    },
    contato: {
      title: 'Contato',
      links: [
        { name: 'Fale Conosco', href: '/contato' },
        { name: 'Localização', href: '/localizacao' },
        { name: 'Oração', href: '/oracao' },
        { name: 'Apoio', href: '/apoio' }
      ]
    }
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.99-5.366 11.99-11.99C24.007 5.367 18.641.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gradient">Dunamys</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Transformando vidas através do poder de Deus. Junte-se a nós em nossa jornada de fé, crescimento espiritual e serviço ao próximo.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0">
              <h4 className="text-lg font-semibold mb-2">Receba nossas atualizações</h4>
              <p className="text-gray-300">
                Inscreva-se para receber mensagens inspiradoras e notícias sobre nossos eventos.
              </p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 lg:w-80 px-4 py-2 rounded-l-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="px-6 py-2 text-white rounded-r-lg transition-colors duration-200 hover:opacity-90" style={{backgroundColor: '#8B9A3D'}}>
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Dunamys. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <a href="/privacidade" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
              Política de Privacidade
            </a>
            <a href="/termos" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;