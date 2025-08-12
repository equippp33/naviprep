import {  Play, Sparkle,  Volume2 } from "lucide-react";
import React from "react";
import Sidebar from "~/app/_components/Dashboard/Sidebar";
import Cards from "~/app/_components/stats/Cards";

const page = () => {
  return (
    <div className="flex  ">
      <div className="flex min-h-screen max-w-[30%]">
        <Sidebar/>
      </div>
      <div className="mx-auto p-2 ">
        <div className="flex justify-between gap-10 p-5">
          <div
            className="flex min-w-[60%] flex-col items-start justify-between rounded-2xl bg-cover bg-center bg-no-repeat p-5"
            style={{ backgroundImage: "url('/reportvideoimg.svg')" }}>
            <div className="flex items-center  gap-2">
              <img src="/reportprofileimg.svg" alt="" />
              <p>Mohd Zuber</p>
            </div>
            <div className="flex w-full items-center justify-between gap-3">
              <Volume2 size={30} className="rounded-2xl bg-white" />
              <div className="h-1 w-full bg-white"></div>
              <Play size={30} className="rounded-2xl bg-white" />
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-violet-300">
            <h3 className="p-3 font-medium text-white">Live Transcript</h3>
            <div className="rounded-2xl bg-white p-5">
              <div>
                <h4 className="py-2 font-medium">AI Interviewer</h4>
                <p className="rounded-2xl bg-gray-200 p-3 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod ?
                </p>
              </div>
              <div className="flex flex-col items-end">
                <h4 className="py-2 font-medium">You</h4>
                <p className="rounded-2xl bg-blue-50 p-3 text-sm">
                  I am kumar swamy friend of zuber sLorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod....
                </p>
              </div>
              <div className="flex w-full justify-end">
                <div className="m-2 flex w-fit gap-3 rounded-4xl bg-green-300 p-3">
                  <Sparkle />
                  <h3>view Feedback</h3>
                </div>
              </div>

              <div className="flex items-center">
                <img src="/spinnerpulse.svg" alt="" />
                <p>Scroll Down</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default page;
