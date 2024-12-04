"use client"
import React, { useEffect, useState } from 'react';
import Fab from '@mui/material/Fab';
import { Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const threshold = 300;

    setIsVisible(scrollTop > threshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
     window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fab
      className='btn'
      aria-label="Back to top"
      onClick={scrollToTop}
      style={{ position: 'fixed', bottom: 30, right: 16, width:"40px",alignContent:"center", height:"40px", display: isVisible ? 'block' : 'none' }}
    >
      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>

      <KeyboardArrowUpIcon/>
      </Box>
    </Fab>
  );
};

export default BackToTopButton;
