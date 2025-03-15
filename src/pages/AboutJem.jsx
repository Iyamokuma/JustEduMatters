import React from 'react';
import anna from '../Components/images/Annette photo (2).jpg';
import esther from '../Components/images/Esther.jpg';
import joan from '../Components/images/Joan.jpg';
import Navbar from '../Components/Layout/Navbar';
import Footer from '../Components/Footer';

const AboutJem = () => {
  const cardData = [
    {
      image: anna,
      name: "Annette",
      role: "Lead Designer",
      text: "Dedicated to crafting visually stunning and user-friendly designs that make an impact."
    },
    {
      image: esther,
      name: "Esther",
      role: "Project Manager",
      text: "Ensuring smooth project execution, team coordination, and timely delivery of results."
    },
    {
      image: joan,
      name: "Joan",
      role: "Software Engineer",
      text: "Developing cutting-edge solutions with a focus on performance, scalability, and innovation."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Introductory Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-6">Who We Are</h1>
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          We are a forward-thinking team passionate about delivering cutting-edge solutions. Our commitment to innovation, quality, and growth sets us apart.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 text-center md:text-left">
        <div className="bg-white p-8 shadow-lg rounded-2xl">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To lead with creativity and technology, empowering individuals and businesses alike for a limitless future.
          </p>
        </div>
        <div className="bg-white p-8 shadow-lg rounded-2xl">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">What We Do</h2>
          <p className="text-gray-700 leading-relaxed">
            We provide strategic, design, and development solutions, ensuring end-to-end support tailored to our clients' needs.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div key={index} className="p-8 shadow-xl rounded-2xl bg-white hover:shadow-2xl transition-shadow duration-300 text-center">
            <div className="flex justify-center mb-6">
              <img
                src={card.image}
                alt={card.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-purple-500"
              />
            </div>
            <h3 className="text-xl font-semibold text-purple-700">{card.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{card.role}</p>
            <p className="text-gray-600 leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </section>

      {/* Community Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 mb-32">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Working with the Community</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          As a community interest company we have a duty to work with local communities to further our aims. 
          Community participation is core to what we do and we make this a priority regardless of any legal obligations. 
          We will continue to build our capacity within the community as we grow. Below are some of the organisations we have engaged with:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "No More Exclusions",
            "Vocal Communities",
            "Manhood Academy Global MAG",
            "Another Night of Sisterhood ANOS",
            "Parents Action Resource Centre PARC",
            "Family Life Christian Centre"
          ].map((org, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-purple-700 font-medium">{org}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutJem;
