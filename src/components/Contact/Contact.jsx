import React from 'react';
import VillaInquiryForm from '../../components/ContactForm/ContactFormn.jsx';

const Contact = () => {
  return (
    <div className="bg-[#ebebeb]  sm:px-8 md:px-12 p-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 bg-[#ffffffb3] p-6 rounded-2xl shadow-lg">
        
        {/* Left: Text and Image */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl  font-bold text-[#421da9]">
            Plan Your Perfect Stay
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Whether you're looking for a romantic getaway, a family escape, or a luxury retreat,
            our villa is the perfect destination. Let us know your needs — we’ll handle the rest.
          </p>
          <button
          type="submit"
          className="!bg-[#1173c9] hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition"
        >
          Know More
        </button>
         
        </div>

        {/* Right: Inquiry Form */}
        <div className="md:w-1/2 w-full">
          <VillaInquiryForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
