'use client';

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "~/hooks/use-toast";
import { api } from "~/trpc/react";


interface SignUpFormValues {
  name: string;
  collegeName: string;
  email: string;
  course: string;
  location: string;
  mobileNumber: string;
  password: string;
}

export default function SignUp() {
  
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignUpFormValues>();

  const courses = [
    "Computer Science Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
    "Electronics Engineering",
    "Information Technology",
    "Chemical Engineering",
    "Aerospace Engineering",
  ];

  

  const { mutate } = api.user.registerUser.useMutation({
    onSuccess: () => {
      alert("Account Created");
      router.push("/login");
    },
    onError: (error) => {
      toast({
        description: error.message,
      });
    },
  });

  const onSubmit = (data: SignUpFormValues) => {
    console.log("Form submitted with data:", data);
    console.log("Selected course:", selectedCourse);
    console.log("All form data:", {
      ...data,
      course: data.course || selectedCourse
    });
    mutate(data);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
      {/* Left side - Hero */}
      <div
        className="hidden md:flex md:flex-1 relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("/studentimage.png")',
        }}
      >
        
        <div className="absolute top-8 left-8 z-10 flex items-center text-white">
          <img src="navipreplogo.svg" alt="" />
        </div>
        {/* Hero text */}
        <div className="absolute bottom-24 left-8 z-10 max-w-lg">
          <h1 className="text-white text-4xl font-bold mb-6 leading-tight">
            No pressure. No judgment.<br />
            Just smarter practice.
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Step into a real interview environment powered by AI. Upload your resume, choose your job role, and face dynamic questions designed to challenge, train, and transform the way you prepare.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full md:max-w-md bg-white flex items-center justify-center px-6 py-12 sm:px-8 overflow-y-auto">
        <div className="w-full max-w-sm">
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Enter your details
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Course dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course
              </label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-left flex items-center justify-between"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className={selectedCourse ? "text-gray-900" : "text-gray-500"}>
                    {selectedCourse || "Select Course"}
                  </span>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {courses.map((course) => (
                      <div
                        key={course}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedCourse(course);
                          setValue("course", course);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* College Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                College Name
              </label>
              <input
                type="text"
                {...register("collegeName", { required: true })}
                placeholder="Enter here"
                // onChange={(e) => setCollegeName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter here"
                
                // onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="text"
                {...register("email", { required: true })}
                placeholder="Enter here"
                
                // onChange={(e) => setEmailAddress(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                {...register("location", { required: true })}
                placeholder="Enter here"
                
                // onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                {...register("mobileNumber", { required: true })}
                placeholder="Enter here"
                
                // onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign in
            </button>

            {/* Link to Sign In */}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}