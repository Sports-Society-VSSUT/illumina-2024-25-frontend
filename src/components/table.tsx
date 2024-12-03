import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  useTheme,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

const theme1 = createTheme({
  typography: {
    body1: {
      fontFamily: "monospace",
      fontWeight: "bold",
    },
    h5:{
      fontFamily: "monospace",
      fontWeight: "bold",
    }
  },
});
interface TableComponentProps {
  eventData: Array<{ time: string; event: string }>;
  day: string;
}

const TableComponent: React.FC<TableComponentProps> = ({ eventData, day }) => {
  const theme = useTheme();

  return (
    <Table
      className="table"
      sx={{
        width: "100%",
      }}
    >
        <TableBody>
          <TableRow>
            <TableCell
              style={{
                border: "1px solid black",
                padding: "8px",
                textAlign: "center",
                height: "80px",
                width: "10%",
                overflow: "hidden",
                maxHeight: "100px",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                fontWeight: "1000",
                fontSize: "2rem",
                color: "black",
              }}
              rowSpan={11}
            >
              <Typography variant="h5">
              {day}
              </Typography>
            </TableCell>

            <TableCell
              style={{
                border: "1px solid black",
                padding: "8px",
                textAlign: "center",
                height: "80px",
                fontWeight: "1000",
                fontSize: "2rem",
                color: "black",
              }}
            >
              Time
            </TableCell>

          <TableCell
            style={{
              border: "1px solid black",
              padding: "8px",
              textAlign: "center",
              height: "80px",
              fontWeight: "1000",
              fontSize: "2rem",
              color:"black"
            }}
          >
            Event
          </TableCell>
        </TableRow>
        {eventData.map((data, index) => (
          <TableRow key={index}>
            <TableCell
              style={{
                border: "1px solid black",
                padding: "8px",
                textAlign: "center",
                height: "80px",
                width: "25%",
                fontSize: "1rem",
                color:"black"
              }}
            >
              {data.time}
            </TableCell>
            <TableCell
              style={{
                border:"1px solid black",
                padding: "8px",
                textAlign: "center",
                height: "80px",
                width: "50%",
                fontSize: "1rem",
                color:"black"
              }}
            >
              {data.event}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
