import React from 'react';

interface LoadingScreenProps {
  message?: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative inline-flex">
          <div className="w-16 h-16 border-4 border-blue-200 border-solid rounded-full animate-spin border-t-blue-600"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-solid rounded-full animate-spin border-t-blue-400 animate-pulse"></div>
        </div>
        <p className="mt-4 text-lg font-medium text-gray-700">{message}</p>
        <div className="mt-2 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};
