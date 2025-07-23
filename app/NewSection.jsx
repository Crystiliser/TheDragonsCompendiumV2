import React from 'react';
import { Paper, Typography } from '@mui/material';
import BasicTreasureList from '../components/BasicTreasureList';


export default function NewSection() {
  const treasures = [{
    title: 'Treasure 1',
    image: 'https://example.com/treasure1.jpg'
  }, {
    title: 'Treasure 2',
    image: 'https://example.com/treasure2.jpg'
  }, {
    title: 'Treasure 3',
    image: 'https://example.com/treasure3.jpg'
  }];

  return (
    <div>
      <Typography variant='h5'>
        New Content
      </Typography>
      <Paper elevation={3}>
        <BasicTreasureList treasures={treasures}/>
      </Paper>
    </div>
  );
}