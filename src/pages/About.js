// About.js - About Us page
import React from 'react';
import { FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import HeroSection from '../components/common/HeroSection';

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <div>
      {/* Hero Section */}
      {/* <HeroSection
        title="About Us"
        subtitle="Learn more about our restaurant and mission"
      /> */}

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Our Story */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className={`text-lg mb-4 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Welcome to Restaurant App, where passion for food meets convenience. Founded in 2020, we started with a simple mission: to bring high-quality, delicious recipes to your doorstep.
            </p>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Our team of experienced chefs and dedicated staff work tirelessly to ensure every dish is prepared with the freshest ingredients and utmost care. We believe that good food has the power to bring people together.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-card hover:shadow-card transition-shadow">
              <div className="inline-block p-4 bg-primary bg-opacity-10 rounded-full mb-4">
                <FiUsers className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">10,000+</h3>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Happy Customers</p>
            </div>
            <div className="text-center p-6 rounded-card hover:shadow-card transition-shadow">
              <div className="inline-block p-4 bg-secondary bg-opacity-10 rounded-full mb-4">
                <FiAward className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Delicious Recipes</p>
            </div>
            <div className="text-center p-6 rounded-card hover:shadow-card transition-shadow">
              <div className="inline-block p-4 bg-accent bg-opacity-10 rounded-full mb-4">
                <FiTrendingUp className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">4.8/5</h3>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Average Rating</p>
            </div>
          </div>

          {/* Values */}
          <div className={`mb-16 p-8 rounded-card ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h3 className="text-3xl font-bold mb-8">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-2">Quality</h4>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-700'}>
                  We use only the freshest and highest quality ingredients to prepare every dish.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Integrity</h4>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-700'}>
                  We believe in transparency and honesty in all our dealings with customers.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Innovation</h4>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-700'}>
                  We constantly innovate and improve our recipes and service delivery.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Customer Satisfaction</h4>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-700'}>
                  Your satisfaction is our top priority, and we strive for excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Team Highlight */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Our Team</h3>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Our dedicated team comprises experienced chefs, friendly delivery personnel, and excellent customer support staff. We work together to ensure you have the best experience with us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
