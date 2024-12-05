"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScoreCard from "@/components/ScoreCard";
import CardComponent from "@/components/fixtures";
import LiveFeed from "@/components/liveScore";
import BackToTopButton from "@/components/Button";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
});

export default function Home() {
  const router=useRouter();

  const handleClic1 = () => {
    router.push("/")
  };

  const handleClic2 = () => {
    router.push("/")
  };

  const handleClic3 = () => {
    router.push("/")
  };

  const handleClic4 = () => {
    router.push("/")
  };
  return (
    <>
      <head>
        <title>Illumina 2k24-25</title>
        <link
          rel="shortcut icon"
          href="IlluminaLogoPng-min.png"
          type="image/x-icon"
        />
      </head>
      <ThemeProvider theme={theme}>
        <body>
          <main>
            {/* <HideAppBar/> */}
            <Navbar
              onClic1={handleClic1}
              onClic2={handleClic2}
              onClic3={handleClic3}
              onClic4={handleClic4}
              isHome={false}
            />
            <LiveFeed />
            <CardComponent />
            <ScoreCard />
            <BackToTopButton />
            <Footer />
          </main>
        </body>
      </ThemeProvider>
    </>
  );
}
