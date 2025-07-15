import React from "react";
import { Link } from 'react-router-dom';
import sky from '../../assets/skyview.jpg'
import ocen from '../../assets/ocenview.jpg'
import gs from '../../assets/GS.jpg'


export default function Stay() {
    const rooms = [
        {
            title: "Ocean View Villa",
            description: "Wake up to breathtaking sunrises and the calming sound of waves in our private oceanfront sanctuary.",
            image: ocen
        },
        {
            title: "Garden Suite",
            description: "Nestled among lush tropical greenery, this suite offers serenity and luxury with nature at your doorstep.",
            image: gs
        },
        {
            title: "Sky Terrace Retreat",
            description: "Enjoy panoramic views and rooftop sunsets from our most elevated villa experience.",
            image: sky
        }
    ];

    return (
        <section className="px-6 py-16 bg-[#f9f7f3] text-gray-800">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gold mb-4">Stay at Radiant Haven</h2>
                <p className="max-w-2xl mx-auto mb-12 text-lg">
                    Discover your private paradise. Whether you're seeking ocean breezes, garden calm, or skyline serenity, our hand-crafted villas welcome you with warmth and luxury.
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {rooms.map((room, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                        >
                            <img
                                src={room.image}
                                alt={room.title}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gold mb-2">
                                    {room.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{room.description}</p>
                                <Link
                                    to="/villa-details"
                                    className="!bg-blue-400 !text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition inline-block"
                                >
                                    View Details
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
