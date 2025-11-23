import React from 'react';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react'; // Ícones relevantes

const Contact = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-4 tracking-tight">
            Entre em Contato
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Adoraríamos ouvir de você! Seja para um orçamento, um pedido especial ou apenas para dizer olá, estamos à disposição.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Informações de Contato */}
          <div className="bg-amber-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Nossos Canais</h3>
            <div className="space-y-6">
              <a href="mailto:contato@dapazconfeitaria.com" className="flex items-center text-gray-700 hover:text-pink-600 transition-colors duration-300">
                <Mail size={24} className="mr-3 text-pink-500 flex-shrink-0" />
                <span className="text-lg">contato@dapazconfeitaria.com</span>
              </a>
              <a href="https://wa.me/5511951799052" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-pink-600 transition-colors duration-300">
                <Phone size={24} className="mr-3 text-pink-500 flex-shrink-0" />
                <span className="text-lg">(11) 95179-9052 (WhatsApp)</span>
              </a>
              <a href="https://www.instagram.com/dapaz_confeitaria" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-pink-600 transition-colors duration-300">
                <Instagram size={24} className="mr-3 text-pink-500 flex-shrink-0" />
                <span className="text-lg">@dapaz_confeitaria</span>
              </a>
              <div className="flex items-center text-gray-700">
                <MapPin size={24} className="mr-3 text-pink-500 flex-shrink-0" />
                <span className="text-lg">São Paulo, SP (Atendemos toda a região)</span>
              </div>
            </div>
          </div>

          {/* Formulário de Contato (Opcional - requer backend ou serviço de terceiros) */}
          {/* Por enquanto, vamos focar em exibir as informações de contato direto */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Horário de Atendimento</h3>
            <p className="text-gray-700 mb-2 text-lg"><strong className="font-medium">Segunda a Sexta:</strong> 9:00 - 18:00</p>
            <p className="text-gray-700 mb-4 text-lg"><strong className="font-medium">Sábados:</strong> 9:00 - 14:00</p>
            <p className="text-gray-600 text-md leading-relaxed">
              Pedidos especiais ou para eventos fora do horário comercial podem ser agendados com antecedência. Entre em contato para mais informações.
            </p>
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Prefere um Orçamento Detalhado?</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Para orçamentos de bolos personalizados e grandes encomendas, por favor, entre em contato via WhatsApp ou E-mail com o máximo de detalhes possível (data do evento, número de convidados, tema, inspirações) para que possamos atender você da melhor forma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

