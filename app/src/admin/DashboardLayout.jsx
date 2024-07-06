import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 p-4 overflow-auto">
      <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
