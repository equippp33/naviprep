"use client";

import React, { useState } from "react";
import Sidebar from "../../_components/Dashboard/Sidebar";
import UserProfile from "../../_components/Dashboard/UserProfile";
import Header from "../../_components/stats/Header";
import Cards from "../../_components/stats/Cards";

const page = () => {
  return (
    <div>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        

        {/* Main Content */}
        <div className="px-3">
          <Header />
          <UserProfile />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default page;
