// Menu.js - Menu/Listing page component
import React, { useState, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import SearchBar from '../components/common/SearchBar';
import CategoryCard from '../components/cards/CategoryCard';
import FoodCard from '../components/cards/FoodCard';
import Pagination from '../components/common/Pagination';
import { foodData, getCategories, filterByCategory } from '../data/foodData';

const Menu = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const categories = ['All', ...getCategories()];

  // Filter and search
  const filteredFood = useMemo(() => {
    let items = selectedCategory === 'All'
      ? foodData
      : filterByCategory(selectedCategory);

    if (searchTerm) {
      items = items.filter(food =>
        food.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        food.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return items;
  }, [selectedCategory, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredFood.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredFood.slice(startIndex, endIndex);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  return (
    <div>
      {/* Hero Section */}
      {/* <HeroSection
        title="Our Menu"
        subtitle="Explore our delicious recipes and food items"
      /> */}

      {/* Menu Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar
              onSearch={handleSearch}
              placeholder="Search recipes by name or description..."
            />
          </div>

          {/* Categories */}
          <div className="mb-12 overflow-x-auto pb-4">
            <div className="flex space-x-4">
              {categories.map(category => (
                <CategoryCard
                  key={category}
                  category={category}
                  isSelected={selectedCategory === category}
                  onClick={() => handleCategoryChange(category)}
                  foodCount={
                    category === 'All'
                      ? foodData.length
                      : filterByCategory(category).length
                  }
                />
              ))}
            </div>
          </div>

          {/* Results Info */}
          <div className={`mb-6 p-4 rounded-card ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <p className="text-sm">
              {filteredFood.length === 0
                ? `No items found for "${searchTerm}"`
                : `Showing ${startIndex + 1}-${Math.min(endIndex, filteredFood.length)} of ${filteredFood.length} items`}
            </p>
          </div>

          {/* Food Grid */}
          {currentItems.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentItems.map(food => (
                  <FoodCard key={food.id} food={food} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                No items found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;
