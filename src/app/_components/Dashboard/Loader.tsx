import React from "react";

export default function Loader() {
  return (
    <div className="  flex items-center justify-center bg-[#171717] rounded-full text-[#2187e7] relative">
      {/* Main Circle Container */}
      <div className="relative w-[200px] h-[200px] flex items-center justify-center select-none">
        {/* Outer Circle */}
        <div
          className="
            absolute inset-0
            rounded-full
            border-8
            border-[#2187e7]/40
            shadow-[0_0_75px_0_#2187e7] opacity-90
            animate-spin-slow
          "
        />
        {/* Inner Circle */}
        <div
          className="
            absolute top-5 left-5 right-5 bottom-5
            rounded-full
            border-8
            border-[#2187e7]/90
            border-l-transparent border-r-transparent
            shadow-[0_0_100px_0_#2187e7]
            opacity-90
            animate-spin-reverse-slower
          "
        />
        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          
          {/* Bars */}
          <ul className="flex gap-2 ">
            <li className="w-[10px] h-[10px] rounded bg-white shadow-lg animate-bar1" />
            <li className="w-[10px] h-[10px] rounded bg-white shadow-lg animate-bar2" />
            <li className="w-[10px] h-[10px] rounded bg-white shadow-lg animate-bar3" />
          </ul>
        </div>
      </div>
      {/* Status Box */}
      

      {/* Custom Tailwind keyframes for animation */}
      <style>
        {`
          .animate-spin-slow {
            animation: spinPulse 4s infinite ease-in-out;
          }
          .animate-spin-reverse-slower {
            animation: spinoffPulse 8s infinite linear reverse;
          }
          @keyframes spinPulse {
            0% { transform: scale(1.1);}
            70% { transform: scale(0.98);}
            100%{ transform: scale(1.1);}
          }
          @keyframes spinoffPulse {
            0% { transform: rotate(0deg) scale(1);}
            10% { transform: rotate(90deg);}
            20% { transform: rotate(-90deg) scale(1.05);}
            40% { transform: rotate(180deg) scale(0.9);}
            70% { transform: rotate(-180deg) scale(1.05);}
            100% { transform: rotate(360deg) scale(1);}
          }
          .animate-fade {
            animation: fade 3s infinite linear;
          }
          @keyframes fade {
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
          }
          .animate-bar1 {
            animation: loadbars 0.9s cubic-bezier(0.645,0.045,0.355,1) infinite 0s;
          }
          .animate-bar2 {
            animation: loadbars 0.9s ease-in-out infinite -0.2s;
          }
          .animate-bar3 {
            animation: loadbars 0.9s ease-in-out infinite -0.4s;
          }
          @keyframes loadbars {
            0% { height: 10px; margin-top: 25px;}
            50% { height: 50px; margin-top: 0px;}
            100% { height: 10px; margin-top: 25px;}
          }
        `}
      </style>
    </div>
  );
}
