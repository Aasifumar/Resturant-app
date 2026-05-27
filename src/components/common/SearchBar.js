// SearchBar.js - Search component with debounce
import React, { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { useDebounce } from '../../hooks/useDebounce';

const SearchBar = ({ onSearch, placeholder = "Search recipes..." }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isDarkMode } = useTheme();
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  React.useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div className={`flex items-center space-x-2 px-4 py-2 rounded-card border-2 ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700 text-white' 
        : 'bg-white border-gray-300 text-gray-700'
    }`}>
      <FiSearch size={20} className="text-gray-500" />
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`flex-1 bg-transparent outline-none ${isDarkMode ? 'text-white placeholder-gray-500' : 'text-gray-700'}`}
      />
      {searchTerm && (
        <button
          onClick={handleClear}
          className="text-gray-500 hover:text-gray-700 transition"
        >
          <FiX size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
