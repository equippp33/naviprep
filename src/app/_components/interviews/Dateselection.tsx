import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { Calendar } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";

// Custom input for react-datepicker to match your button style
const CustomInput = forwardRef<HTMLButtonElement, any>(
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

export default function Dateselection() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        customInput={<CustomInput />}
        dateFormat="MM/dd/yyyy"
      />
    </div>
  );
}
