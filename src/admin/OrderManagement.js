// OrderManagement.js - Order management page
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useOrder } from '../context/OrderContext';
import toast from 'react-hot-toast';

const OrderManagement = () => {
  const { isDarkMode } = useTheme();
  const { orders, updateOrderStatus } = useOrder();
  const [filter, setFilter] = useState('all');

  const filteredOrders = filter === 'all'
    ? orders
    : orders.filter(order => order.status === filter);

  const handleStatusChange = (orderId, newStatus) => {
    updateOrderStatus(orderId, newStatus);
    toast.success(`Order status updated to ${newStatus}`);
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8">Order Management</h1>

        {/* Filter */}
        <div className="flex space-x-4 mb-8">
          {['all', 'pending', 'processing', 'completed', 'cancelled'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-6 py-2 rounded-card font-semibold transition-colors ${
                filter === status
                  ? 'bg-primary text-white'
                  : isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Orders Table */}
        {filteredOrders.length > 0 ? (
          <div className={`rounded-card shadow-card overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}>
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Order ID</th>
                    <th className="px-6 py-4 text-left font-semibold">Customer</th>
                    <th className="px-6 py-4 text-left font-semibold">Items</th>
                    <th className="px-6 py-4 text-left font-semibold">Total</th>
                    <th className="px-6 py-4 text-left font-semibold">Status</th>
                    <th className="px-6 py-4 text-left font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map(order => (
                    <tr key={order.id} className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <td className="px-6 py-4 font-mono text-sm">{order.id.slice(0, 8)}</td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold">{order.customer.name}</p>
                          <p className="text-sm">{order.customer.phone}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p>{order.items.length} item(s)</p>
                      </td>
                      <td className="px-6 py-4 font-bold">₹{order.totalPrice}</td>
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
                      <td className="px-6 py-4">
                        <select
                          value={order.status}
                          onChange={(e) => handleStatusChange(order.id, e.target.value)}
                          className={`px-3 py-2 rounded-lg outline-none border ${
                            isDarkMode
                              ? 'bg-gray-700 border-gray-600'
                              : 'bg-white border-gray-300'
                          }`}
                        >
                          <option value="pending">Pending</option>
                          <option value="processing">Processing</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg">No orders found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderManagement;
