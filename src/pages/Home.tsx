import React from 'react';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';
import StoreSection from '../components/StoreSection';
import FeaturedArt from '../components/FeaturedArt';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <div>
        <HeroSection />
        <StoreSection />
        <FeaturedArt />
      </div>
    </PageTransition>
  );
};

export default Home;