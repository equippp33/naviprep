'use client';

import React, { useState } from "react";
import Image from "next/image";
import { api } from "~/trpc/react";

const Landing1 = () => {
  const [email, setEmail] = useState("");
  const addToWaitlistMutation = api.user.addToWaitlist.useMutation({
    onSuccess: () => {
      alert("Added to waitlist");
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const handleSubmit = async () => {
    if (!email) {
      alert("Please enter a valid email address");
      return;
    }
    try {
      await addToWaitlistMutation.mutateAsync({ email });
      setEmail(""); // Clear the input field after successful submission
    } catch (error) {
      console.error("Error adding to waitlist:", error);
      alert("Failed to add to waitlist. Please try again.");
    }
  };

  return (
    <div className="mx-auto p-4">
      <div className="flex items-center justify-between rounded-4xl bg-violet-500 px-5">
        <img src="navipreplogo.svg" alt="" className="h-16" /> {/* Adjusted h-17 to h-16 */}
        <a href="login" className="rounded-3xl bg-white p-2 px-6">
          login
        </a>
      </div>
      <div className="mx-auto my-6 text-center">
        <h1 className="p-4 text-5xl font-bold bg-gradient-to-b from-[#3E489E] to-[#ADADAD] bg-clip-text text-transparent">
          Interview Smarter.Get Hired Faster
        </h1>
        <p className="font-medium text-xl lg:max-w-[50%] sm:max-w-[70%] mx-auto text-[#848484] ">
          AI Powered mock interviews tailored to your resume, job role and real
          time communication style
        </p>
      </div>
      <div className="relative ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="mx-auto h-100 w-100 rounded-xl duration-500 "
        >
          <source src="/f13.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-[#673CBD] to-[#343C8F] text-white px-4 py-2 rounded-xl mb-4 text-sm font-medium">
              ⭐ Your Head Start is One Click Away! Sign up to get early access now
            </div>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                value={email} // Added value to control the input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white"
              />
              <button
                type="button" // Changed to button since no form submission
                onClick={handleSubmit}
                className="px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors whitespace-nowrap"
                disabled={addToWaitlistMutation.isPending}
              >
                {addToWaitlistMutation.isPending ? "Joining..." : "Join waitlist →"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/naviprepimg.svg"
          alt="star"
          width={100}
          height={100}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Landing1;