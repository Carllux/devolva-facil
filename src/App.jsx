import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import TermosUso from './pages/TermosUso';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import SegurancaInformacao from './pages/SegurancaInformacao';

// Importando as páginas de parceiros
import Parceiros from './pages/Parceiros'; // A página atual da Orange Envios
import PostalGow from './pages/PostalGow'; // A nova página que acabamos de criar

export default function App() {
  return (
    <Router>
      <div className="light min-h-screen flex flex-col justify-between relative">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/termos-de-uso" element={<TermosUso />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/seguranca-da-informacao" element={<SegurancaInformacao />} />
          
          {/* Novas Rotas de Parceiros */}
          <Route path="/parceiros/orange-envios" element={<Parceiros />} />
          <Route path="/parceiros/postalgow" element={<PostalGow />} />
        </Routes>
        
        <Footer />
        <FloatingWhatsApp /> 
      </div>
    </Router>
  );
}