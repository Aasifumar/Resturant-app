// CartItemCard.js - Cart item card component
import React from 'react';
import { FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';
import { formatCurrency } from '../../utils/formatters';

const CartItemCard = ({ item }) => {
  const { incrementQuantity, decrementQuantity, removeFromCart } = useCart();
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex gap-4 p-4 rounded-card border-2 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-cover rounded-lg"
      />

      {/* Details */}
      <div className="flex-1">
        <h3 className="font-semibold mb-1">{item.title}</h3>
        <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {item.category}
        </p>
        <p className="text-lg font-bold text-primary">
          {formatCurrency(item.price)} × {item.quantity}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => decrementQuantity(item.id)}
          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition"
        >
          <FiMinus size={18} />
        </button>
        <span className="w-8 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={() => incrementQuantity(item.id)}
          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition"
        >
          <FiPlus size={18} />
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="p-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition"
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  );
};

export default CartItemCard;
