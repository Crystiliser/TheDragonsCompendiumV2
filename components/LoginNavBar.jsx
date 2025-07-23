import React from 'react';
import { Button } from '@mui/material';


export default function NavBar() {

  if (true) { // TODO Replace with actual authentication check
    return (
      <Button to="/login" variant="contained" size="large">
        Login or Create an Account
      </Button>
    );
  }
  return (
    <Button variant="contained" size="large">
      Logout
    </Button>
  );
}