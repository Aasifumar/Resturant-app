// OrderContext.js - Manages orders and order history
import React, { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  // Load orders from localStorage on mount
  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  // Place new order
  const placeOrder = (orderData) => {
    const newOrder = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      status: 'pending',
      ...orderData,
    };
    setOrders([newOrder, ...orders]);
    return newOrder.id;
  };

  // Get all orders
  const getOrders = () => {
    return orders;
  };

  // Get single order
  const getOrderById = (id) => {
    return orders.find(order => order.id === id);
  };

  // Update order status
  const updateOrderStatus = (id, status) => {
    setOrders(
      orders.map(order =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  // Cancel order
  const cancelOrder = (id) => {
    setOrders(
      orders.map(order =>
        order.id === id ? { ...order, status: 'cancelled' } : order
      )
    );
  };

  // Get order count
  const getOrderCount = () => {
    return orders.length;
  };

  // Get pending orders count
  const getPendingOrdersCount = () => {
    return orders.filter(order => order.status === 'pending').length;
  };

  return (
    <OrderContext.Provider value={{
      orders,
      placeOrder,
      getOrders,
      getOrderById,
      updateOrderStatus,
      cancelOrder,
      getOrderCount,
      getPendingOrdersCount,
    }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within OrderProvider');
  }
  return context;
};
