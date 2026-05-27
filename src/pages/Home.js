// Home.js - Home page component
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { MdFastfood, MdLocalPizza, MdDinnerDining, MdLocalBar, MdCake, MdRestaurant, MdLocalFireDepartment } from 'react-icons/md';
import { useTheme } from '../context/ThemeContext';
import HeroSection from '../components/common/HeroSection';
import FoodCard from '../components/cards/FoodCard';
import { foodData, getCategories } from '../data/foodData';
import banneradd from '../assets/images/PromoBanner-1-dfd503e0.png';
import banneradd2 from '../assets/images/PromoBanner-2-ec338384.png';


const Home = () => {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState('Main Dishes');
  const categories = ['Main Dishes', 'Desserts', 'Sea Food', 'Beverage'];
  const getCategoryButtonClass = (category) => {
    if (activeCategory === category) return 'bg-primary text-white shadow-lg';
    return isDarkMode
      ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
      : 'bg-slate-100 text-slate-600 hover:bg-slate-200';
  };

  // Get featured items and categories
  const featuredItems = foodData.slice(0, 6);
  const heroMenuItems = featuredItems.slice(0, 4);
  
  // Category icons mapping
  const categoryIcons = {
    'Pizza': <MdLocalPizza size={48} />,
    'Burger': <MdFastfood size={48} />,
    'Pasta': <MdDinnerDining size={48} />,
    'Drinks': <MdLocalBar size={48} />,
    'Dessert': <MdCake size={48} />,
    'Indian Food': <MdRestaurant size={48} />,
    'Chinese Food': <MdLocalFireDepartment size={48} />,
  };
  
  // Get categories with item counts
  const allCategories = getCategories();
  const categoriesWithCount = allCategories.map(cat => ({
    name: cat,
    count: foodData.filter(item => item.category === cat).length,
    icon: categoryIcons[cat] || <MdRestaurant size={48} />
  }));

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Delicious Food Delivered"
        subtitle="Order your favorite recipes online and get them delivered fresh"
      />

      {/* Menu Preview Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto  px-4">
          <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div className={`rounded-[32px] p-8 ${isDarkMode ? 'bg-slate-800/90 border border-white/10' : 'bg-white shadow-lg border border-gray-200'}`}>
              <span className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${isDarkMode ? 'bg-red-500/10 text-red-400' : 'bg-red-50 text-red-600'}`}>
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" />{/* icon */}
                FOOD ITEMS
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight">Starters & Main Dishes</h2>
              <p className={`mt-4 max-w-2xl text-base ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                Explore a hand-picked selection of our most popular dishes with rich flavors, crafted for your table.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {categories.map(category => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                      className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${getCategoryButtonClass(category)}`}>
                    
                      {category}
                    </button>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between text-sm uppercase tracking-[0.2em] font-semibold">
                  <span className={isDarkMode ? 'text-slate-400' : 'text-gray-500'}>Menu Preview</span>
                  <div className="flex items-center gap-2">
                    <button className={`rounded-full px-3 py-1 ${isDarkMode ? 'bg-slate-700 text-slate-200' : 'bg-white text-gray-700 shadow-sm'}`}>Half</button>
                    <button className={`rounded-full px-3 py-1 ${isDarkMode ? 'bg-slate-700 text-slate-200' : 'bg-white text-gray-700 shadow-sm'}`}>Full</button>
                  </div>
                </div>

                {heroMenuItems.map(item => (
                  <div key={item.id} className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center  mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{item.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-end justify-end gap-8">
                        <span className="text-lg font-semibold text-red-600">${Math.round(item.price * 0.75)}</span>
                        <span className="text-lg font-semibold text-red-600">${item.price}</span>
                      </div>
                      <p className={`mt-1 text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>Extra Free Juice.</p>
                    </div>
                  </div>
                ))}
              </div>
          

            <div className="overflow-hidden rounded-[32px] shadow-xl shadow-black/5">
              <img
                src={featuredItems[0]?.image}
                alt="Featured meal"
                className="h-full w-full min-h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Our Categories</h2>
            <Link
              to="/menu"
              className={`px-6 py-2 rounded-full border-2 font-semibold transition ${
                isDarkMode
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              See more
            </Link>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriesWithCount.map(category => (
              <div
                key={category.name}
                className={`p-6 rounded-[24px] transition-all hover:shadow-lg hover:scale-105 cursor-pointer flex items-center gap-4 ${
                  isDarkMode
                    ? 'bg-gray-700 hover:bg-gray-650'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className={`flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-full transition ${
                  isDarkMode
                    ? 'bg-gray-600 text-primary'
                    : 'bg-gray-200 text-gray-700'
                }`}>
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                  <p className={`text-sm font-semibold flex items-center gap-1 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {category.count} items
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Featured Recipes</h2>
            <Link
              to="/menu"
              className="flex items-center space-x-2 text-primary hover:text-red-600 transition font-semibold"
            >
              <span>View All</span>
              <FiArrowRight size={20} />
            </Link>
          </div>

          {/* Featured Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map(food => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        </div>
      </section>

  <section className="py-16 pt-0">
      <div className="max-w-7xl mx-auto px-4">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={banneradd}
          alt="Promotional Banner"
          className="w-full h-auto rounded-[32px] shadow-lg shadow-black/10 object-cover"
        />
        <img
          src={banneradd2}
          alt="Promotional Banner"
          className="w-full h-auto rounded-[32px] shadow-lg shadow-black/10 object-cover"
        />
    </div>
  </div>
</section>
      
      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8 opacity-90">
            Browse our full menu and order your favorite food now!
          </p>
          <Link
            to="/menu"
            className="inline-block px-8 py-3 bg-white text-primary font-bold rounded-card hover:bg-gray-100 transition-colors"
          >
            Explore Menu
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
