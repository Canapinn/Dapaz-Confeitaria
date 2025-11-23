import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center py-32 md:py-48 text-white"
      // Idealmente, a imagem de fundo viria de uma props ou de um local mais dinâmico
      // Usando uma imagem placeholder de alta qualidade do Unsplash por enquanto
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay para melhor contraste do texto */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }} // Sombra para destacar o texto
        >
          Doces que Contam Histórias
        </h1>
        <p 
          className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
        >
          Na Da Paz Confeitaria, cada criação é uma obra de arte comestível, feita com paixão para adoçar seus momentos mais especiais.
        </p>
        <div>
          <a 
            href="/personalizados" 
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Crie seu Personalizado
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

