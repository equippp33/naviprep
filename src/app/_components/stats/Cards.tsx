'useclient';
import React from 'react';
import RadarChart from './RadarChart';
import GaugeMeter from './GaugeMeter';

const Cards: React.FC = () => {
  const data = [4, 3, 5, 2, 4, 3, 5];
  
  
  const summaryPoints = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-5 bg-gradient-to-br from-purple-600 to-purple-50 rounded-2xl mb-3 ">
      {/* AI Video Score Card */}
      <div className="rounded-xl p-6 border  border-purple-200 bg-white">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">AI Video Score</h3>
        <p className="text-gray-600 text-sm mb-6">See the AI Video Score result</p>
        <RadarChart data={data} />
      </div>

      {/* Project Manager Score Card */}
      <div className="w-full h-full mx-auto rounded-2xl p-6 text-center bg-white">
      <h1 className="text-xl font-semibold">Project Manager score</h1>
      <p className="text-gray-500 mb-3">See the score in one sheet</p>
      
      <GaugeMeter value={72} size={2}  />
      <button className="mt-8 px-8 py-2 rounded-lg bg-[#edefff] text-[#a084ee] text-lg font-medium">
        Details
      </button>
    </div>

      {/* AI Summary Card */}
      <div className="rounded-xl p-6 border border-purple-200 bg-white ">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">AI Summary</h3>
        <p className="text-gray-600 text-sm mb-6">See the summary for the interview</p>
        
        <div className="space-y-4">
          {summaryPoints.map((point, index) => (
            <div key={index} className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
