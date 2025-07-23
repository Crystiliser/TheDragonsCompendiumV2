import React from 'react';
import { ListItem } from '@mui/material';


export default function SideBarLink(props) {
  const {
    children,
    route,
    callback
  } = props;


  return (
    <ListItem to={route} onClick={callback}>
      {children}
    </ListItem>
  )
}