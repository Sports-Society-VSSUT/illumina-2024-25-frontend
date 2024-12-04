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
      <Image src="/hero-1.JPG" alt="hero" width={1510} height={800} style={{ width: '100%', height: '100vh', objectFit: 'cover', opacity:"50%" }} />
      <Box sx={{width:"100%",height:"100%",inset:"0",position:"absolute", backgroundColor:"black",opacity:"0.3"}}>
      </Box>
      <Typography
        className='year'
        variant="h2"
        component="div"
        sx={{
          fontWeight: 'bold',
          position: 'absolute',
          color: 'white',
          textAlign: 'center',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: { xs: '24px', sm: '36px', md: '48px', lg: '60px' },
        }}
      >
        ILLUMINA 2024-25
      </Typography>
      <Typography
        component="div"
        sx={{
          position: 'absolute',
          color: 'white',
          textAlign: 'center',
          top: '57%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize:{xs:"15px", sm:"20px", md:"25px"},
          mt: { xs: '15px', md: '15px' }, // Add margin-top for responsive design
        }}
      >
        9th and 10th December, VSSUT, Burla
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          width:"100px",
          position: 'absolute',
          top: '65%', 
          left: '50%',
          transform: 'translate(-50%, -50%)',
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
    </Stack>
  );
}

export default Hero;
