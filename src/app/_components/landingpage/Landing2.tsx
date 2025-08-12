'useclient';


import React from "react";

const Landing2 = () => {
  return (
    <div className="p-20">
      <div className="mx-auto grid lg:grid-cols-2 max-w-[85%] items-center gap-5 ">
        {/* rightbox */}
        <div className="relative max-w-[80%] items-stretch h-full ">
          <img
            src="landingimage2.svg"
            alt=""
            className=""
          />

          <div className="absolute top-40 left-10" >
            <h1 className="text-6xl ">
              Understand the <span> &apos;why&apos; </span>
            </h1>
            <p className="text-xl">
              So you don&apos;t <span className=" text-blue-500"> just prepare for questions 
              </span>  you prepare for the experience
            </p>
          </div>
          <div className="h-30 sm:h-30 md:h-40 " />
        </div>
        {/* left box */}
        <div className="flex max-w-[80%] flex-col gap-4 py-15">
          <div className="flex items-start space-x-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100">
              
              <img src="vector1.svg" alt="" className="" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Smart Questioning Engine
              </h3>
              <p className="leading-relaxed text-gray-600">
                Questions evolve based on your resume, job profile, and
                responses.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100">
              
              <img src="vector2.svg" alt="" className="" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Domain-Driven Scenarios
              </h3>
              <p className="leading-relaxed text-gray-600">
                Whether it&apos;s core engineering, software, business, or creative
                fields - we adapt to your domain.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100">
              
              <img src="vector3.svg" alt="" className="" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Audio simulation
              </h3>
              <p className="leading-relaxed text-gray-600">
                Practice speaking naturally with an AI that responds instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing2;
