"use client";

import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  CircularProgress,
  ThemeProvider,
  createTheme,
  Paper,
  Divider,
} from "@mui/material";
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material"; // Import icons

const titleTheme = createTheme({
  typography: {
    h5: {
      fontFamily: "Roboto Condensed, sans-serif",
      fontWeight: "bold",
      color: "#ffffff",
    },
  },
});

const scoreTheme = createTheme({
  typography: {
    body1: {
      fontFamily: "monospace",
      fontWeight: "bold",
      color: "#ffffff",
    },
  },
});

interface ScoreData {
  gameId: string;
  scores: {
    teamA: string;
    teamB: string;
  };
  teams: {
    t1: string;
    t2: string;
  };
}

interface LiveSportProps {
  sport: string;
  game: string;
  title: string;
}

const LiveSport: React.FC<LiveSportProps> = ({ sport, game, title }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [scoreData, setScoreData] = useState<ScoreData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newSocket = io("https://illumina-backend.onrender.com");
    setSocket(newSocket);

    const scoreUpdateEvent = `scoreUpdated${sport}`;

    newSocket.on(scoreUpdateEvent, (data: ScoreData) => {
      console.log("Received score update:", data);
      setScoreData(data);
    });

    return () => {
      newSocket.off(scoreUpdateEvent);
      newSocket.disconnect();
    };
  }, [sport]);

  useEffect(() => {
    if (!scoreData) fetchStoredScoreData();
  }, [scoreData, sport]);

  const fetchStoredScoreData = async () => {
    try {
      const response = await fetch(
        `https://illumina-backend.onrender.com/getStoredData${sport}`
      );

      if (!response.ok) throw new Error("Failed to fetch data");

      const data: ScoreData[] = await response.json();
      if (data.length > 0) setScoreData(data[data.length - 1]);
    } catch (error) {
      console.error("Error fetching stored data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      sx={{
        background: "linear-gradient(135deg, #1a237e, #3949ab)",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 3,
        overflow: "hidden",
      }}
      elevation={5}
    >
      <CardContent>
        <ThemeProvider theme={titleTheme}>
          <Typography variant="h5" align="center" gutterBottom>
            {title}
          </Typography>
        </ThemeProvider>
        <Divider
          sx={{
            backgroundColor: "#ffffff",
            opacity: 0.8,
            marginY: 1,
          }}
        />
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
            }}
          >
            <CircularProgress sx={{ color: "#ffffff" }} />
          </Box>
        ) : (
          <ThemeProvider theme={scoreTheme}>
            <Paper
              elevation={3}
              sx={{
                padding: 2,
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: 2,
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={4}
              >
                <Box sx={{display:"flex", gap:"8px", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <Typography variant="body1">
                  {scoreData?.gameId === game ? scoreData.teams.t1 : "Team A"}
                </Typography>
                <Typography variant="body1" >
                {scoreData?.scores.teamA}

                </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1.5rem",
                    color: "#ffeb3b",
                    textShadow: "0px 0px 10px rgba(255, 235, 59, 0.8)",
                  }}
                >
                  {scoreData?.gameId === game ? (
                    <>
                      <RadioButtonChecked
                        sx={{ fontSize: "2rem", marginRight: 1, color:"red" }}
                      />
                    </>
                  ) : (
                    <RadioButtonUnchecked sx={{ fontSize: "2rem", color:"red" }} />
                  )}
                </Box>
                <Box sx={{display:"flex", gap:"8px", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <Typography variant="body1" >
                  {scoreData?.gameId === game ? scoreData.teams.t2 : "Team B"}
                </Typography>
                <Typography variant="body1" >
                {scoreData?.scores.teamB}

                </Typography>
                </Box>
              </Stack>
            </Paper>
          </ThemeProvider>
        )}
      </CardContent>
    </Card>
  );
};

export default LiveSport;
