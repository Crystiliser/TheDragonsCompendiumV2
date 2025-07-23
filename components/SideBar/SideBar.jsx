import React from 'react';
import { Drawer, List } from '@mui/material';
import SideBarLink from './SideBarLinkProps';


export default function SideBar(props) {
  const {
    width,
    open,
    toggleSideBar
  } = props;


  return (
    <Drawer
      anchor="left"
      variant="persistent"
      open={open}
      onClose={toggleSideBar}
      sx={{ 
        width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width,
          boxSizing: 'border-box'
        }
      }}
    >
      <List>
        <SideBarLink route="/" callback={toggleSideBar}>
          Home
        </SideBarLink>
        {true ? ( // TODO Replace with actual authentication check
          <SideBarLink route="/login" callback={toggleSideBar}>
            Login
          </SideBarLink>
        ) : (
          <SideBarLink route="/user" callback={toggleSideBar}>
            Profile
          </SideBarLink>
        )}
        <SideBarLink route="/about" callback={toggleSideBar}>
          About
        </SideBarLink>
      </List>
    </Drawer>
  );
}
