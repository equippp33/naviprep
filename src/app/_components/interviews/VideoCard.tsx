'useclient';


import { CalendarHeart, Clock, PlayCircle } from "lucide-react";

interface VideoCardProps {
  role: string;
  date: string;
  duration: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ role, date, duration }) => (
  <div className="rounded-xl  bg-white shadow hover:shadow-lg transition flex flex-col items-center p-5">
    <div className="relative w-full aspect-video bg-gray-100 flex items-center justify-center rounded-lg mb-4">
      {/* Play overlay */}
      <PlayCircle className="w-12 h-12 text-gray-400 absolute inset-0 m-auto bg-white bg-opacity-70 rounded-full" />
      {/* Add video thumbnail here if available */}
    </div>
    <div className="w-full">
      <div className="font-semibold text-md">{role}</div>
      <div className="flex items-center gap-3 text-gray-500 text-sm mt-1">
        <span className="flex gap-2 items-center">
          <CalendarHeart/>
          {date}
        </span>
        <span className="flex gap-2 items-center">
          <Clock/>
          {duration}
        </span>
      </div>
    </div>
  </div>
);

export default VideoCard;
