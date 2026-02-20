import React from 'react';
import './Services.css';
import {
  BedDouble,
  Waves,
  ChefHat,
  Car,
  HeartHandshake,
  UserCog,
  Mountain,
  PartyPopper,
} from 'lucide-react';

const services = [
  {
    icon: <BedDouble size={32} className="text-blue-600" />,
    title: 'Luxury Accommodation',
    description: 'Spacious, air-conditioned rooms with ocean or garden views.',
  },
  {
    icon: <Waves size={32} className="text-teal-600" />,
    title: 'Private Infinity Pool',
    description: 'Swim with a view in complete privacy.',
  },
  {
    icon: <ChefHat size={32} className="text-orange-600" />,
    title: 'Private Chef / In-Villa Dining',
    description: 'Custom meals prepared by a professional chef.',
  },
  {
    icon: <Mountain size={32} className="text-pink-600" />,
    title: 'Daily Housekeeping',
    description: 'Spotless service every day for comfort.',
  },
  {
    icon: <Car size={32} className="text-indigo-600" />,
    title: 'Airport Transfers',
    description: 'Seamless pickup and drop-off included.',
  },
  {
    icon: <HeartHandshake size={32} className="text-red-600" />,
    title: 'Spa & Wellness',
    description: 'Massages and spa treatments in-villa.',
  },
  {
    icon: <UserCog size={32} className="text-green-600" />,
    title: 'Concierge Service',
    description: 'Local bookings, reservations, and custom experiences handled for you.',
  },
  {
    icon: <Mountain size={32} className="text-yellow-600" />,
    title: 'Adventure & Tours',
    description: 'Snorkeling, hiking, or cultural tours arranged on request.',
  },
  {
    icon: <PartyPopper size={32} className="text-purple-600" />,
    title: 'Event Hosting',
    description: 'Perfect for small weddings, parties, and retreats.',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen  bg-white  ">
      <div className="serHead w-full p-8">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Our Services</h2>
        <p className="text-white mb-2 max-w-xl mx-auto text-lg text-center">
          Our villa offers a curated list of exclusive services to make your stay unforgettable.
        </p>

      </div>
      <div className="max-w-7xl mx-auto text-center py-12">


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-3 flex items-center justify-center ">{service.icon}</div>
              <h2 className="text-xl font-semibold text-shadow-yellow-600 mb-2 text-amber-500">{service.title}</h2>
              <p className="text-gray-600 text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
