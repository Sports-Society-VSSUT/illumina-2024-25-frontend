"use client";
import { useEffect, useState } from "react";
import CustomCard from "./fixture_card"; // Update the import path as needed
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stack from "@mui/material/Stack";
import cardsData from "@/lib/data/match_fixtures";
import { Container } from "@mui/material";

const CardContainer: React.FC = () => {
  const cardArray = Object.entries(cardsData);

  interface SliderSettings {

    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    centerMode: boolean;
    centerPadding: string;
    autoplay: boolean;
    autoplaySpeed: number;
  }
  
  const settings: SliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 5000,
  };
  
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 480);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container >
    <Box p={3} textAlign="center" sx={{mt:"50px"}}>
      {isMobile ? (
        <Stack sx={{ margin: "0 auto", marginTop: "50px", maxWidth: "200px" }}>
          <Slider {...settings}>
            {cardArray.map(([fixtureKey, data]) => (
              <div key={fixtureKey} style={{ margin: "0 10px" }}>
                <CustomCard team1={data.team1} team2={data.team2} time={data.time} venue={data.venue} sport={data.sport}/>
              </div>
            ))}
          </Slider>
        </Stack>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {cardArray.map(([fixtureKey, data]) => (
            <Grid item key={fixtureKey}>
              <CustomCard team1={data.team1} team2={data.team2}  time={data.time} venue={data.venue} sport={data.sport}/>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
    </Container>
  );
};

export default CardContainer;
