"use client";
import React from "react";

interface GaugeMeterProps {
  value: number; // 0 to 100
  label?: string;
  size?: number; // base size multiplier
}

const GaugeMeter: React.FC<GaugeMeterProps> = ({ value, label = "Progress", size = 1 }) => {
  const radius = 60 * size;
  const stroke = 12 * size;
  const circumference = Math.PI * radius;

  const normalizedValue = Math.min(100, Math.max(0, value));
  const dashOffset = circumference - (normalizedValue / 100) * circumference;

  const svgWidth = 160 * size;
  const svgHeight = 90 * size;

  return (
    <div className="flex flex-col items-center">
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="overflow-visible"
      >
        {/* Background arc */}
        <path
          d={`M${20 * size} ${80 * size} A${60 * size} ${60 * size} 0 0 1 ${140 * size} ${80 * size}`}
          fill="transparent"
          stroke="#e5e7eb"
          strokeWidth={stroke}
        />

        {/* Foreground arc */}
        <path
          d={`M${20 * size} ${80 * size} A${60 * size} ${60 * size} 0 0 1 ${140 * size} ${80 * size}`}
          fill="transparent"
          stroke="#7F00FF"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />

        {/* Center Text */}
        <text
          x={svgWidth / 2}
          y={85 * size}
          textAnchor="middle"
          fontSize={18 * size}
          fill="#7F00FF"
        >
          {value}%
        </text>
      </svg>
      <p className="text-sm text-gray-500 mt-2">{label}</p>
    </div>
  );
};

export default GaugeMeter;
