import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";
import Image from "next/image";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#212121", // Darker background for a sleek look
        padding: "20px 40px",
        color: "#FFFFFF",
        borderTop: "1px solid #333",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
      >
        {/* Instagram Section */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <Image
            src="/insta.png"
            alt="Instagram"
            width={100}
            height={100}
            style={{ objectFit: "cover", height:"30px", width:"30px" }}
          />
          <Link
            href="https://www.instagram.com/illumina.vssut?igshid=YmMyMTA2M2Y%3D"
            underline="none"
            sx={{
              color: "#FFFFFF",
              "&:hover": { color: "#5DADE2" },
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: "600",
            }}
          >
            @illumina_vssut
          </Link>
        </Stack>

        {/* Enigma Section */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: "500",
              color: "#BDBDBD", // Muted text color
            }}
          >
            Developed By:
          </Typography>
          <Link
            href="https://enigmavssut.com/"
            underline="none"
            sx={{
              color: "#FFFFFF",
              fontWeight: "600",
              fontSize: { xs: "12px", md: "16px" },
              "&:hover": { color: "#5DADE2" },
            }}
          >
            Enigma
          </Link>
          <Image
            src="/enigma.png"
            alt="Enigma"
            width={100}
            height={100}
            style={{ objectFit: "cover", height:"30px", width:"30px" }}
          />
        </Stack>
      </Stack>

      {/* Bottom Section */}
      <Typography
        sx={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: { xs: "10px", md: "14px" },
          color: "#757575",
        }}
      >
        © {new Date().getFullYear()} Illumina | All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
