import React from 'react';
import './index.css'; // Tailwind CSS e estilos globais

// Componentes
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProductsCarousel from './components/ProductsCarousel';
import ProductsPreview from './components/ProductsPreview';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <About />
        <ProductsCarousel />
        <ProductsPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

