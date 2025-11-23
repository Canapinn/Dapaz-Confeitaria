import React from 'react';

const previewItems = [
  {
    title: 'Bolos e Sabores',
    description: 'Descubra uma incrível variedade de bolos e sabores artesanais, perfeitos para todas as ocasiões.',
    imgSrc: 'https://images.unsplash.com/photo-1535144058332-9503d7b79d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    alt: 'Variedade de Bolos Deliciosos',
    link: '/bolos'
  },
  {
    title: 'Personalizados Únicos',
    description: 'Criações exclusivas para tornar seu evento ainda mais especial, com designs feitos sob medida para você.',
    imgSrc: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    alt: 'Bolo Personalizado Criativo',
    link: '/personalizados'
  },
  {
    title: 'Nossa História',
    description: 'Conheça a paixão e a dedicação que transformam ingredientes simples em doces lembranças desde 2018.',
    imgSrc: 'https://images.unsplash.com/photo-1516608190000-cfeed51601db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    alt: 'Confeiteira preparando bolo',
    link: '/sobre'
  },
  {
    title: 'Fale Conosco',
    description: 'Entre em contato para orçamentos, pedidos ou para tirar suas dúvidas. Adoraremos fazer parte do seu momento!',
    imgSrc: 'https://images.unsplash.com/photo-1580923368248-877f237c93c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    alt: 'Detalhe de contato da confeitaria',
    link: '/contato'
  }
];

const ProductsPreview = () => {
  return (
    <section id="previas" className="py-16 md:py-24 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-4 tracking-tight">
            Explore Nosso Mundo Doce
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Navegue pelas nossas seções e descubra tudo o que a Da Paz Confeitaria tem a oferecer para tornar seus momentos inesquecíveis.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {previewItems.map((item) => (
            <article 
              key={item.title} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 flex flex-col"
            >
              <img src={item.imgSrc} alt={item.alt} className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
                <a 
                  href={item.link} 
                  className="mt-auto inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                >
                  Ver Mais
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;

