import React from 'react';
import featureImg from '../../assets/images/featured.jpg';
import { villData } from './feature.constants';
import '../Feature/Feature.css';
import VillaCard from '../VillaCard/VillaCard';
import { Link } from 'react-router-dom';

const Feature = () => {
    return (
        <div className="home-featured px-4 py-12 sm:px-6 lg:px-8 xl:px-10 2xl:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <img src={featureImg} alt="Feature" className="rounded-lg max-w-full h-auto" />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-10">
                <h2 className="text-red-500 font-bold text-start mb-4 text-lg sm:text-xl">| Featured</h2>
                <h4 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-2xl text-center lg:text-left my-4">
                    Best Apartment & Sea View
                </h4>

                <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
                </p>

                <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <Link
                    to="/about"
                    className="inline-block bg-amber-500 text-white py-2 px-6 rounded mt-6 hover:bg-amber-600 transition"
                >
                    Learn More
                </Link>
            </div>

            {/* Scrollable Villa List */}
            <div className="w-full mt-12 lg:mt-0 lg:w-1/2 max-h-[480px] overflow-y-auto border border-gray-200 rounded-lg shadow-sm">
                <h2 className="sticky top-0 z-10 bg-white font-bold text-base	 sm:text-base text-center py-4 border-b-[#FF9444]">
                    Explore Exquisite Luxury Villas Just for You
                </h2>

                {villData.map((villa, index) => (
                    <VillaCard
                        key={index}
                        VillaName={villa.VillaName}
                        VillaText={villa.VillaText}
                        villaImg={villa.villaImg}
                    />
                ))}
            </div>
        </div>
    );
};

export default Feature;
