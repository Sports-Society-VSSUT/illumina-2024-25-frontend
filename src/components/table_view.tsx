"use client";
import { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Box,
  Stack,
  Container as MuiContainer,
} from "@mui/material";
import { styled } from "@mui/system";
import TableComponent from "./table";
import eventData from "@/lib/data/table1";
import eventData2 from "@/lib/data/table2";

// Styled Container for Coming Soon Section
const ComingSoonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  borderRadius:"8px",
  backgroundColor:"#f7f7f7",
  padding:"32px"
}));

const MainText = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "bold",
}));

const SubText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: "1.25rem",
  opacity: 0.85,
}));


// Coming Soon Component
const ComingSoonEvent = () => {
  return (
    <ComingSoonContainer>
      <MainText>Coming Soon</MainText>
      <SubText>The Event Schedule will be unveiled shortly. Stay tuned!</SubText>
    </ComingSoonContainer>
  );
};

// Event Table Component
const EventTable = () => {
  const [isFlexRow, setIsFlexRow] = useState<boolean>(false);
  const [scheduleAvailable, setScheduleAvailable] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsFlexRow(screenWidth > 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MuiContainer maxWidth="lg" sx={{ my: { xs: "64px", sm: "72px" } }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mb: "32px",
          fontSize: { xs: "32px", sm: "56px" },
          fontWeight: "bold",
        }}
      >
        EVENT SCHEDULE
      </Typography>

      {scheduleAvailable ? (
        <Stack
          direction={isFlexRow ? "row" : "column"}
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          <TableComponent day="Day 1" eventData={eventData} />
          <TableComponent day="Day 2" eventData={eventData2} />
        </Stack>
      ) : (
        <ComingSoonEvent />
      )}
    </MuiContainer>
  );
};

export default EventTable;
