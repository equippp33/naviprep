'use client';

import React, { useState, forwardRef, type MouseEvent } from "react";
import DatePicker from "react-datepicker";
import { Calendar} from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";

// Define the props type for CustomInput
interface CustomInputProps {
  value?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
// Custom input for react-datepicker to match your button style
const CustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(
  ({ value, onClick }, ref) => (
    <button
      type="button"
      className="flex items-center justify-between border border-gray-300 rounded-xl px-4 py-3 w-56 text-gray-700 font-medium focus:ring-2 focus:ring-[#a084ee] focus:border-[#a084ee] shadow-sm"
      onClick={onClick}
      ref={ref}
    >
      <span className="select-none">
        {value && value !== "" ? value : "Select Date"}
      </span>
      <Calendar className="w-5 h-5 ml-2" />
    </button>
  )
);

// Set displayName for the component
CustomInput.displayName = "CustomInput";

export default function DateSelection() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        customInput={<CustomInput />}
        dateFormat="MM/dd/yyyy"
      />
    </div>
  );
}