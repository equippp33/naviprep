'use client';

import  { useState } from "react";

const domains = [
  { label: "Software", value: "software" },
  { label: "Hardware", value: "hardware" },
  // Add more domains as needed
];

export default function DomainSelect() {
  const [selected, setSelected] = useState("");

  return (
    <div className="inline-block w-56">
      
      <select
        id="domain-select"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#a084ee] focus:border-[#a084ee] text-gray-700"
        value={selected}
        onChange={e => setSelected(e.target.value)}
      >
        <option value="" disabled hidden>
          Select Domain
        </option>
        {domains.map(option => (
          <option  key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
