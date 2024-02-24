// import { Link } from 'react-router-dom';

// const Adminsidebar = () => {
//   const sidebarStyle = {
//     width: '250px',
//     height: '100%',
//     backgroundColor: '#333',
//     color: '#fff',
//     padding: '20px',
//     boxSizing: 'border-box'
//   };

//   const linkStyle = {
//     color: '#fff',
//     textDecoration: 'none'
//   };

//   const listStyle = {
//     listStyleType: 'none',
//     padding: 0,
//     margin: 0
//   };

//   const listItemStyle = {
//     marginBottom: '10px'
//   };

//   return (
//     <div style={sidebarStyle}>
//       <h2>Sidebar</h2>
//       <ul style={listStyle}>
//         <li style={listItemStyle}>
//           <Link to="/" style={linkStyle}>Home</Link>
//         </li>
//         <li style={listItemStyle}>
//           <Link to="/about" style={linkStyle}>About</Link>
//         </li>
//         <li style={listItemStyle}>
//           <Link to="/services" style={linkStyle}>Services</Link>
//         </li>
//         <li style={listItemStyle}>
//           <Link to="/contact" style={linkStyle}>Contact</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Adminsidebar;
// import React, { useState } from 'react';
// // import "../assets/css/Adminsidebar.css";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={isOpen ? 'sidebar open' : 'sidebar'}>
//       {/* Sidebar content */}
//       <div className="sidebar-content">
//         {/* Sidebar header */}
//         <div className="sidebar-header">
//           <h2>Sidebar</h2>
//           {/* Sidebar toggle button */}
//           <button onClick={toggleSidebar} className="toggle-btn">
//             {isOpen ? 'Close' : 'Open'}
//           </button>
//         </div>

//         {/* Sidebar menu */}
//         <nav className="sidebar-menu">
//           <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Services</a></li>
//             <li><a href="#">Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import { Avatar, Button, List, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import {  Create, FeedbackOutlined } from '@mui/icons-material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'black', // Change background color to black
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Adminsidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfileClick = () => {
    history.push('/profile'); // Assuming '/profile' is the path to the profile page
    handleClose();
  };
  const handleLogoutClick = () => {
    history.push('/landing'); // Assuming '/profile' is the path to the profile page
    handleClose();
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none', }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <div>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={anchorEl ? 'true' : undefined}
              onClick={handleClick}
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              getContentAnchorEl={null}
            >
              <MenuItem component={Link} to="/Adminprofile" onClick={handleProfileClick}>
                Profile
              </MenuItem>
              <MenuItem component={Link} to="/" onClick={handleLogoutClick }>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          bgcolor: 'rgba(255, 229, 197, 0.8)', // Set the background color to light pink
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemButton component={Link} to="/Viewbooking">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="VIEW BOOKING" />
          </ListItemButton>
          <ListItemButton component={Link} to="/Viewfeed"> {/* Updated link */}
            <ListItemIcon>
              <FeedbackOutlined/>
            </ListItemIcon>
            <ListItemText primary="VIEW FEEDBACK" /> {/* Updated text */}
          </ListItemButton>
          <ListItemButton component={Link} to="/Addservice">
            <ListItemIcon>
              <Create/>
            </ListItemIcon>
            <ListItemText primary="ADD SERVICES" />
          </ListItemButton>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}



