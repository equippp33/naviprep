'useclient';

import React from "react";
import { Mail, Hash, Phone, User, BookOpen } from "lucide-react";
import DomainSelect from "../stats/DomainSelect";
import ProfileSelect from "../stats/ProfileSelect";

const UserProfile: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
      <div className="flex items-start justify-between">
        {/* Left side - Profile info */}
        <div className="flex items-start space-x-6">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Anisha Kumar"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Anisha Kumar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center mr-3">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Email ID:</span>
                  <span className="ml-2 text-gray-800">kumar@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center mr-3">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Contact:</span>
                  <span className="ml-2 text-gray-800">7894562130</span>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center mr-3">
                  <Hash className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Roll No:</span>
                  <span className="ml-2 text-gray-800">123CSE006</span>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center mr-3">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Gender:</span>
                  <span className="ml-2 text-gray-800">Male</span>
                </div>
              </div>

              <div className="flex items-center col-span-2">
                <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center mr-3">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Course:</span>
                  <span className="ml-2 text-gray-800">Computer Science</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Progress circle */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 mb-3">
            <svg className="w-24 h-24 transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-gray-200"
              />
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.7)}`}
                className="text-purple-500"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <User className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          <span className="text-2xl font-bold text-gray-800 mb-1">70%</span>
          <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
            View Resume
          </button>
        </div>
      </div>

      {/* Dropdown selects */}
      <div className="flex justify-start gap-5 py-2 ">
        <div className=" ">
          <DomainSelect />
        </div>
        <div className="">
          <ProfileSelect />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
