import React, { useState } from 'react';
import {
  Drawer,
  Box,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Dashboard from './Dashboard';
import ChangePassword from './ChangePassword';
import IssuedBooks from './IssuedBooks';
import SubmitBookRequest from './SubmitBookRequest';
import EditProfile from './EditProfile';

const drawerWidth = 240;

const UserPanelNav = ({ toggleDrawer, handleListItemClick }) => (
  <Box
    sx={{ width: { xs: 200, sm: drawerWidth } }}
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
  >
    <List>
      {[
        { text: 'Dashboard', path: '/' },
        { text: 'Edit Profile', path: '/edit-profile' },
        { text: 'Change Password', path: '/change-password' },
        { text: 'View Issued Books', path: '/view-issued-books' },
        { text: 'Submit Book Request', path: '/submit-book-request' },
        { text: 'About Software', path: '/about-software' },
      ].map((item) => (
        <ListItem button key={item.text} onClick={() => handleListItemClick(item.text)}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  </Box>
);

const UserPanel = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('Dashboard');

  const handleListItemClick = (section) => {
    setSelectedSection(section);
    setDrawerOpen(false); // Close the drawer after selection
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div className="user-panel">
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 2 }}>
            User Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { xs: 200, sm: drawerWidth } },
        }}
      >
        <UserPanelNav toggleDrawer={toggleDrawer} handleListItemClick={handleListItemClick} />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: { xs: 7, sm: 8 }, // Adjust margin top for AppBar height
        }}
      >
        <Toolbar />
        {selectedSection === 'Dashboard' && <Dashboard />}
        {selectedSection === 'Edit Profile' && <EditProfile />}
        {selectedSection === 'Change Password' && <ChangePassword />}
        {selectedSection === 'View Issued Books' && <IssuedBooks />}
        {selectedSection === 'Submit Book Request' && <SubmitBookRequest />}
        {selectedSection === 'About Software' && (
          <Box sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
              About Our Library Management System
            </Typography>
            <Typography variant="body1" paragraph>
              Our Library Management System (LMS) is a comprehensive solution designed to manage and
              streamline library operations efficiently. With this system, administrators can easily add,
              remove, and manage books in the library. Users can view available books, track their issued books,
              and submit book requests.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Key Features:
            </Typography>
            <ul>
              <li>Efficient book management for administrators</li>
              <li>User-friendly interface for viewing and managing issued books</li>
              <li>Secure authentication and authorization mechanisms</li>
              <li>Automated reminders for due books</li>
              <li>Responsive design for seamless use across devices</li>
            </ul>
            <Typography variant="body1">
              Our LMS aims to provide a modern, intuitive, and efficient way to manage library operations,
              ensuring a seamless experience for both administrators and users.
            </Typography>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default UserPanel;
