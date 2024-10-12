import React, { useState, useEffect } from 'react';

const artworks = [
  'https://source.unsplash.com/random/1200x800?ai-art',
  'https://source.unsplash.com/random/1200x800?digital-art',
  'https://source.unsplash.com/random/1200x800?abstract',
];

const HeroSection: React.FC = () => {
  const [currentArtwork, setCurrentArtwork] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArtwork((prev) => (prev + 1) % artworks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen">
      {artworks.map((artwork, index) => (
        <div
          key={artwork}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentArtwork ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${artwork})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
            Exploring the Boundaries of AI Art
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">
            Welcome to the digital canvas of Leuterkil
          </p>
          <button className="btn animate-fade-in-up animation-delay-600">
            Explore Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;