import React from "react";
import LiveSport from "./livesport";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const LiveFeed = () => {
  return (
<Container maxWidth="lg" sx={{my: {xs:"64px",sm:"72px"},}}>
<Typography variant="h3" sx={{textAlign:"center",mb:"32px",fontSize:{xs:"32px",sm:"56px"},fontWeight:"bold"}}>LIVE SCORES</Typography>
  <Grid 
    sx={{ 
      display: "grid", 
      gridTemplateColumns: {xs:"repeat(1, 1fr)", sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"}, // Defines 4 equal columns
      gap: {xs:"16px", md:"24px"}
    }}
  >
    <LiveSport title={"Football Live"} game={"football"} sport={"football"} />
    <LiveSport title={"Volley Ball Live"} game={"volleyball"} sport={"volleyball"} />
    <LiveSport title={"Cricket Live"} game={"cricket"} sport={"cricket"} />
    <LiveSport title={"Kho Kho Live"} game={"khokho"} sport={"khokho"} />
    <LiveSport title={"Kabbadi Live"} game={"kabbadi"} sport={"kabbadi"} />
    <LiveSport title={"Badminton Live"} game={"badminton"} sport={"badminton"} />
  </Grid>
</Container>

  );
};

export default LiveFeed;
