import React from "react";

const Landing5 = () => {
  return (
    <div className="mx-auto mb-2 max-w-[90%]    md:px-">
      <div className="flex sm:flex-col lg:flex-row justify-between border-b-2 border-blue-900  gap-10  py-15">
        <div className="relative">
          <img src="Naviprepfooterlogo.svg" alt="" />
          <img src="vectorfooter.svg" alt="" className="absolute -top-10 -right-5" />
          <img src="vectorfooter.svg" alt="" className="absolute top-15 -right-20 sm:hidden xl:block"  />
        </div>
        <div className="grid w-full grid-cols-2 gap-6 lg:w-[30%]">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Product</h1>
            <div className="flex flex-col gap-3">
              <a href="#" className="hover:underline">
                Candidates
              </a>
              <a href="#" className="hover:underline">
                Recruiters
              </a>
              <a href="#" className="hover:underline">
                Contributors
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Resources</h1>
            <div className="flex flex-col gap-3">
              <a href="#" className="hover:underline">
                Blog
              </a>
              <a href="#" className="hover:underline">
                FAQ
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div  className="flex justify-between mx-auto  py-6">
        <div className="flex justify-center gap-3 ">
            <a href="/privacy" className=" ">Privacy policy</a>
            <a href="/terms" className=" ">Terms & Conditions</a>
            <a href="/publishing" className=" hover:">Publishing Principles</a>
        </div> 
        <p className="">
          &copy; {new Date().getFullYear()} Naviprep.
        </p>
      </div>
    </div>
  );
};

export default Landing5;
