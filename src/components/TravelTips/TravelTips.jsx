import React from 'react';

const tips = [
  {
    title: "Pack Light and Smart",
    description: "Bring comfortable clothes and footwear suitable for tropical weather. Don't forget your swimwear and sunglasses!",
    icon: "🧳",
  },
  {
    title: "Stay Hydrated",
    description: "Always keep a water bottle with you. The warm climate makes it important to drink water regularly.",
    icon: "💧",
  },
  {
    title: "Use Sunscreen",
    description: "Protect your skin with a high-SPF sunscreen, especially during the day when sun is at its peak.",
    icon: "🌞",
  },
  {
    title: "Explore Local Cuisine",
    description: "Try traditional dishes from local restaurants or villa chefs — it’s a cultural experience!",
    icon: "🍽️",
  },
  {
    title: "Cash & Connectivity",
    description: "Keep some local currency on hand for small shops and local transport. Mobile networks may vary, so check with your provider.",
    icon: "📶",
  },
];

const TravelTips = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Travel Tips for Your Villa Stay</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white shadow hover:shadow-lg transition  rounded-2xl p-4 flex flex-col items-start space-y-2">
            <span className="text-4xl">{tip.icon}</span>
            <h3 className="text-xl font-semibold">{tip.title}</h3>
            <p className="text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelTips;
