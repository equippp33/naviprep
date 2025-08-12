'use client';

import React, { useState } from 'react';
import { Monitor, BarChart3, Palette, Star, User, Settings } from 'lucide-react';

function SelectProfile() {
  const [selectedProfiles, setSelectedProfiles] = useState<string[]>([]);

  const profiles = [
    { id: 'software', name: 'Software', icon: Monitor },
    { id: 'datascience', name: 'Data Science', icon: BarChart3 },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'marketing', name: 'Marketing', icon: Star },
    { id: 'nonit', name: 'Non-IT', icon: User },
    { id: 'administration', name: 'Administration', icon: Settings }
  ];

  const toggleProfile = (profileId: string) => {
    setSelectedProfiles(prev =>
      prev.includes(profileId)
        ? prev.filter(id => id !== profileId)
        : [...prev, profileId]
    );
  };

  const handleSignIn = () => {
    if (selectedProfiles.length > 0) {
      console.log('Selected profiles:', selectedProfiles);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
      {/* Left side */}
      <div
        className="hidden md:flex md:flex-1 relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("/studentimage.png")',
        }}
      >
        

        {/* Logo */}
        <div className="absolute top-8 left-8 z-10 flex items-center text-white">
          <img src="/navipreplogo.svg" alt="" />
        </div>

        {/* Hero text */}
        <div className="absolute bottom-24 left-8 z-10 max-w-lg">
          <h1 className="text-white text-4xl font-bold mb-6 leading-tight">
            No pressure. No judgment.
            <br />
            Just smarter practice.
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Step into a real interview environment powered by AI. Upload your resume, choose your job role, and face dynamic questions designed to challenge, train, and transform the way you prepare.
          </p>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-8 z-10">
          <p className="text-gray-400 text-sm">© 2024 Copy rights by 3.0 Labs</p>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full md:max-w-md bg-white flex flex-col items-center justify-center px-6 py-12 sm:px-8">
        {/* Gradient circle */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400" />
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-8 text-center">
          Select 1 or more profiles
        </h2>

        {/* Profile grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            const isSelected = selectedProfiles.includes(profile.id);

            return (
              <button
                key={profile.id}
                onClick={() => toggleProfile(profile.id)}
                className={`p-6 rounded-lg border-2 flex flex-col items-center gap-3 transition-all duration-200 ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icon
                  className={`w-8 h-8 ${
                    isSelected ? 'text-blue-600' : 'text-gray-600'
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                    isSelected ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {profile.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Sign in */}
        <button
          onClick={handleSignIn}
          disabled={selectedProfiles.length === 0}
          className={`w-[50%] py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            selectedProfiles.length > 0
              ? 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SelectProfile;
