import React from 'react';
import {
  AppBar,
  IconButton,
  Box,
  Typography,
  Toolbar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginNavBar from './LoginNavBar';


export default function NavBar(props) {
  const { drawerWidth, toggleSideBar } = props;
  
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar
        position="sticky"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSideBar}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            The Furry Compendium
          </Typography>
          <LoginNavBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}