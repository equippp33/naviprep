'use client';

import React from "react";
import { TrendingUp, CheckSquare,  Grid3x3, Settings, Bell, LogOutIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type MenuItem = {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  route: string;
};

type Setting = {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  route: string;
};

const menuItems: MenuItem[] = [
  { id: "dashboard", label: "Dashboard", icon: Grid3x3, route: "/dashboard" },
  {
    id: "interview",
    label: "Interview",
    icon: TrendingUp,
    route: "/dashboard/interview",
  },
  { id: "stats", label: "My Stats", icon: CheckSquare, route: "/dashboard/mystats" },
];

const setting:Setting[]=[
  {id:"account",label: "Account Settings", icon: Settings, route: "/dashboard/accountsettings"},
  {id:"notification",label: "Notification preferences", icon: Bell, route: "/dashboard/notificationpreferences"},
];

const Sidebar: React.FC = () => {
  const currentPath = usePathname();
  const router = useRouter();

  return (
    <div className="flex min-h-screen w-64 flex-col bg-gray-900  text-white">
      <div className=" w-45">
          <img src="/navipreplogo.svg" alt="" className="" />
        </div>
      <div className="border-b border-gray-500 p-3">
        {/* ...logo area... */}
        
        <div className="mb-8">
          <h3 className="mb-4 text-sm font-medium text-gray-400">Main menu</h3>
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.route;
              return (
                <button
                  key={item.id}
                  onClick={() => router.push(item.route)}
                  className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-colors ${
                    isActive
                      ? "border-l-4 border-blue-500 bg-white text-gray-900"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
      <div className="border-b border-gray-500 p-3">
            <div className="my-8">
          <h3 className="mb-4 text-sm font-medium text-gray-400">Settings</h3>
          <nav className="space-y-2">
            {setting.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.route;
              return (
                <button
                  key={item.id}
                  onClick={() => router.push(item.route)}
                  className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-colors ${
                    isActive
                      ? "border-l-4 border-blue-500 bg-white text-gray-900"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
      <div className="flex items-center p-3 gap-3">
        <LogOutIcon />
        <p>
          Logout
        </p>
      </div>
      {/* ...rest unchanged... */}
    </div>
  );
};

export default Sidebar;
