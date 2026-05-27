// validators.js - Utility functions for validation
// Validate email
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Validate phone
export const validatePhone = (phone) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(phone);
};

// Validate name
export const validateName = (name) => {
  return name.trim().length >= 3;
};

// Validate password
export const validatePassword = (password) => {
  return password.length >= 6;
};

// Validate form data
export const validateFormData = (data, rules) => {
  const errors = {};

  Object.keys(rules).forEach(field => {
    const rule = rules[field];
    const value = data[field];

    if (rule.required && !value) {
      errors[field] = `${field} is required`;
    }

    if (rule.min && value && value.length < rule.min) {
      errors[field] = `${field} must be at least ${rule.min} characters`;
    }

    if (rule.max && value && value.length > rule.max) {
      errors[field] = `${field} must not exceed ${rule.max} characters`;
    }

    if (rule.type === 'email' && value && !validateEmail(value)) {
      errors[field] = `${field} must be a valid email`;
    }

    if (rule.type === 'phone' && value && !validatePhone(value)) {
      errors[field] = `${field} must be a valid phone number`;
    }
  });

  return errors;
};
