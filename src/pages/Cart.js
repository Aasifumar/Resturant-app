// Cart.js - Shopping cart page
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import HeroSection from '../components/common/HeroSection';
import CartItemCard from '../components/cards/CartItemCard';
import { useOrder } from '../context/OrderContext';
import toast from 'react-hot-toast';
import { formatCurrency } from '../utils/formatters';

const Cart = () => {
  const { isDarkMode } = useTheme();
  const { cartItems, totalPrice, clearCart } = useCart();
  const { placeOrder } = useOrder();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      toast.error('Please fill all fields');
      return;
    }

    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    const orderId = placeOrder({
      items: cartItems,
      totalPrice,
      customer: formData,
    });

    toast.success('Order placed successfully!');
    clearCart();
    setFormData({ name: '', email: '', phone: '', address: '' });
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Shopping Cart"
        subtitle="Review and checkout your items"
      />

      {/* Cart Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl font-bold mb-4">Your cart is empty</p>
              <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Add some delicious items to your cart
              </p>
              <Link
                to="/menu"
                className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-card hover:bg-red-600 transition"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-2xl font-bold mb-6">Cart Items</h2>
                {cartItems.map(item => (
                  <CartItemCard key={item.id} item={item} />
                ))}
              </div>

              {/* Checkout Sidebar */}
              <div className={`rounded-card shadow-card p-6 h-fit sticky top-24 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className="text-2xl font-bold mb-6">Order Summary</h3>

                {/* Subtotal */}
                <div className="space-y-3 mb-6 pb-6 border-b">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold">{formatCurrency(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span className="font-semibold text-primary">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span className="font-semibold">{formatCurrency(totalPrice * 0.05)}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mb-6 text-lg">
                  <span className="font-bold">Total</span>
                  <span className="text-2xl font-bold text-primary">
                    {formatCurrency(totalPrice * 1.05)}
                  </span>
                </div>

                {/* Delivery Info */}
                <div className={`p-4 rounded-card mb-6 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-100'}`}>
                  <p className="text-sm mb-2 font-semibold">Delivery Information</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <label className="block">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className={`w-full px-3 py-2 rounded-lg mt-1 ${
                          isDarkMode
                            ? 'bg-gray-600 border-gray-500'
                            : 'bg-white border-gray-300'
                        } border outline-none`}
                      />
                    </div>
                    <div>
                      <label className="block">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email"
                        className={`w-full px-3 py-2 rounded-lg mt-1 ${
                          isDarkMode
                            ? 'bg-gray-600 border-gray-500'
                            : 'bg-white border-gray-300'
                        } border outline-none`}
                      />
                    </div>
                    <div>
                      <label className="block">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone"
                        className={`w-full px-3 py-2 rounded-lg mt-1 ${
                          isDarkMode
                            ? 'bg-gray-600 border-gray-500'
                            : 'bg-white border-gray-300'
                        } border outline-none`}
                      />
                    </div>
                    <div>
                      <label className="block">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Delivery address"
                        className={`w-full px-3 py-2 rounded-lg mt-1 ${
                          isDarkMode
                            ? 'bg-gray-600 border-gray-500'
                            : 'bg-white border-gray-300'
                        } border outline-none`}
                      />
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut || cartItems.length === 0}
                  className="w-full bg-primary text-white font-bold py-3 rounded-card hover:bg-red-600 transition disabled:opacity-50"
                >
                  {isCheckingOut ? 'Processing...' : 'Place Order'}
                </button>

                {/* Continue Shopping */}
                <Link
                  to="/menu"
                  className="block text-center mt-3 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-card transition"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
