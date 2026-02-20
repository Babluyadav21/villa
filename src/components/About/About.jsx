import React from "react";
import banner from "../../assets/images/banner2.jpg";

const aboutContent = {
  identity: {
    name: "Radiant",
    tagline: "Your Private Escape into Peace & Luxury",
    intro:
      "Radiant Haven Villa blends modern elegance with natural beauty to create a sanctuary for those who value privacy, style, and authentic hospitality.",
  },
  location:
    "Nestled on Goa’s sun-kissed coastline—just minutes from pristine beaches and vibrant local markets—our villa offers breathtaking sea views amid lush palm groves.",
  usps: [
    "🌴 Secluded private pool & rooftop terrace",
    "👨‍🍳 Personal chef and farm-to-table dining",
    "🧘 Yoga deck, spa rituals & wellness concierge",
    "🌿 Eco-conscious design with smart-home comforts",
  ],
  design:
    "Hand-crafted interiors, light-filled suites, and open living spaces strike a perfect balance between minimalist luxury and local artisan charm.",
  service:
    "Our dedicated concierge team orchestrates seamless check-ins, curated excursions, and round-the-clock support—ensuring every stay is effortless and memorable.",
  guests:
    "Ideal for couples, families, destination weddings, corporate retreats, and digital nomads seeking an inspiring yet tranquil workspace.",
  story:
    "Founded by travel-loving siblings Maya & Arjun, Radiant Haven was built to share the soothing magic of Goa with guests from around the world.",
};

const About = () => {
  return (
    <section
      className="min-h-screen  bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <article className=" max-w-8xl   bg-white/80 shadow-xl p-6 sm:p-12 space-y-10 leading-relaxed text-gray-800  animate-fade-in">
        {/* 1. Identity */}
        <header className="text-center ">
          <h1 className="text-4xl font-bold mb-2 text-gray-900 fade-in-up">
            {aboutContent.identity.name}
          </h1>
          <h2 className="text-xl text-[#D4AF37] font-medium mb-4">
            {aboutContent.identity.tagline}
          </h2>
          <p className="max-w-3xl mx-auto">{aboutContent.identity.intro}</p>
        </header>

        {/* 2. Location & Setting */}
        <section>
          <h3 className="text-2xl font-semibold mb-2">🌍 Location</h3>
          <p>{aboutContent.location}</p>
        </section>

        {/* 3. Unique Selling Points */}
        <section>
          <h3 className="text-2xl font-semibold mb-2">✨ What Makes Us Unique</h3>
          <ul className="list-disc list-inside space-y-1">
            {aboutContent.usps.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </section>

        {/* 4-7 grouped in a responsive grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Comfort & Design */}
          <div className="bg-white border-l-4 border-[#D4AF37] p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">🛌 Comfort & Design</h3>
            <p className="text-sm text-gray-700">{aboutContent.design}</p>
          </div>

          {/* Service Promise */}
          <div className="bg-white border-l-4 border-[#1173c9] p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">👨‍💼 Service Promise</h3>
            <p className="text-sm text-gray-700">{aboutContent.service}</p>
          </div>

          {/* Ideal For */}
          <div className="bg-white border-l-4 border-[#34d399] p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">👥 Ideal For</h3>
            <p className="text-sm text-gray-700">{aboutContent.guests}</p>
          </div>

          {/* Our Story */}
          <div className="bg-white border-l-4 border-[#f59e0b] p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">💬 Our Story</h3>
            <p className="text-sm text-gray-700">{aboutContent.story}</p>
          </div>
        </section>
      </article>
    </section>
  );
};

export default About;