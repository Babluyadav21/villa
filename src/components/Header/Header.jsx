import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [blogMenuOpen, setBlogMenuOpen] = useState(false);
  const location = useLocation();

  const isBlogActive = location.pathname.startsWith('/blogs');

  const navLinks = [
    { path: '/', label: 'Home' },
    {
      label: 'About',
      path: '/about',
      submenu: [
        { path: 'our story', label: 'Our Story' },
        { path: 'meet the team', label: 'Meet the Team' },
        { path: 'why choose us', label: 'Why Choose Us' },

      ],
    },
    {
      label: 'Blogs',
      path: '/blogs',
      submenu: [
        { path: 'stay', label: 'Stay' },
        { path: 'events', label: 'Events' },
        { path: 'travelTips', label: 'Travel Tips' },
        { path: 'experiences', label: 'Experiences' },
      ],
    },
    { path: '/service', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white text-black px-4 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-red-500">Radiant</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((nav, index) =>
            nav.submenu ? (
              <div key={index} className="relative group">
                <NavLink
                  to={nav.path}
                  className={`flex items-center gap-1 ${isBlogActive ? 'text-red-400 font-medium' : 'text-gray-700 hover:text-red-500'
                    }`}
                >
                  {nav.label}
                  <ChevronDown size={16} />
                </NavLink>
                <div className="absolute left-0 top-[20px] mt-1 hidden group-hover:block bg-white  rounded shadow-lg z-20 min-w-[160px]">
                  {nav.submenu.map((sub, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={`/blogs/${sub.path}`}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm hover:bg-amber-50 ${isActive ? 'text-red-500' : 'text-gray-700'}`
                      }
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={index}
                to={nav.path}
                className={({ isActive }) =>
                  isActive ? 'text-red-500 font-medium' : 'text-gray-700 hover:text-red-500'
                }
              >
                {nav.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-black" aria-label="Toggle Menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-[500px]' : 'max-h-0'
          } bg-white text-black shadow-lg rounded-lg mt-2`}
      >
        <nav className="flex flex-col gap-3 px-4 py-4">
          {navLinks.map((nav, index) => {
            const isAbout = nav.label === 'About';
            const isBlogs = nav.label === 'Blogs';

            return nav.submenu ? (
              <div key={index}>
                <button
                  type="button"
                  onClick={() => {
                    if (isAbout) {
                      setAboutMenuOpen(!aboutMenuOpen);
                      setBlogMenuOpen(false);
                    } else if (isBlogs) {
                      setBlogMenuOpen(!blogMenuOpen);
                      setAboutMenuOpen(false);
                    }
                  }}
                  className="w-full flex items-center justify-between text-left text-gray-700 hover:text-red-500"
                >
                  {nav.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${(isAbout && aboutMenuOpen) || (isBlogs && blogMenuOpen)
                        ? 'rotate-180'
                        : ''
                      }`}
                  />
                </button>

                {((isAbout && aboutMenuOpen) || (isBlogs && blogMenuOpen)) && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {nav.submenu.map((sub, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={`/${nav.path.replace('/', '')}/${sub.path}`}
                        onClick={() => {
                          setMenuOpen(false);
                          setAboutMenuOpen(false);
                          setBlogMenuOpen(false);
                        }}
                        className={({ isActive }) =>
                          isActive
                            ? 'text-red-500 font-medium'
                            : 'text-gray-700 hover:text-red-500'
                        }
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={index}
                to={nav.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'text-red-500 font-medium'
                    : 'text-gray-700 hover:text-red-500'
                }
              >
                {nav.label}
              </NavLink>
            );
          })}
        </nav>
      </div>

    </header>
  );
};

export default Header;
