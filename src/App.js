// App.js - Main application component with routing
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { OrderProvider } from './context/OrderContext';
import { ThemeProvider } from './context/ThemeContext';
import { Toast } from './components/common/Toast';

// Layouts
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import RecipeDetails from './pages/RecipeDetails';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Favorites from './pages/Favorites';

// Admin Pages
import AdminDashboard from './admin/AdminDashboard';
import OrderManagement from './admin/OrderManagement';
import OrderHistory from './admin/OrderHistory';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <FavoritesProvider>
          <OrderProvider>
            <Router>
              <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                {/* Toast Notification */}
                <Toast />

                {/* Navbar */}
                <Navbar />

                {/* Main Content */}
                <main className="flex-grow">
                  <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/recipe/:id" element={<RecipeDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* Admin Routes */}
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/orders" element={<OrderManagement />} />
                    <Route path="/admin/order-history" element={<OrderHistory />} />

                    {/* Catch all - redirect to home */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </main>

                {/* Footer */}
                <Footer />
              </div>
            </Router>
          </OrderProvider>
        </FavoritesProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
