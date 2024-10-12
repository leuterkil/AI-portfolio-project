import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const categories = ['All', 'Surrealism', 'Abstract', 'Geometric', 'Digital Glitch'];

const artworks = [
  { id: 1, title: 'Dreamscape', category: 'Surrealism', image: 'https://source.unsplash.com/random/400x400?surrealism' },
  { id: 2, title: 'Fractured Reality', category: 'Abstract', image: 'https://source.unsplash.com/random/400x400?abstract' },
  { id: 3, title: 'Neon Geometry', category: 'Geometric', image: 'https://source.unsplash.com/random/400x400?geometric' },
  { id: 4, title: 'Glitch in the Matrix', category: 'Digital Glitch', image: 'https://source.unsplash.com/random/400x400?glitch' },
  { id: 5, title: 'Cosmic Thoughts', category: 'Surrealism', image: 'https://source.unsplash.com/random/400x400?cosmos' },
  { id: 6, title: 'Digital Waves', category: 'Abstract', image: 'https://source.unsplash.com/random/400x400?waves' },
];

const ArtworkItem: React.FC<{ artwork: typeof artworks[0]; onClick: () => void }> = ({ artwork, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <ZoomIn className="text-white w-8 h-8" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
        <p className="text-gray-400">{artwork.category}</p>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);

  const filteredArtworks = selectedCategory === 'All'
    ? artworks
    : artworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Portfolio</h1>
          <div className="flex justify-center space-x-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                } transition-colors duration-300`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork) => (
              <ArtworkItem
                key={artwork.id}
                artwork={artwork}
                onClick={() => setSelectedArtwork(artwork.id)}
              />
            ))}
          </div>
        </div>
      </div>
      {selectedArtwork && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-gray-800 p-4 rounded-lg max-w-3xl w-full">
            <img
              src={artworks.find((a) => a.id === selectedArtwork)?.image}
              alt={artworks.find((a) => a.id === selectedArtwork)?.title}
              className="w-full h-auto rounded-lg"
            />
            <h3 className="text-2xl font-bold mt-4">
              {artworks.find((a) => a.id === selectedArtwork)?.title}
            </h3>
            <p className="mt-2 text-gray-300">
              A stunning piece that showcases the artist's unique style and vision.
            </p>
            <button
              className="mt-4 btn"
              onClick={() => setSelectedArtwork(null)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </PageTransition>
  );
};

export default Portfolio;