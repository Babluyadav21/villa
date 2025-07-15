import React from 'react';
import eventData from '../Events/EventData'; // optional: external data file

const Events = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto py-9">
      <h2 className="text-3xl font-bold  text-center mb-8">Upcoming Events</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {eventData.map((event, index) => (
          <div key={index} className="bg-white  rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            {event.image && (
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
