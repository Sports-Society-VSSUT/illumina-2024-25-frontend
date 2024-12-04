"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Container, Card, CardContent, CardHeader } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import memberData from "@/lib/data/memberData";


function MemberCard({ member }:{member:any}) {
  return (
    <Card
      sx={{
        bgcolor: "#64748B",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "",
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
 
      <Container maxWidth="lg" sx={{my: {xs:"64px",sm:"72px"},}}>
        <Typography variant="h3" sx={{textAlign:"left",fontSize:{xs:"32px",sm:"56px"}}}>ADMINISTRATION</Typography>
        <Stack
          sx={{
            gap: "20px",
            padding: "20px",
            mb: "25px",
            overflowX: "hidden",
          }}
        >


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
 
  );
}

export default Members;
