import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
// If your logo is inside public/logo/logo.png, use this:
const logoPath = '/logo/logo.png';
// If it’s inside src/assets/logo.png, import it instead:
// import logoPath from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
// ...
const isActive = (path: string): boolean => location.pathname === path;
// ...


  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-[#E53E3E] to-[#FF6B6B] shadow-lg backdrop-blur-sm'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoPath} alt="Logo" className="h-8 w-auto" />
            <span
              className={`text-2xl font-bold ${
                isScrolled ? 'text-white' : 'text-gray-900'
              }`}
            >
              TNAOT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['/', '/services', '/about', '/contact'].map((path, idx) => {
              const labels = ['Home', 'Services', 'About', 'Contact'];
              return (
                <Link
                  key={path}
                  to={path}
                  className={`transition-colors duration-200 ${
                    isActive(path)
                      ? isScrolled
                        ? 'text-white font-semibold'
                        : 'text-[#E53E3E] font-semibold'
                      : isScrolled
                      ? 'text-white/80 hover:text-white'
                      : 'text-gray-700 hover:text-[#E53E3E]'
                  }`}
                >
                  {labels[idx]}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-[#E53E3E] to-[#FF6B6B] text-white hover:opacity-90 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-gray-900'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-gray-900'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {['/', '/services', '/about', '/contact'].map((path, idx) => {
                const labels = ['Home', 'Services', 'About', 'Contact'];
                return (
                  <Link
                    key={path}
                    to={path}
                    className={`block px-3 py-2 transition-colors duration-200 ${
                      isActive(path)
                        ? 'text-[#E53E3E] font-semibold'
                        : 'text-gray-700 hover:text-[#E53E3E]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {labels[idx]}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                className="block w-full text-left px-3 py-2 bg-gradient-to-r from-[#E53E3E] to-[#FF6B6B] text-white rounded-lg hover:opacity-90 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
