import React from 'react'
// src/pages/Blogs.tsx

import { blogs } from './Blogs.contants'
import './Blogs.css'

const Blogs = () => {
  return (
    <section className="bg-gray-50 ">
      <div className="blogHead w-full p-8  my-12">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Latest Blogs</h2>
        <p className="text-white mb-2 max-w-xl mx-auto text-lg text-center">
          Stay inspired with tips, travel ideas, and insider info from our villa lifestyle blog.
        </p>
      </div>
      <div className="max-w-6xl mx-auto text-center">


        <div className="grid md:grid-cols-3 gap-8 pb-12">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs

