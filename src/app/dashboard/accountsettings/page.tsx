"use client";

import React, { useState } from "react";
import Sidebar from "../../_components/Dashboard/Sidebar";
import Interviewgrid from "../../_components/interviews/Interviewgrid";

const Page = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("dashboard");
  return (
    <div>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        {/* <Sidebar activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} /> */}

        {/* Main Content */}
        {/* <Interviewgrid /> */}
      </div>
    </div>
  );
};

export default Page;