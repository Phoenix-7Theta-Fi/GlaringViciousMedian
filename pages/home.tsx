import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import SearchBar from '../components/home/SearchBar';
import Filters from '../components/home/Filters';
import FeaturedDoctors from '../components/home/FeaturedDoctors';
import RecentlyViewedDoctors from '../components/home/RecentlyViewedDoctors';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Filters />
      <FeaturedDoctors />
      <RecentlyViewedDoctors />
      <Footer />
    </div>
  );
};

export default Home;
