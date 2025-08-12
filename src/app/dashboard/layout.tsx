// app/dashboard/layout.tsx
import React from "react";
import Sidebar from '../_components/Dashboard/Sidebar'; // Adjust path if needed

// layout must accept and render {children}
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
