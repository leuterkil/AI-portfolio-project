import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const stores = [
  { name: 'Etsy', url: '#', logo: 'https://source.unsplash.com/random/200x200?etsy' },
  { name: 'Redbubble', url: '#', logo: 'https://source.unsplash.com/random/200x200?redbubble' },
  { name: 'Society6', url: '#', logo: 'https://source.unsplash.com/random/200x200?society6' },
  { name: 'Threadless', url: '#', logo: 'https://source.unsplash.com/random/200x200?threadless' },
  { name: 'TeePublic', url: '#', logo: 'https://source.unsplash.com/random/200x200?teepublic' },
];

const StoreSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stores.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stores.length) % stores.length);
  };

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop My Artwork</h2>
        <div className="relative">
          <AnimatePresence initial={false} custom={currentIndex}>
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="flex justify-center">
                <a
                  href={stores[currentIndex].url}
                  className="group bg-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl block w-64"
                >
                  <div className="relative h-48">
                    <img
                      src={stores[currentIndex].logo}
                      alt={`${stores[currentIndex].name} logo`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="text-white w-8 h-8" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{stores[currentIndex].name}</h3>
                    <p className="text-gray-300">Shop now on {stores[currentIndex].name}</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {stores.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-secondary2' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreSection;