'use client';

import  { useState } from "react";

const profiles = [
  { label: "Student", value: "student" },
  { label: "Engineer", value: "engineer" },
  { label: "Manager", value: "manager" },
  // Add more profiles as needed
];

export default function ProfileSelect() {
  // Start with an empty value so the placeholder shows initially
  const [selected, setSelected] = useState("");

  return (
    <div className="inline-block w-56">
      
      <select
        id="profile-select"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#a084ee] focus:border-[#a084ee] text-gray-700"
        value={selected}
        onChange={e => setSelected(e.target.value)}
      >
        <option value="" disabled hidden>
          Select Profile
        </option>
        {profiles.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
