import React from "react";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

function Footer() {
  return (
    <Stack
      className="foot"
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "#3A3A3A", // Dark gray background
        padding: "15px 20px",
        gap: "20px",
        width: "100%",
        color: "#E0E0E0", // Light text color
      }}
    >
      {/* Instagram Section */}
      <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "8px" }}>
        <Image src="/insta.png" alt="instagram" width={35} height={35} style={{objectFit:"cover"}}/>
        <a
          href="https://www.instagram.com/illumina.vssut?igshid=YmMyMTA2M2Y%3D"
          style={{
            textDecoration: "none",
            color: "#E0E0E0",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#5DADE2")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#E0E0E0")}
        >
          <Typography
            sx={{
              fontSize: { xs: "10px", md: "16px" },
              fontWeight: "bold",
            }}
          >
            @illumina_vssut
          </Typography>
        </a>
      </Stack>

      {/* Enigma Section */}
      <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}>
        <a
          href="https://enigmavssut.com/"
          style={{
            textDecoration: "none",
            color: "#E0E0E0",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#5DADE2")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#E0E0E0")}
        >
          <Typography
            sx={{
              fontSize: { xs: "10px", md: "16px" },
              fontWeight: "bold",
            }}
          >
            Developed By: Enigma
          </Typography>
        </a>
        <Image src="/enigma.png" alt="enigma" width={30} height={30} style={{objectFit:"cover"}}/>
      </Stack>
    </Stack>
  );
}

export default Footer;
