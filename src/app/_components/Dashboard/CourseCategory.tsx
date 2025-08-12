import React from 'react';
import { ChevronRight, type LucideIcon } from 'lucide-react';

// Helper function
function courseHref(course: string) {
  return `/${course.replace(/[\s-]/g, '').toLowerCase()}`;
}

interface CourseCategoryProps {
  icon: LucideIcon;
  title: string;
  courses: string[];
}

const CourseCategory: React.FC<CourseCategoryProps> = ({ icon: Icon, title, courses }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm flex flex-col md:flex-row items-center gap-6">
      {/* ...icon and title block... */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/4 bg-gray-50 p-6 rounded-xl text-center h-full">
        <div className="bg-gray-200 p-3 rounded-full mb-3">
          <Icon className="w-6 h-6 text-gray-600" />
        </div>
        <h3 className="font-semibold text-gray-700">{title}</h3>
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {courses.map((course) => (
          <a
            key={course}
            href={courseHref(course)}
            className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all"
          >
            <span className="text-sm font-medium text-gray-800">{course}</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default CourseCategory;
