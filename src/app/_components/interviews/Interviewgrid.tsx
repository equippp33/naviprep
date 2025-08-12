'useclient';

import React, { useState } from "react";
import VideoCard from "./VideoCard"; // Make sure this path is correct
import DomainSelect from "../stats/DomainSelect";
import ProfileSelect from "../stats/ProfileSelect";
import { Calendar } from "lucide-react";
import Dateselection from "./Dateselection";
import NotificationHeader from "../notificationpreferences/NotificationHeader";

// Example static data; in real apps, replace with API data
const videos = Array.from({ length: 20 }, (_, ) => ({
  role: "Product Manager",
  date: "10th Aug 2025",
  duration: "15 min",
}));

const PER_PAGE = 8;

export default function Interviewgrid() {
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(videos.length / PER_PAGE);
  const currentVideos = videos.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="mx-auto">
      <div>
        <NotificationHeader/>
      </div>
      <div className="flex gap-5 py-5">
        <DomainSelect/>
        <ProfileSelect/>
        <div >
          <Dateselection/>

        </div>
      </div>
      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentVideos.map((video, idx) => (
          <VideoCard
            key={idx + (page - 1) * PER_PAGE}
            role={video.role}
            date={video.date}
            duration={video.duration}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 items-center gap-2">
        <button
          disabled={page === 1}
          className={`px-3 py-1 rounded ${page === 1 ? "text-gray-400" : "text-[#a084ee]"}`}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        {Array.from({ length: pageCount }).map((_, i) => (
          <button
            key={i}
            className={`rounded px-3 py-1 text-sm ${page === i + 1
              ? "bg-[#a084ee] text-white"
              : "text-[#a084ee] bg-[#F6F2FF]"
              }`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={page === pageCount}
          className={`px-3 py-1 rounded ${page === pageCount ? "text-gray-400" : "text-[#a084ee]"}`}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

