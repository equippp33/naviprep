'use client';

import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link'; 

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here or call an API route
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
      {/* Left Side - Hero */}
      <div
        className="hidden md:flex md:flex-1 relative bg-cover bg-center bg-no-repeat h-full"
        style={{ backgroundImage: "url('/studentimage.png')" }}
      >
        
        {/* Logo */}
        <div className="absolute top-8 left-8 z-10 flex items-center space-x-3 text-white">
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
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:max-w-md bg-white flex items-center justify-center px-6 py-12 sm:px-8">
        <div className="w-full max-w-sm">
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Nice to see you again
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Login */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Login</label>
              <input
                type="text"
                placeholder="Login with Roll number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            {/* Remember Me + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="mr-2 rounded text-blue-600 focus:ring-blue-500"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                Forgot password?
              </a>
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign in
            </button>
            {/* Signup */}
            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{' '}
              <Link href="/signup" className="text-blue-600 hover:text-blue-500 font-medium">
                Sign up now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
