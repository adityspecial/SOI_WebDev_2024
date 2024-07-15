import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Hidden } from '@mui/material';
import { Menu as MenuIcon, Dashboard as DashboardIcon, Upload as UploadIcon, ManageAccounts as ManageIcon, People as UsersIcon, Notifications as ReminderIcon, Login as SignInIcon, Logout as LogOutIcon, Help as HelpIcon } from '@mui/icons-material';

const SideBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className="flex items-center justify-center p-4">
        <img src="https://gitea.iitdh.ac.in/repo-avatars/27-dff6c2520e4e6c7c8feb5a3f9ba36b1f" alt="logo" className="h-12 w-12" />
        <Typography variant="h6" noWrap className="ml-2 text-white">
          LMS
        </Typography>
      </div>
      <Divider />
      <List>
        <ListItem button component={Link} to="/admin/dashboard">
          <ListItemIcon>
            <DashboardIcon className="text-black" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/admin/dashboard/upload">
          <ListItemIcon>
            <UploadIcon className="text-black" />
          </ListItemIcon>
          <ListItemText primary="Upload Books" />
        </ListItem>
        <ListItem button component={Link} to="/admin/dashboard/manage">
          <ListItemIcon>
            <ManageIcon className="text-black" />
          </ListItemIcon>
          <ListItemText primary="Manage Books" />
        </ListItem>
        <ListItem button component={Link} to="/admin/dashboard/users">
          <ListItemIcon>
            <UsersIcon className="text-black" />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/admin/dashboard/reminder">
          <ListItemIcon>
            <ReminderIcon className="text-black" />
          </ListItemIcon>
          <ListItemText primary="Reminder" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <LogOutIcon className="text-black" />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItem>
        <ListItem button component={Link} to="#">
          <ListItemIcon>
            <HelpIcon className="text-black" />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="fixed" className="bg-sidebar-blue">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          classes={{
            paper: 'bg-sidebar-blue text-black',
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
};

export default SideBar;
