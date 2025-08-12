import React from 'react';
import { Home, HelpCircle, Bell, User, BookOpen } from 'lucide-react';
import CourseCategory from './CourseCategory';
import UserProfile from './UserProfile';
import { courseCategories } from './data/courses';

const Dashboard: React.FC = () => {
  return (
    <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <Home className="w-6 h-6 text-gray-500" />
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <HelpCircle className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700" />
          <Bell className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700" />
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
             <img src="https://i.pravatar.cc/40?u=a042581f4e29026704d" alt="User Avatar" />
          </div>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          <span role="img" aria-label="waving hand">👋</span> Welcome, Kumar!
        </h2>
      </section>

      <UserProfile />

      <section className="mt-10">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-gray-800" />
            <h2 className="text-xl font-bold text-gray-800">Quick Mock</h2>
          </div>
          <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
            View all
          </a>
        </div>
        <div className="space-y-6">
          {courseCategories.map((category) => (
            <CourseCategory
              key={category.title}
              icon={category.icon}
              title={category.title}
              courses={category.courses}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
