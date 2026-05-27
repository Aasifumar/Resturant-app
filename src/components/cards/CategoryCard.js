// CategoryCard.js - Category card component
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const CategoryCard = ({ category, isSelected, onClick, foodCount }) => {
  const { isDarkMode } = useTheme();

  const categoryEmojis = {
    Pizza: '🍕',
    Burger: '🍔',
    Pasta: '🍝',
    Drinks: '🥤',
    Dessert: '🍰',
    'Indian Food': '🍲',
    'Chinese Food': '🥢',
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-card font-semibold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap ${
        isSelected
          ? 'bg-primary text-white shadow-lg'
          : isDarkMode
          ? 'bg-gray-800 text-gray-200 hover:bg-gray-700'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      <span className="text-xl">{categoryEmojis[category] || '🍽️'}</span>
      <span>{category}</span>
      {foodCount !== undefined && (
        <span className={`text-xs ${isSelected ? 'bg-white bg-opacity-30' : ''}`}>
          ({foodCount})
        </span>
      )}
    </button>
  );
};

export default CategoryCard;
