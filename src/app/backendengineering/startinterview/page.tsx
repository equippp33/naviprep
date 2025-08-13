'use client';

import { MicOff, MoreHorizontal, PhoneOff, Video, VideoOff } from "lucide-react";
import React, { useState } from "react";
import Loader from "~/app/_components/Dashboard/Loader";

const Page = () => {
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [micEnabled, setMicEnabled] = useState(false);

  return (
    <div className="my-auto mt-4 items-center px-10">
      <div
        className="max-h-screen w-full rounded-2xl bg-cover bg-center bg-no-repeat p-5"
        style={{ backgroundImage: "url('/startinterviewimg.png')" }}
      >
        <div className="flex items-center gap-1 sm:w-[35%] md:w-[20%] rounded-2xl bg-white px-4 py-2 text-2xl">
          <img src="/avatar.svg" alt="" />
          <h2>Naviprep</h2>
        </div>
        <div className="py-5 mb-10">
          <h3 className="text-xl text-white py-2">AI interviewer</h3>
          <p className="max-w-[30%] rounded-2xl bg-violet-200 p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod
          </p>
        </div>
        <div className="flex p-5 justify-end">
          <Loader />
        </div>
        <div className="flex justify-center gap-5">
          <img src="/endcall.svg" alt="" />
          {/* Video toggle */}
          <button
            onClick={() => setVideoEnabled((v) => !v)}
            className="rounded-full bg-white p-2"
            aria-label={videoEnabled ? "Turn off camera" : "Turn on camera"}
          >
            <img
              src={videoEnabled ? "/video-on.svg" : "/video-off.svg"}
              alt={videoEnabled ? "Video On" : "Video Off"}
              className="w-10 h-10"
            />
          </button>
          <button
            onClick={() => setMicEnabled((v) => !v)}
            className="rounded-full bg-white p-2"
            aria-label={micEnabled ? "Turn off microphone" : "Turn on microphone"}
          >
            <img
              src={micEnabled ? "/mic-on.svg" : "/mic-off.svg"}
              alt={micEnabled ? "Mic On" : "Mic Off"}
              className="w-10 h-10"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;