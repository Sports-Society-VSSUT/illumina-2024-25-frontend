import React from 'react'
import Grid from '@mui/material/Grid';
import HouseCard from './HouseCard';

function ScoreCard() {
  return (
    <div>
       <Grid container spacing={2}>
         <Grid item xs={6} sm={6} md={3}>
           <HouseCard houseName="maitri " gold={5} silver={3} bronze={2} />
         </Grid>
         <Grid item xs={6} sm={6} md={3}>
           <HouseCard houseName="shakti" gold={3} silver={2} bronze={4} />
         </Grid>
         <Grid item xs={6} sm={6} md={3}>
           <HouseCard houseName="pragati " gold={2} silver={4} bronze={1} />
         </Grid>
         <Grid item xs={6} sm={6} md={3}>
           <HouseCard houseName="shanti " gold={2} silver={3} bronze={1} />
         </Grid>
       </Grid>
     </div>
  )
}

export default ScoreCard
