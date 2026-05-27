// Loader.js - Loading spinner component
import React from 'react';
import { BeatLoader } from 'react-spinners';

const Loader = ({ loading = true, size = 15 }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <BeatLoader color="#FF6B6B" loading={loading} size={size} />
    </div>
  );
};

export default Loader;
