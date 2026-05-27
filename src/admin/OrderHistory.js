// OrderHistory.js - Order history and analytics
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useOrder } from '../context/OrderContext';
import { formatDate, formatCurrency } from '../utils/formatters';

const OrderHistory = () => {
  const { isDarkMode } = useTheme();
  const { orders } = useOrder();

  const completedOrders = orders.filter(o => o.status === 'completed');
  const totalRevenue = orders.reduce((sum, order) => sum + order.totalPrice, 0);
  const completedRevenue = completedOrders.reduce((sum, order) => sum + order.totalPrice, 0);
  const averageOrderValue = orders.length > 0 ? totalRevenue / orders.length : 0;

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8">Order History</h1>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className={`p-6 rounded-card shadow-card ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Orders</p>
            <p className="text-3xl font-bold mt-2">{orders.length}</p>
          </div>
          <div className={`p-6 rounded-card shadow-card ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Revenue</p>
            <p className="text-3xl font-bold mt-2 text-green-600">{formatCurrency(totalRevenue)}</p>
          </div>
          <div className={`p-6 rounded-card shadow-card ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Average Order Value</p>
            <p className="text-3xl font-bold mt-2">{formatCurrency(averageOrderValue)}</p>
          </div>
        </div>

        {/* Orders List */}
        <div className={`rounded-card shadow-card overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}>
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Order ID</th>
                  <th className="px-6 py-4 text-left font-semibold">Customer</th>
                  <th className="px-6 py-4 text-left font-semibold">Date</th>
                  <th className="px-6 py-4 text-left font-semibold">Items</th>
                  <th className="px-6 py-4 text-left font-semibold">Total</th>
                  <th className="px-6 py-4 text-left font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id} className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <td className="px-6 py-4 font-mono text-sm">{order.id.slice(0, 8)}</td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold">{order.customer.name}</p>
                        <p className="text-sm">{order.customer.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">{formatDate(order.date)}</td>
                    <td className="px-6 py-4">
                      <ul className="text-sm">
                        {order.items.slice(0, 2).map((item, idx) => (
                          <li key={idx}>{item.title} (×{item.quantity})</li>
                        ))}
                        {order.items.length > 2 && <li>+{order.items.length - 2} more</li>}
                      </ul>
                    </td>
                    <td className="px-6 py-4 font-bold">{formatCurrency(order.totalPrice)}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        order.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : order.status === 'processing'
                          ? 'bg-blue-100 text-blue-800'
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

          {orders.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg">No orders yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
