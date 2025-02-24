import React from 'react';
import Navbar from '../Components/Layout/Navbar';
import Hero from '../Components/Home/Hero';
import WhoWeAre from './Who-we-are';
import UpcomingEvents from './UpcomingEvents';
import Articles from './Articles';
import OurServices from './OurServicesPage';
import Footer from '../Components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-white-50 to-white-100">
      {/* Navbar and Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <Hero />
        </div>
      </header>

      {/* Main Content Sections */}
      <main>
        <section id="who-we-are" className="py-10 bg-[#a961a9]">
          <WhoWeAre />
        </section>

        <section id="upcoming-events" className="py-10 bg-gray-900 ">
          <UpcomingEvents />
        </section>

        <section id="articles" className="py-10">
          <Articles />
        </section>

        <section id="our-services" className="py-10 ">
          <OurServices />
        </section>

        
      </main>

     
        <Footer /> 
     
    </div>
  );
};

export default HomePage;
