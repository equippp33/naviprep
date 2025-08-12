"use client";

import React, { useState } from "react";
import Sidebar from "../../_components/Dashboard/Sidebar";
import NotificationPreferences from "~/app/_components/notificationpreferences/NotificationPreferences";
import NotificationHeader from "~/app/_components/notificationpreferences/NotificationHeader";

const page = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("dashboard");
  return (
    <div>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        
        {/* Main Content */}
        <div className="w-full p-3">
          <NotificationHeader />
          <NotificationPreferences />
        </div>
      </div>
    </div>
  );
};

export default page;
