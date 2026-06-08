import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importando o Roteador
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import TermosUso from './pages/TermosUso';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import SegurancaInformacao from './pages/SegurancaInformacao';

export default function App() {
  return (
    <Router>
      <div className="light min-h-screen flex flex-col justify-between relative">
        <Header />
        
        {/* Rotas configuradas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/termos-de-uso" element={<TermosUso />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/seguranca-da-informacao" element={<SegurancaInformacao />} />
        </Routes>
        
        <Footer />
        <FloatingWhatsApp /> 
      </div>
    </Router>
  );
}
