// Contact.js - Contact Us page
import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import toast from 'react-hot-toast';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill all fields');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    toast.success('Message sent successfully! We will contact you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Hero Section */}
      {/* <HeroSection
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with us today!"
      /> */}

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <div className={`flex items-start space-x-4 p-6 rounded-card ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="p-3 bg-primary text-white rounded-full">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>+91 98765 43210</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>+91 98765 43211</p>
                  </div>
                </div>

                {/* Email */}
                <div className={`flex items-start space-x-4 p-6 rounded-card ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="p-3 bg-primary text-white rounded-full">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>info@restaurant.com</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>support@restaurant.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className={`flex items-start space-x-4 p-6 rounded-card ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="p-3 bg-primary text-white rounded-full">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Address</h3>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                      123 Food Street<br />
                      Culinary City, CC 12345<br />
                      Your Country
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className={`p-6 rounded-card ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <h3 className="font-bold text-lg mb-3">Hours of Operation</h3>
                  <div className="space-y-2">
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Monday - Friday: 11:00 AM - 10:00 PM</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="fullName" className="block font-semibold mb-2">Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-card border-2 outline-none transition ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-700 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:border-primary`}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-semibold mb-2">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    className={`w-full px-4 py-3 rounded-card border-2 outline-none transition ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-700 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:border-primary`}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block font-semibold mb-2">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this about?"
                    className={`w-full px-4 py-3 rounded-card border-2 outline-none transition ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-700 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:border-primary`}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                    rows="5"
                    className={`w-full px-4 py-3 rounded-card border-2 outline-none transition resize-none ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-700 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:border-primary`}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3 rounded-card hover:bg-red-600 transition flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <FiSend size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
