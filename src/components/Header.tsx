import React from 'react';
import { Link } from 'react-router-dom';
import { Palette } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Palette className="w-8 h-8 text-secondary2" />
          <span className="text-xl font-bold">Leuterkil</span>
        </Link>
        <div className="flex space-x-4">
          <Link to="/portfolio" className="hover:text-secondary2 transition-colors">Portfolio</Link>
          <a href="#" className="hover:text-secondary2 transition-colors">Instagram</a>
          <a href="#" className="hover:text-secondary2 transition-colors">Twitter</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;