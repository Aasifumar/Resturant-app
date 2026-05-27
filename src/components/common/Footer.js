// Footer.js - Footer component
import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-900 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Restaurant</h3>
            <p className="text-gray-400 mb-4">
              Delicious food delivered to your doorstep. We serve the best recipes and fresh ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link to="/menu" className="hover:text-primary transition">Menu</Link></li>
              <li><Link to="/about" className="hover:text-primary transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/menu" className="hover:text-primary transition">Pizza</Link></li>
              <li><Link to="/menu" className="hover:text-primary transition">Burger</Link></li>
              <li><Link to="/menu" className="hover:text-primary transition">Pasta</Link></li>
              <li><Link to="/menu" className="hover:text-primary transition">Dessert</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <FiPhone size={18} className="text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMail size={18} className="text-primary" />
                <span>info@restaurant.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMapPin size={18} className="text-primary" />
                <span>123 Food Street, City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Social Links and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-primary transition"><FiFacebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition"><FiTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition"><FiInstagram size={20} /></a>
          </div>
          <p className="text-gray-400">
            &copy; {currentYear} Restaurant App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
