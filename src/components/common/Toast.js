// Toast.js - Toast notification setup
import { Toaster } from 'react-hot-toast';

export const Toast = () => <Toaster />;

// Export toast functions
import toast from 'react-hot-toast';

export const showToast = {
  success: (message) => toast.success(message),
  error: (message) => toast.error(message),
  loading: (message) => toast.loading(message),
  custom: (message) => toast.custom(message),
};
  