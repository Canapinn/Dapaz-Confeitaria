import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-4 tracking-tight">
            Nossa Doce História
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Na Da Paz Confeitaria, cada bolo, cada doce, é uma expressão de amor e dedicação. Nascemos do sonho de transformar momentos simples em recordações inesquecíveis, adoçando a vida de nossos clientes com criações únicas e personalizadas desde 2018.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            {/* Imagem representativa da confeitaria ou da confeiteira. Usar imagem de placeholder. */}
            <img 
              src="https://images.unsplash.com/photo-1586985289649-081033891389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Confeiteira Da Paz Confeitaria" 
              className="w-full h-auto object-cover aspect-video md:aspect-square"
            />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
              Paixão em Cada Detalhe
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Acreditamos que a confeitaria é uma arte que exige paixão, ingredientes frescos e um toque de criatividade. Para nós, não se trata apenas de fazer bolos, mas de criar experiências. Desde a escolha dos melhores ingredientes até a finalização cuidadosa de cada detalhe, nosso objetivo é superar suas expectativas.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Seja para um aniversário, um casamento, uma celebração corporativa ou simplesmente para adoçar o seu dia, estamos aqui para criar o bolo personalizado dos seus sonhos. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              Convidamos você a conhecer um pouco mais do nosso trabalho e a se deliciar com as nossas criações. Bem-vindo ao mundo doce da Da Paz Confeitaria!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

