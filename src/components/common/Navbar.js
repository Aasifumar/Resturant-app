// Navbar.js - Navigation bar component
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingCart, FiHeart, FiMoon, FiSun } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';
import { useFavorites } from '../../context/FavoritesContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount } = useCart();
  const { favorites } = useFavorites();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 shadow-md ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">🍔</span>
            </div>
            <span className="text-xl font-bold text-primary">Restaurant</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <Link to="/menu" className="hover:text-primary transition">Menu</Link>
            <Link to="/about" className="hover:text-primary transition">About</Link>
            <Link to="/contact" className="hover:text-primary transition">Contact</Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition"
            >
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Favorites */}
            <Link to="/favorites" className="relative p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition">
              <FiHeart size={20} />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition">
              <FiShoppingCart size={20} />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            <Link to="/" onClick={closeMenu} className="block py-2 hover:text-primary transition">Home</Link>
            <Link to="/menu" onClick={closeMenu} className="block py-2 hover:text-primary transition">Menu</Link>
            <Link to="/about" onClick={closeMenu} className="block py-2 hover:text-primary transition">About</Link>
            <Link to="/contact" onClick={closeMenu} className="block py-2 hover:text-primary transition">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
