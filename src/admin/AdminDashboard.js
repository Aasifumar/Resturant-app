// AdminDashboard.js - Admin dashboard
import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrendingUp, FiShoppingCart, FiUsers, FiClock } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { useOrder } from '../context/OrderContext';
import { foodData } from '../data/foodData';

const AdminDashboard = () => {
  const { isDarkMode } = useTheme();
  const { orders, getPendingOrdersCount } = useOrder();

  const totalOrders = orders.length;
  const pendingOrders = getPendingOrdersCount();
  const totalRevenue = orders.reduce((sum, order) => sum + order.totalPrice, 0);
  const totalProducts = foodData.length;

  const stats = [
    {
      title: 'Total Orders',
      value: totalOrders,
      icon: FiShoppingCart,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Pending Orders',
      value: pendingOrders,
      icon: FiClock,
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      title: 'Total Revenue',
      value: `₹${totalRevenue}`,
      icon: FiTrendingUp,
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Total Products',
      value: totalProducts,
      icon: FiUsers,
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            Welcome back! Here's what's happening with your restaurant.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-card shadow-card ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.color}`}>
                    <Icon size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link
            to="/admin/orders"
            className="p-6 rounded-card shadow-card hover:shadow-hover transition-shadow cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-2">Manage Orders</h3>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              View and manage all customer orders
            </p>
          </Link>

          <Link
            to="/admin/order-history"
            className="p-6 rounded-card shadow-card hover:shadow-hover transition-shadow cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-2">Order History</h3>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              View complete order history and analytics
            </p>
          </Link>
        </div>

        {/* Recent Orders */}
        {orders.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Recent Orders</h2>
            <div className={`rounded-card shadow-card overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className={isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}>
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Order ID</th>
                      <th className="px-6 py-4 text-left font-semibold">Customer</th>
                      <th className="px-6 py-4 text-left font-semibold">Total</th>
                      <th className="px-6 py-4 text-left font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.slice(0, 5).map(order => (
                      <tr key={order.id} className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="px-6 py-4">{order.id.slice(0, 8)}</td>
                        <td className="px-6 py-4">{order.customer.name}</td>
                        <td className="px-6 py-4 font-bold">₹{order.totalPrice}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            order.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : order.status === 'completed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
