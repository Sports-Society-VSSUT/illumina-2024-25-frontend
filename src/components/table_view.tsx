"use client";
import {useEffect,useState} from "react";
import {
    Table,
    TableBody,
    TableRow,
    TableCell,
    Stack,
    TableContainer,
    Typography,
    Container,
  } from "@mui/material";
import TableComponent from "./table";
import eventData from "@/lib/data/table1";
import eventData2 from "@/lib/data/table2";

const EventTable = () => {
    const [isFlexRow, setIsFlexRow] = useState<boolean>(false);
  
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
      <Container maxWidth="lg" sx={{my: {xs:"64px",sm:"72px"},}}>
        <Typography variant="h3" sx={{textAlign:"left",mb:"16px",fontSize:{xs:"32px",sm:"56px"}}}>EVENT SCHEDULE</Typography>
        <Stack
          direction={isFlexRow ? "row" : "column"}
          spacing={4}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <TableComponent day={"Day1"} eventData={eventData}  />
          <TableComponent day={"Day2"} eventData={eventData2} />
        </Stack>
      </Container>
    );
  };

  export default EventTable;