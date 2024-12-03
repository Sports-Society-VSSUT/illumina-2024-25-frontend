"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { ThemeProvider, createTheme } from "@mui/system";

const theme1 = createTheme({
  typography: {
    h5: {
      fontFamily: "monospace",
      fontWeight: "bold",
      fontSize: "1.5rem",
    },
  },
});

interface HouseCardProps {
  houseName: string;
  Gold: number;
  Silver: number;
  Bronze: number;
  back: string;
}

const HouseCard: React.FC<HouseCardProps> = ({
  houseName,
  Gold,
  Silver,
  Bronze,
  back,
}) => {
  const medals = [
    { type: "Gold", count: Gold, image: "/Gold.svg" },
    { type: "Silver", count: Silver, image: "/Silver.svg" },
    { type: "Bronze", count: Bronze, image: "/Bronze.svg" },
  ];

  const totalMedals = Gold + Silver + Bronze;

  return (
    <Card className="card" sx={{background:"linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%)"}}>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <ThemeProvider theme={theme1}>
          <Typography
            variant="h5"
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              backgroundColor: `${back}`,
              textTransform: "uppercase", // Change here to make letters capital
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {houseName}
          </Typography>
        </ThemeProvider>

        {/* Medals in the middle */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: {xs:"0px",md:"10px"},
            width: "100%",
            padding: { xs:"2px",sm: "5px", md: "16px" }, 
            mt:"16px",
            mb:"16px"
          }}
        >
          {medals.map((medal) => (
            <Box
              key={medal.type}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Image
                className="medal"
                src={medal.image}
                alt={medal.type}
                width={30}
                height={30}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                {medal.count}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Total Medals at the bottom */}
        <Stack sx={{ flexDirection: "row", justifyContent: "center" }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "600",
              display: "flex",
              flexDirection: "row",
              color: "orange",
            }}
          >
            TOTAL: {totalMedals}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default HouseCard;
