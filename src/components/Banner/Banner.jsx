import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../ContactForm/ContactFormn';

function Banner({
  firstHeading = 'Why Choose Our ',
  secondHeading = "Villa?",
  paragraph = "Discover the perfect blend of comfort, beauty, and relaxation at our villa — where every corner is designed to feel like a peaceful escape. Whether you're planning a weekend retreat, a romantic hideaway, or a long-awaited vacation, our villa offers a cozy and stylish space to unwind, recharge, and make memories. With scenic views, warm hospitality, and all the comforts of home, your stay here will be nothing short of unforgettable.",
  btnText = "read more",
  imgurl = '',
  firstHeadingCssClasses = "",
  secondHeadingCssClasses = ''
}) {

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat px-4 sm:px-6 md:px-10 lg:px-24 py-16"
      style={{ backgroundImage: `url(${imgurl})` }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
        {/* Left: Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${firstHeadingCssClasses} !text-[#421da9]`}>
            {firstHeading}
            <span className={`text-[#FDED11] ${secondHeadingCssClasses}`}> {secondHeading}</span>
          </h1>
          <p className="text-[#dedede] text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto lg:mx-0">
            {paragraph}
          </p>
          <Link
            to="/about"
            className="inline-block bg-[#1173c9] hover:bg-blue-700 !text-white px-6 py-3 rounded-md text-sm font-medium transition"
          >
            {btnText}
          </Link>
        </div>

        {/* Right: Contact Form Section */}
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Banner;
