import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example" className="h-screen sticky top-0 bg-sidebar-blue text-white">
      <Sidebar.Logo href="/admin/dashboard" img="https://gitea.iitdh.ac.in/repo-avatars/27-dff6c2520e4e6c7c8feb5a3f9ba36b1f" imgAlt="logo" className='flex pl-4 pt-4'>
        <p className='font-semibold text-white mx-2'>LMS</p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item as={Link} to="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item as={Link} to="/admin/dashboard/upload" icon={HiViewBoards}>
            Upload Books
          </Sidebar.Item>
          <Sidebar.Item as={Link} to="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item as={Link} to="/admin/dashboard/users" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item as={Link} to="/admin/dashboard/" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item as={Link} to="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item as={Link} to="#" icon={HiTable}>
            Log Out
          </Sidebar.Item>
          <Sidebar.Item as={Link} to="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SideBar;
