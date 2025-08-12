import React from "react";

const Landing3 = () => {
  return (
    <div className="bg-violet-50 items-center">
      <div className="mx-auto flex flex-col-reverse lg:flex-row max-w-[85%] items-center justify-between gap-5 p-10 ">
        {/* rightbox */}
        <div className="flex max-w-[80%] flex-col gap-4 py-15">
          <div className="flex items-start space-x-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100">
              {/* <User className="w-6 h-6 text-purple-600" /> */}
              <img src="vector1.svg" alt="" className="" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Detailed Attribute Scoring
              </h3>
              <p className="leading-relaxed text-gray-600">
                Communication, confidence, body language, domain strength, and more.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100">
              {/* <BarChart3 className="w-6 h-6 text-purple-600" /> */}
              <img src="vector2.svg" alt="" className="" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Resume & Role Match Score
              </h3>
              <p className="leading-relaxed text-gray-600">
                See how well your resume aligns with the job you&apos;re targeting.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100">
              {/* <Mic className="w-6 h-6 text-purple-600" /> */}
              <img src="vector3.svg" alt="" className="" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Interview History Tracker
              </h3>
              <p className="leading-relaxed text-gray-600">
                Access all your past interviews, scores, and progress trends.
              </p>
            </div>
          </div>
        </div>
        {/* leftbox */}
        <div className=" max-w-[80%] items-stretch h-full">
            <img src="landingimage3.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing3;
