import React, { useState } from 'react';
import { Heart, Share2, ZoomIn } from 'lucide-react';

const artworks = [
  { id: 1, title: 'Digital Dreams', image: 'https://source.unsplash.com/random/400x400?digital-art' },
  { id: 2, title: 'Neon Nights', image: 'https://source.unsplash.com/random/400x400?neon-art' },
  { id: 3, title: 'Cosmic Connections', image: 'https://source.unsplash.com/random/400x400?space-art' },
  { id: 4, title: 'Abstract Thoughts', image: 'https://source.unsplash.com/random/400x400?abstract-art' },
];

const FeaturedArt: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Artworks</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="flex-shrink-0 w-64 group"
              onClick={() => setSelectedArtwork(artwork.id)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white w-8 h-8" />
                </div>
              </div>
              <h3 className="mt-2 text-lg font-semibold">{artwork.title}</h3>
              <div className="mt-2 flex space-x-2">
                <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Heart className="w-5 h-5 text-red-500" />
                </button>
                <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Share2 className="w-5 h-5 text-blue-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedArtwork && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
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
        </div>
      )}
    </section>
  );
};

export default FeaturedArt;