"use client";
import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import HouseCard from "./HouseCard";
import axios from "axios";

interface MedalData {
  groupName: string;
  Gold: number;
  Silver: number;
  Bronze: number;
  goldCount: number;
  silverCount: number;
  bronzeCount: number;
}

function ScoreCard() {
  const [data, setData] = useState<MedalData[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = "https://illumina-backend.onrender.com/events/medal_data";
    axios
      .get<MedalData[]>(apiUrl)
      .then((response) => {
        const sortedData = response.data.sort((a, b) => {
          const aPoints = a.goldCount * 3 + a.silverCount * 2 + a.bronzeCount * 1;
          const bPoints = b.goldCount * 3 + b.silverCount * 2 + b.bronzeCount * 1;
          return bPoints - aPoints;
        });

        const slicedData = sortedData.slice(0, 4);

        setData(slicedData);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  const getBackgroundColor = (groupName: string) => {
    switch (groupName) {
      case "maitri":
        return "rgba(239,167,53,255)";
      case "pragati":
        return "rgba(7,147,76,255)";
      case "shanti":
        return "rgba(13,122,187,255)";
      case "shakti":
        return "rgba(220,57,82,255)";
      default:
        return "yellow";
    }
  };

  return (
    <Container maxWidth="lg" sx={{paddingX:{xs:"24px", sm:"auto"}}}>
      <Box className="medals_grid">
        {data?.map((item, index) => (
          <HouseCard
            key={index}
            houseName={item.groupName}
            Gold={item.goldCount}
            Silver={item.silverCount}
            Bronze={item.bronzeCount}
            back={getBackgroundColor(item.groupName)}
          />
        ))}
      </Box>
    </Container>
  );
}

export default ScoreCard;
