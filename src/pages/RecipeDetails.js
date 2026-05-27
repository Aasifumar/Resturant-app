// RecipeDetails.js - Recipe/Food details page
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import Loader from '../components/common/Loader';
import toast from 'react-hot-toast';
import { formatCurrency } from '../utils/formatters';
import { foodData } from '../data/foodData';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [quantity, setQuantity] = useState(1);

  const food = foodData.find(item => item.id === parseInt(id));

  if (!food) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-gray-600">Recipe not found</p>
        <button
          onClick={() => navigate('/menu')}
          className="mt-4 px-6 py-2 bg-primary text-white rounded-card hover:bg-red-600 transition"
        >
          Back to Menu
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(food);
    }
    toast.success(`${quantity} × ${food.title} added to cart!`);
    setQuantity(1);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(food);
    if (isFavorite(food.id)) {
      toast.success('Added to favorites!');
    } else {
      toast.success('Removed from favorites');
    }
  };

  return (
    <div>
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-primary hover:text-red-600 transition font-semibold"
        >
          <FiArrowLeft size={20} />
          <span>Back</span>
        </button>
      </div>

      {/* Details Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <img
                  src={food.image}
                  alt={food.title}
                  className="w-full rounded-card shadow-card"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2">
                  <FiStar fill="white" />
                  <span className="font-bold">{food.rating}</span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              {/* Title and Category */}
              <div className="mb-6">
                <span className="px-3 py-1 bg-accent bg-opacity-20 text-primary rounded-full text-sm font-semibold">
                  {food.category}
                </span>
                <h1 className="text-4xl font-bold mt-4 mb-2">{food.title}</h1>
                <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {food.description}
                </p>
              </div>

              {/* Ratings and Reviews */}
              <div className={`flex items-center space-x-4 mb-6 pb-6 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center space-x-1">
                  <FiStar fill="#FF6B6B" size={20} className="text-primary" />
                  <span className="font-bold">{food.rating}</span>
                </div>
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  ({food.reviews} reviews)
                </span>
              </div>

              {/* Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className={`p-4 rounded-card ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Prep Time</p>
                  <p className="text-lg font-bold">{food.prepTime}</p>
                </div>
                <div className={`p-4 rounded-card ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Servings</p>
                  <p className="text-lg font-bold">{food.servings} people</p>
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Ingredients</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {food.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price and Actions */}
              <div className={`bg-gradient-to-r from-primary to-red-600 text-white p-6 rounded-card ${isDarkMode ? '' : ''}`}>
                <div className="mb-4">
                  <p className="text-sm opacity-90">Price</p>
                  <p className="text-3xl font-bold">{formatCurrency(food.price)}</p>
                </div>

                {/* Quantity */}
                <div className="flex items-center space-x-4 mb-6">
                  <span>Quantity:</span>
                  <div className="flex items-center border-2 border-white bg-white bg-opacity-20 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-white hover:bg-opacity-30 transition"
                    >
                      −
                    </button>
                    <span className="px-4 font-bold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-white hover:bg-opacity-30 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 flex items-center justify-center space-x-2 bg-white text-primary font-bold py-3 rounded-card hover:bg-gray-100 transition"
                  >
                    <FiShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </button>
                  <button
                    onClick={handleToggleFavorite}
                    className={`px-6 py-3 rounded-card font-bold transition ${
                      isFavorite(food.id)
                        ? 'bg-white text-primary'
                        : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                    }`}
                  >
                    <FiHeart
                      size={20}
                      fill={isFavorite(food.id) ? 'currentColor' : 'none'}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipeDetails;
