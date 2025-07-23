'use client';
import React from 'react';
import { Box, Paper } from '@mui/material';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar/SideBar';


const MainBodyStyle = (activeDrawerWidth) => ({
  mt: '15px',
  ml: `${activeDrawerWidth + 10}px`,
  mr: '10px',
  height: '90vh'
});


const drawerWidth = 250;

const MainPaperStyle = {
  height: 1
};


export default function RootLayout({ children }) {
  const [ openDrawer, setOpenDrawer ] = React.useState(false);
  

  const activeDrawerWidth = openDrawer ? drawerWidth : 0;


  const toggleSideBar = () => {
    setOpenDrawer(!openDrawer);
  };


    return (
        <div>
            <NavBar drawerWidth={activeDrawerWidth} toggleSideBar={toggleSideBar}/>
            <SideBar width={drawerWidth} open={openDrawer} toggleSideBar={toggleSideBar}/>
            <Box
                component="div"
                sx={MainBodyStyle(activeDrawerWidth)}
            >
                <Paper sx={MainPaperStyle}>
                    {children}
                </Paper>
            </Box>
        </div>
    );
}
