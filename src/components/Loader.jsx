import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-32 h-32 bg-gray-100 dark:bg-[#000000]">
      <div className="loader border-4 border-transparent border-t-purple-900 dark:border-t-purple-300 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default Loader;

