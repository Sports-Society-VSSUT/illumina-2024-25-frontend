import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import IlluminaShirt from '../../public/illumina2k25kitfinal.png';
import { Box, Container } from '@mui/material';

export default function Shirt() {
  return (
<>
<Merch1/>
</>
  );
}


const Merch1 = () => {
  return (
    <Box
      sx={{
        position: "relative",
        background: "linear-gradient(to right, #868f96 0%, #596164 100%)",
        width: "100%",
      }}
    >
            <Box sx={{width:"100%",height:"100%",inset:"0",position:"absolute", backgroundColor:"black",opacity:"0.5",zIndex:"5"}}>
            </Box>
      {/* Background Image */}
      <Image
        src="/relaxed.jpg"
        width={900}
        height={400}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "0", // Ensure the background image is behind the container
          inset: "0",
          objectFit:"cover"
        }}
        alt="relaxed"
      />
      
      {/* Foreground Container */}
      <Container maxWidth="lg" sx={{ my: "48px", py: "48px", zIndex: "10", position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: 'column', sm: 'row' }
          }}
        >
          {/* Left Side - Desktop Only */}
          <Box sx={{ width: '100%', display: { xs: "none", md: "block" },color:"white" }}>
            <Typography className="kit_theme" variant="h1" sx={{ fontWeight: "bold" }}>
              GEAR UP
            </Typography>
            <Typography className="kit_theme" variant="h1" sx={{ fontWeight: "bold", textAlign: { xs: 'center', sm: 'left' } }}>
              FOR GAMEDAY
            </Typography>
          </Box>

          {/* Left Side - Mobile Only */}
          <Box sx={{ width: '100%', display: { xs: "block", md: "none" }, color:"white" }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'column' }, gap: { xs: '16px', sm: '0px' }, justifyContent: 'center' }}>
              <Typography className="kit_theme" variant="h1" sx={{ fontWeight: "bold" }}>
                GEAR
              </Typography>
              <Typography className="kit_theme" variant="h1" sx={{ fontWeight: "bold" }}>
                UP FOR
              </Typography>
            </Box>
            <Typography className="kit_theme" variant="h1" sx={{ fontWeight: "bold", textAlign: { xs: 'center', sm: 'left' } }}>
              GAMEDAY
            </Typography>
          </Box>

          {/* Right Side Image */}
          <Box sx={{ height: { xs: '400px', md: 'auto' }, width: { xs: 'auto', md: 'auto' } }}>
            <Image
              className="image"
              src={IlluminaShirt}
              alt="Illumina Shirt"
              width={400}
              height={400}
              style={{
                maxWidth: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// const Merch2=()=>{
//   return(
//     <Box sx={{background:"linear-gradient(to right, #868f96 0%, #596164 100%)",width:"100%",display:{xs:"block",sm:"hidden"}}}>
//     <Container maxWidth="lg" sx={{my:"48px",py:"48px"}}>

//     <Box
//     sx={{display:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:{xs:'column',sm:'row'}}}
//     >
//       <Box  sx={{width:'100%'}}>
//         <Box sx={{display:'flex',flexDirection:{xs:'row',sm:'column'},gap:{xs:'24px',sm:'0px'},justifyContent:'center'}}>
//         <Typography className='kit_theme' variant="h1" sx={{fontWeight:"bold"}}>GEAR</Typography>

//         <Typography className='kit_theme' variant="h1" sx={{fontWeight:"bold"}}>UP FOR</Typography>
//         </Box>
//         <Typography className='kit_theme' variant="h1" sx={{fontWeight:"bold",textAlign:{xs:'center',sm:'left'}}}>GAMEDAY</Typography>
//       </Box>
//       <Box sx={{height:{xs:'400px',md:'auto'},width:{xs:'auto',md:'auto'}}}>
//         <Image
//           className='image'
//           src={IlluminaShirt}
//           alt='shirt'
//           width={400}
//           height={400}
//           style={{
//             // backgroundColor: "black",
//             maxWidth: '100%',
//             height:'100%',
//             objectFit:'contain'
//           }}
//         />
//       </Box>
//     </Box>
//     </Container>
//     </Box>
//   )
// }