import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Ícones para o menu mobile

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/bolos', label: 'Bolos/Sabores' },
    { href: '/personalizados', label: 'Personalizados' },
    { href: '/sobre', label: 'Sobre Nós' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* Substituir pelo caminho real do logo. Ex: /img/logo.png se estiver na pasta public/img */}
            <img className="h-12 w-auto" src="/img/logo.png" alt="Logo Da Paz Confeitaria" />
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-medium text-gray-600 hover:text-pink-500 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão do Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-pink-500 focus:outline-none focus:text-pink-500"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-2">
          <nav className="flex flex-col space-y-2 px-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)} // Fecha o menu ao clicar
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

