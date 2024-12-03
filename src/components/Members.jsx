"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Container, Card, CardContent, CardHeader } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import memberData from "@/lib/data/memberData";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E3A8A", // Blue tint
    },
    secondary: {
      main: "#64748B", // Gray tint
    },
  },
  typography: {
    fontFamily: "Monospace",
    fontWeightBold: "bolder",
  },
});

function MemberCard({ member }) {
  return (
    <Card
      sx={{
        bgcolor: "secondary.main",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "primary.main",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column", // Arrange items in a column
        alignItems: "center", // Center items horizontally
        padding: "20px",
        mb: "20px",
      }}
    >
      <Avatar
        alt={member.name}
        src={member.img || `/default-avatar.png`} // Use member-specific image or a default placeholder
        sx={{ width: 100, height: 100, mb: 2 }} // Add margin-bottom for spacing
      />
      <CardContent sx={{ textAlign: "center", padding: "0" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "white", mb: "5px" }}
        >
          {member.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          {member.role}
        </Typography>
      </CardContent>
    </Card>
  );
}


function Members() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Stack
          sx={{
            gap: "20px",
            padding: "20px",
            mt: "50px",
            mb: "25px",
            overflowX: "hidden",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            ADMINISTRATION
          </Typography>

          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: "10px", md: "15px" },
            }}
          >
            {memberData.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </Stack>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default Members;
