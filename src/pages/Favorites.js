// Favorites.js - Favorites/Wishlist page
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useFavorites } from '../context/FavoritesContext';
import HeroSection from '../components/common/HeroSection';
import FoodCard from '../components/cards/FoodCard';

const Favorites = () => {
  const { isDarkMode } = useTheme();
  const { favorites } = useFavorites();

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="My Favorites"
        subtitle="Your wishlist of favorite recipes"
      />

      {/* Favorites Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {favorites.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl font-bold mb-4">No favorites yet</p>
              <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Add your favorite recipes to your wishlist
              </p>
              <Link
                to="/menu"
                className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-card hover:bg-red-600 transition"
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Your Favorites ({favorites.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map(food => (
                  <FoodCard key={food.id} food={food} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Favorites;
