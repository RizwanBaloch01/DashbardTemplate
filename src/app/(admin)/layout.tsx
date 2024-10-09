'use client';
import { useState } from 'react';
import SideBar from '@/app/(admin)/dashboard/components/SideBar'; // Adjust the path based on where the sidebar is located
import TopBar from '@/app/(admin)/dashboard/components/TopBar';   // Add your Topbar component here

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <TopBar toggleSidebar={toggleSidebar} />

        {/* Main content */}
        <main className="flex-1 p-4 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;