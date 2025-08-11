import React from "react";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
      <div className="relative">
        {/* Outer Ring */}
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Glow Effect */}
        <div className="absolute inset-0 w-16 h-16 rounded-full blur-md bg-indigo-500 opacity-40 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Spinner;
