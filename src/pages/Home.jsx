import React from 'react';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Technology from '../sections/Technology';
import Media from '../sections/Media';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <Technology />
      <Media />
      {/* Componente Parceiros adicionado aqui */}
    </div>
  );
}