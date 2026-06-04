import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp'; // <-- Adicione esta importação

export default function App() {
  return (
    <div className="light min-h-screen flex flex-col justify-between relative">
      <Header />
      <Home />
      <Footer />
      
      {/* Componente flutuante global */}
      <FloatingWhatsApp /> 
    </div>
  );
}