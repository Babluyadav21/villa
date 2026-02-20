import React from 'react';
import image3 from '../../assets/images/re2.webp';
import image4 from '../../assets/images/re6.webp';
import image5 from '../../assets/images/re7.webp';
import image6 from '../../assets/images/re8.webp';
import image7 from '../../assets/images/re11.webp';
import image8 from '../../assets/images/re12.webp';
import image9 from '../../assets/images/re13.webp';

const Gallery = () => {
  return (
    <section className="max-w-7xl  mx-auto  py-12 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ffffff] mb-12">
        <span className="border-b-4 border-[#FF9444] pb-2 inline-block">
          Gallery of Moments Made for Memories
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
        {/* Large Hero Block */}
        <div className="md:col-span-2 md:row-span-1 relative rounded-xl overflow-hidden group">
          <img src={image6} alt="Luxury Villa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
            <h2 className="text-2xl font-bold">Luxury Villa Retreat</h2>
            <p className="text-sm">Unwind in style and seclusion.</p>
          </div>
        </div>

        <div className="md:col-span-2 relative rounded-xl overflow-hidden group">
          <img src={image9} alt="More Features 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/40 flex items-end p-4 text-white">
            <h3 className="text-lg font-semibold">Ocean View</h3>
          </div>
        </div>

        <div className="md:col-span-2 relative rounded-xl overflow-hidden group">
          <img src={image7} alt="More Features 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/40 flex items-end p-4 text-white">
            <h3 className="text-lg font-semibold">More Features 2</h3>
          </div>
        </div>

        {/* Top Right Block */}
        <div className="md:col-span-3 relative rounded-xl overflow-hidden group">
          <img src={image5} alt="Infinity Pool" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/40 flex items-end p-4 text-white">
            <h3 className="text-lg font-semibold">Infinity Pool</h3>
          </div>
        </div>

        {/* Row 2 - Left */}
        <div className="md:col-span-3 relative rounded-xl overflow-hidden group">
          <img src={image3} alt="Private Chef" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/40 flex items-end p-4 text-white">
            <h3 className="text-lg font-semibold">Private Chef</h3>
          </div>
        </div>

        {/* Row 2 - Middle */}
        <div className="md:col-span-2 relative rounded-xl overflow-hidden group">
          <img src={image4} alt="Ocean View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/40 flex items-end p-4 text-white">
            <h3 className="text-lg font-semibold">Ocean View Suite</h3>
          </div>
        </div>

        {/* Row 2 - Right */}
        <div className="md:col-span-2 relative rounded-xl overflow-hidden group">
          <img src={image8} alt="Outdoor Cinema" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/40 flex items-end p-4 text-white">
            <h3 className="text-lg font-semibold">Outdoor Cinema</h3>
          </div>
        </div>

        {/* Row 3 - Extra Block */}
        <div className="md:col-span-2 relative rounded-xl overflow-hidden group">
          <img src={image7} alt="More Features" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/40 flex items-end p-4 text-white">
            <h3 className="text-lg font-semibold">More Features</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;