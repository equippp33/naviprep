'useclient';
import React from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-8n w-full p-4">
      {/* Left side */}
      <div className="flex items-center">
        <button className="flex items-center text-gray-600 hover:text-gray-800 mr-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        <h1 className="text-2xl font-bold text-gray-800">
          👋 Anisha Profile
        </h1>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <span className="text-gray-600 text-sm">Total Test Taken </span>
          <span className="font-bold text-gray-800">3 of 8</span>
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <HelpCircle className="w-6 h-6" />
        </button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center">
          <img 
            src="/avatar.svg" 
            alt="User"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
