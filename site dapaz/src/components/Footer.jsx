import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react'; // Adicionando mais ícones sociais como exemplo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Sobre a Confeitaria (resumo) */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Da Paz Confeitaria</h3>
            <p className="text-sm leading-relaxed">
              Transformando seus momentos mais doces em realidade com bolos e doces personalizados, feitos com amor e os melhores ingredientes desde 2018.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Navegue</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-pink-400 transition-colors duration-300">Home</a></li>
              <li><a href="/bolos" className="hover:text-pink-400 transition-colors duration-300">Bolos e Sabores</a></li>
              <li><a href="/personalizados" className="hover:text-pink-400 transition-colors duration-300">Personalizados</a></li>
              <li><a href="/sobre" className="hover:text-pink-400 transition-colors duration-300">Sobre Nós</a></li>
              <li><a href="/contato" className="hover:text-pink-400 transition-colors duration-300">Contato</a></li>
              {/* Adicionar link para Política de Privacidade / Termos, se aplicável */}
            </ul>
          </div>

          {/* Contato e Redes Sociais */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Siga-nos</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.instagram.com/dapaz_confeitaria" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                <Instagram size={24} />
              </a>
              {/* Adicionar links para outras redes sociais se existirem */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                <Facebook size={24} />
              </a>
               <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-sm"><strong>E-mail:</strong> contato@dapazconfeitaria.com</p>
            <p className="text-sm"><strong>Telefone/WhatsApp:</strong> (11) 95179-9052</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">
            &copy; {currentYear} Da Paz Confeitaria. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-1">
            Desenvolvido com <span className="text-pink-400">❤</span> por [Seu Nome/Sua Agência, se aplicável]
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

