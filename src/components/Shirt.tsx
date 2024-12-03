import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import IlluminaShirt from '../../public/illumina2k25kitfinal.png';
import { Box, Container } from '@mui/material';

export default function Shirt() {
  return (
    <Box sx={{background:"linear-gradient(to right, #868f96 0%, #596164 100%)",width:"100%"}}>
    <Container maxWidth="lg" sx={{my:"48px",py:"48px"}}>

    <Box
    sx={{display:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:{xs:'column',sm:'row'}}}
    >
      <Box  sx={{width:'100%'}}>
        <Box sx={{display:'flex',flexDirection:{xs:'row',sm:'column'},gap:{xs:'24px',sm:'0px'},justifyContent:'center'}}>
        <Typography className='kit_theme' variant="h1" sx={{fontWeight:"bold"}}>GEAR</Typography>

        <Typography className='kit_theme' variant="h1" sx={{fontWeight:"bold"}}>UP FOR</Typography>
        </Box>
        <Typography className='kit_theme' variant="h1" sx={{fontWeight:"bold",textAlign:{xs:'center',sm:'left'}}}>GAMEDAY</Typography>
      </Box>
      <Box sx={{height:{xs:'400px',md:'auto'},width:{xs:'auto',md:'auto'}}}>
        <Image
          className='image'
          src={IlluminaShirt}
          alt='shirt'
          width={400}
          height={400}
          style={{
            // backgroundColor: "black",
            maxWidth: '100%',
            height:'100%',
            objectFit:'contain'
          }}
        />
      </Box>
    </Box>
    </Container>
    </Box>
  );
}
