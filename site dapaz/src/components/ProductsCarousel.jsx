import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Placeholder images (replace with actual product images)
const products = [
  { id: 1, src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80', alt: 'Bolo de Chocolate Decorado' },
  { id: 2, src: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Cupcakes Coloridos' },
  { id: 3, src: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Bolo Personalizado com Flores' },
  { id: 4, src: 'https://images.unsplash.com/photo-1616690710400-a16d143997c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Docinhos Finos Variados' },
  { id: 5, src: 'https://images.unsplash.com/photo-1626379530390-75c9459b4f57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Bolo de Casamento Elegante' },
];

const ProductsCarousel = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-4 tracking-tight">
            Nossas Delícias Personalizadas
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore alguns dos nossos trabalhos e inspire-se para sua próxima celebração. Cada detalhe é pensado para encantar!
          </p>
        </div>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper rounded-lg shadow-xl"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="overflow-hidden rounded-lg">
              <img 
                src={product.src} 
                alt={product.alt} 
                className="w-full h-80 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductsCarousel;

