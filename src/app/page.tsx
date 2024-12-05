"use client";
import Hero from "@/components/Hero";
import Footer from "../components/Footer";
import Members from "../components/Members";
import Navbar from "../components/Navbar";
import Shirt from "../components/Shirt";
import EventTable from "@/components/table_view";
import Gallery from "@/components/gallery";
import BackToTopButton from "@/components/Button";
import { MainDetailsComponent } from "@/components/detailsComponent";
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
  const home = useRef<HTMLDivElement | null>(null);
  const gallery = useRef<HTMLDivElement | null>(null);
  const event = useRef<HTMLDivElement | null>(null);
  const admin = useRef<HTMLDivElement | null>(null);
  const explore = useRef<HTMLDivElement | null>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleClic1 = () => {
    scrollToRef(home);
  };

  const handleClic2 = () => {
    scrollToRef(event);
  };

  const handleClic3 = () => {
    scrollToRef(gallery);
  };

  const handleClic4 = () => {
    scrollToRef(admin);
  };
  const handleClic5 = () => {
    scrollToRef(explore);
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
              isHome={true}
            />
            <Hero explore={handleClic5} />
            <div ref={explore}>
              <MainDetailsComponent />
            </div>
            <div ref={gallery}>
              <Gallery />
            </div>
            <Shirt />
            <div ref={event}>
              <EventTable />
            </div>
            <div ref={admin}>
              <Members />
            </div>
            <BackToTopButton />
            <Footer />
          </main>
        </body>
      </ThemeProvider>
    </>
  );
}
