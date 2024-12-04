import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';


type HeroProps = {
  explore: () => void;
};

function Hero({explore}:HeroProps) {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const eventDate = new Date('2024-12-09T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = eventDate.getTime() - now.getTime();

      if (timeDifference <= 0) {
        setCountdown('The event is happening today!');
        clearInterval(interval);
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        setCountdown(days >=1 ? 'Game Day' : `${days} days to go`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Stack position="relative" minHeight="100vh" display="flex" alignItems="center" justifyContent="center" sx={{ marginTop: '-64px', bgcolor:"black" }}>
      <Image src="/hero-1.JPG" alt="hero" width={1510} height={800} style={{ width: '100%', height: '100vh', objectFit: 'cover', opacity:"50%", position:"absolute",zIndex:"0" }} />
      <Box sx={{width:"100%",height:"100%",inset:"0",position:"absolute", backgroundColor:"black",opacity:"0.3",zIndex:"3"}}>
      </Box>
      <Box sx={{zIndex:"10", color:"white", textAlign:"center"}}>

      <Typography   variant="h1" sx={{ fontWeight: "bold", fontSize:{xs:"48px",sm:"64px",md:"86px"} }}>
              ILLUMINA
      </Typography>
      
      <Typography   variant="h1" sx={{ fontWeight: "bold", fontSize:{xs:"48px",sm:"64px",md:"86px"} }}>
              2024-25
      </Typography>
      <Typography   variant="h5" sx={{ fontWeight: "bold" }}>
              9th and 10th DECEMBER
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: 'orange',
          color: 'black',
          fontWeight: 'bold',
          border: "2px solid black",
          mt: { xs: '30px', md: '30px' }, 
        }}
        onClick={explore}
      >
        EXPLORE
      </Button>
      </Box>
    </Stack>
  );
}

export default Hero;
