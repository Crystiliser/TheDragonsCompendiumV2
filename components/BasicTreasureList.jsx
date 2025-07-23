import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';


export default function BasicTreasureList(props) {
  const {
    treasures
  } = props;
  
  return (
    <ImageList 
      cols={3}
      rowHeight={164}
      sx={{
        width: 500,
        height: 450
      }}
    >
      {treasures.map(image => (
        <ImageListItem key={image.title}>
          <img
            src={image.image}
            alt={image.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}