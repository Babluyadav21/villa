import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
// import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Column 1: Branding & Socials */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">My Villa</h2>
          <p className="text-sm leading-relaxed">
            More than a stay — it’s a feeling. <br />
            Luxury, comfort, and nature in perfect harmony. <br />
            Find your peace, find your paradise.
          </p>
          {/* Socials (optional) */}
          {/* <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={20} /></a>
          </div> */}
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link to="/blogs" className="hover:text-white transition">Blogs</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="text-sm space-y-1">
            <li>Email: support@myvilla.com</li>
            <li>Phone: +91 (555) 123-4567</li>
            <li>Address: 123 Web Street, React City</li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-3">Subscribe to get the latest updates.</p>
          <form className="flex flex-col sm:flex-row md:flex-col gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded bg-gray-800 text-white text-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-orange-500 text-sm py-2 px-4 rounded flex items-center justify-center gap-2 transition"
            >
              <Mail size={16} /> Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-700 mt-12 pt-4 px-6">
        &copy; {new Date().getFullYear()} My Villa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
