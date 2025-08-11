import React from "react";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50">
      {/* Spinner Animation */}
      <div className="relative w-20 h-20">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Middle Ring */}
        <div className="absolute inset-2 border-4 border-pink-500 border-b-transparent rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>

        {/* Inner Glow */}
        <div className="absolute inset-0 rounded-full blur-lg bg-indigo-500 opacity-30 animate-pulse"></div>
      </div>

      {/* Loading Text */}
      <p className="mt-6 text-lg font-semibold text-indigo-400 animate-pulse tracking-wider">
        Loading...
      </p>
    </div>
  );
};

export default Spinner;
