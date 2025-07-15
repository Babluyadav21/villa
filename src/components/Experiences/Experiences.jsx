import React from 'react';
import sunset from '../../assets/Sunset.jpg'
import trek  from '../../assets/Trek.jpg'
import culture from '../../assets/culture.WEBP'
import spa from '../../assets/spa.WEBP'
import privat from '../../assets/Private.jpg'
import wine from '../../assets/wine.jpg'



const experiences = [
  {
    title: "Private Beach Dinner",
    description: "Enjoy an intimate candlelight dinner by the sea, curated by our private chef.",
    image: privat,
  },
  {
    title: "In-Villa Spa",
    description: "Relax with personalized spa treatments delivered in the comfort of your villa.",
    image: spa,
  },
  {
    title: "Sunset Cruise",
    description: "Sail into the golden hour on a private cruise with cocktails and snacks.",
    image: sunset,
  },
  {
    title: "Cultural Tour",
    description: "Explore local traditions, visit historic temples, and engage with local artisans.",
    image: culture,
  },
  {
    title: "Adventure Trek",
    description: "Take a guided nature trek through lush landscapes and hidden waterfalls.",
    image: trek,
  },

    {
    title: "Wine or Whiskey Tasting Evenings",
    description: "Enjoy a relaxed evening tasting fine wines or whiskeys, perfectly curated for you.",
    image: wine,
  },
];

const Experiences = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Unique Villa Experiences</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white shadow hover:shadow-lg transition rounded-2xl overflow-hidden">
            <img src={exp.image} alt={exp.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
