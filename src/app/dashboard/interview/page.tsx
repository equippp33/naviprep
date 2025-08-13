"use client";

import React, { useState } from "react";
import Sidebar from "../../_components/Dashboard/Sidebar";
import Interviewgrid from "../../_components/interviews/Interviewgrid";

const Page = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("dashboard");
  return (
    <div>
      <div className="flex min-h-screen bg-gray-50">
        

        {/* Main Content */}
        <div className="p-10 mx-auto">
          <Interviewgrid />
        </div>
      </div>
    </div>
  );
};

export default Page;
