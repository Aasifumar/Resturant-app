// FoodCard.js - Food item card component
import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import { useTheme } from '../../context/ThemeContext';
import toast from 'react-hot-toast';
import { formatCurrency } from '../../utils/formatters';

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { isDarkMode } = useTheme();

  const handleAddToCart = () => {
    addToCart(food);
    toast.success(`${food.title} added to cart!`);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(food);
    if (isFavorite(food.id)) {
      toast.success(`${food.title} removed from favorites`);
    } else {
      toast.success(`${food.title} added to favorites!`);
    }
  };

  return (
    <div className={`rounded-card overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={food.image}
          alt={food.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
          <FiStar size={14} />
          <span>{food.rating}</span>
        </div>

       {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className={`absolute top-3 left-3 p-2 rounded-full transition-colors ${
            isFavorite(food.id)
              ? 'bg-primary text-white'
              : 'bg-white text-primary hover:bg-primary hover:text-white'
          }`}
        >
          <FiHeart size={18} fill={isFavorite(food.id) ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{food.title}</h3>
        
        <p className={`text-sm mb-3 line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {food.description}
        </p>

        {/* Category and Prep Time */}
        <div className="flex justify-between items-center mb-3 text-sm">
          <span className="px-2 py-1 bg-accent bg-opacity-20 text-primary rounded">
            {food.category}
          </span>
          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
            ⏱ {food.prepTime}
          </span>
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-primary">
            {formatCurrency(food.price)}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-primary text-white p-2 rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-1"
          >
            <FiShoppingCart size={18} />
          </button>
        </div>

        {/* View Details Link */}
        <Link
          to={`/recipe/${food.id}`}
          className="mt-3 block w-full text-center py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
