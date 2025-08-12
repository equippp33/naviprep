"use client";

import React, { useState } from "react";
import Sidebar from "../_components/Dashboard/Sidebar";
import Dashboard from "../_components/Dashboard/Dashboard";

const page = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("dashboard");
  return (
    <div>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        
        <Dashboard/>
      </div>

    </div>
  );
};

export default page;
