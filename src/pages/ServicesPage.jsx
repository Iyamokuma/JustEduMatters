import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Layout/Navbar';
import OurServices from './OurServicesPage';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-20">
        {/* Services Header */}
       
        <OurServices />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
