"use client";

import React from "react";

const Landing4 = () => {
  return (
    <div className="p-15">
      <div className="flex justify-between">
        <p className="text-xl text-blue-500">Here’s How We Help</p>
        <p className="text-xl text-gray-400">
          Smart. Effortless. Transformative.
        </p>
      </div>
      <div className="my-6">
        <h3 className="text-4xl">
          No more scripts. No more stress. Just real interviews powered by AI.
        </h3>
      </div>
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(150vw) scale(2, 1);
          }
          to {
            transform: translateX(0) scale(1, 1);
          }
        }

        .animate-slide-in {
          animation-name: slide-in;
          animation-duration: 3s;
          animation-timing-function: ease-in-out;
          animation-fill-mode: both;
        }

        .delay-0 {
          animation-delay: 0s;
        }

        .delay-1 {
          animation-delay: 1s;
        }

        .delay-2 {
          animation-delay: 2s;
        }
      `}</style>
      <div className="overflow-x-hidden">
      {/* 1 */}
      <div className="P-3 animate-slide-in flex max-w-[90%] flex-col gap-20 overflow-hidden py-4 delay-0 lg:flex-row">
        {/* rightbox */}
        <div className="max-w-[1/2]">
          <img src="landingimage41.svg" alt="" className="" />
        </div>
        {/* leftbox */}
        <div className="flex max-w-[1/2] flex-col justify-center gap-4">
          <h1 className="text-2xl font-semibold">AI-Driven Interview Engine</h1>
          <div>
            <p>
              Practice with the power of AI that adapts to your background and
              target role.
            </p>
            <p>
              Our engine ingests your resume, matches your chosen job profile,
              and simulates a domain-specific mock interview tailored to
              challenge and coach you like a real recruiter would.
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex gap-1">
              <img src="shieldTick.svg" alt="" className="" />
              <p>Resume & job-role based question generation</p>
            </div>
            <div className="flex gap-1">
              <img src="shieldTick.svg" alt="" className="" />
              <p>Real-time audio/video interaction with adaptive flow</p>
            </div>
            <div className="flex gap-1">
              <img src="shieldTick.svg" alt="" className="" />
              <p>
                Role-specific domain scenarios across tech & non-tech fields
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="P-3 animate-slide-in flex max-w-[90%] flex-col gap-20 overflow-hidden py-4 delay-1 lg:flex-row">
        {/* rightbox */}
        <div className="sm:max-w-[60%] lg:max-w-[22%]">
          <div className="w-full">
            <img src="landingimage42.svg" alt="" className="" />
          </div>
        </div>
        {/* leftbox */}
        <div className="flex max-w-[100%] flex-col justify-center gap-4">
          <h1 className="text-2xl font-semibold">
            Performance Dashboard & Deep Feedback
          </h1>
          <div>
            <p>Know your strengths. Fix your weaknesses. Grow every time.</p>
            <p>
              After every session, receive a detailed performance report
              covering key interview metrics from soft skills to technical depth
              and get a clear improvement path.
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex gap-1">
              <img src="shieldTick.svg" alt="" className="" />
              <p>
                Attribute-level scoring (confidence, fluency, relevance, etc.)
              </p>
            </div>
            <div className="flex gap-1">
              <img src="shieldTick.svg" alt="" className="" />
              <p>Behavioral & voice feedback</p>
            </div>
            <div className="flex gap-1">
              <img src="shieldTick.svg" alt="" className="" />
              <p>Resume-to-role match score</p>
            </div>
            <div className="flex gap-1">
              <img src="shieldTick.svg" alt="" className="" />
              <p>Personalized learning recommendations</p>
            </div>
            <div className="flex gap-1">
              <img src="shieldTick.svg" alt="" className="" />
              <p>Interview history & progress tracking</p>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="P-3 animate-slide-in flex max-w-[90%] flex-col gap-20 overflow-hidden py-4 delay-2 lg:flex-row">
        {/* rightbox */}
        <div className="max-w-[80%]">
          <img src="landingimage43.svg" alt="" className="" />
        </div>
        {/* leftbox */}
        <div className="flex max-w-[100%] flex-col justify-center gap-4">
          <h1 className="text-2xl font-semibold">
            Scalable for Institutions & Career Platforms
          </h1>
          <div>
            <p>
              Upskill students and candidates at scale, with measurable
              outcomes.
            </p>
            <p>
              We enable placement cells, training institutes, and bootcamps to
              offer mock interview practice at scale with admin dashboards,
              batch tracking, and white-label options.
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex gap-1">
              <img src="shieldTick.svg" alt="" className="" />
              <p>Admin dashboard to track user progress</p>
            </div>
            <div className="flex gap-1">
              <img src="shieldTick.svg" alt="" className="" />
              <p>Bulk access for students or learners</p>
            </div>
            <div className="flex gap-1">
              <img src="shieldTick.svg" alt="" className="" />
              <p>API & white-label integration for EdTechs</p>
            </div>
            <div className="flex gap-1">
              <img src="shieldTick.svg" alt="" className="" />
              <p>Fits seamlessly into any career readiness program</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Landing4;
