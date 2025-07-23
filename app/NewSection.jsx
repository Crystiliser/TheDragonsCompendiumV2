'use client';
import React from 'react';
import { Paper, Typography } from '@mui/material';
import BasicTreasureList from '../components/BasicTreasureList';


export default function NewSection() {
  const [movies, setMovies] = React.useState([]);

  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/.netlify/functions/get_movies');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data.map(movie => ({
          id: movie._id,
          title: movie.title,
          image: movie.poster || 'https://via.placeholder.com/150'
        })));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <Typography variant='h5'>
        New Content
      </Typography>
      <Paper elevation={3}>
        <BasicTreasureList treasures={movies}/>
      </Paper>
    </div>
  );
}