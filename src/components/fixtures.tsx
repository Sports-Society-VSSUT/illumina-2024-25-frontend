"use client";
import React, { useState } from "react";
import { Container, Box, Stack, Tabs, Tab, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomCard from "./fixture_card"; // Update the import path as needed
import {
  footballFixtureData,
  basketballFixtureData,
  cricketFixtureData,
  kabaddiFixtureData,
  badmintonFixtureData,
  khokhoFixtureData,
} from "@/lib/data/match_fixtures";

const fixtureData = {
  Football: footballFixtureData,
  Basketball: basketballFixtureData,
  Cricket: cricketFixtureData,
  Kabaddi: kabaddiFixtureData,
  Badminton: badmintonFixtureData,
  KhoKho: khokhoFixtureData,
};

const CardContainer: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState<keyof typeof fixtureData>(
    "Football"
  );

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedSport(newValue as keyof typeof fixtureData);
  };

  const cardArray = Object.entries(fixtureData[selectedSport]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 1124, settings: { slidesToShow: 4 } },
      { breakpoint: 930, settings: { slidesToShow: 3 } },
      { breakpoint: 720, settings: { slidesToShow: 2 } },
      { breakpoint: 490, settings: { slidesToShow: 1 } },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Container maxWidth="lg">
      <Box>
      <Tabs
          value={selectedSport}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          indicatorColor="primary"
          textColor="primary"
        >

          {Object.keys(fixtureData).map((sport) => (
            <Tab key={sport} label={sport} value={sport} />
          ))}
        </Tabs>
      </Box>

      <Box p={3} textAlign="center" sx={{ mt: "20px" }}>
        <Stack sx={{ margin: "0 auto", maxWidth: "100%" }}>
          <Slider {...settings}>
            {cardArray.map(([fixtureKey, data]) => (
              <div
                key={fixtureKey}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CustomCard
                  team1={data.team1}
                  team2={data.team2}
                  time={data.time}
                  venue={data.venue}
                  sport={data.sport}
                />
              </div>
            ))}
          </Slider>
        </Stack>
      </Box>
    </Container>
  );
};

export default CardContainer;
function SampleNextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray",borderRadius:"16px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray",borderRadius:"16px"}}
      onClick={onClick}
    />
  );
}