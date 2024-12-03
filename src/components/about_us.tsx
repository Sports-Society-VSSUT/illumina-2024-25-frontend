// pages/about.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Box, Stack, Typography ,ThemeProvider,useTheme,createTheme} from "@mui/material";
import { motion } from "framer-motion";

const theme1=createTheme({
  typography:{
    body1:{
      fontFamily: "monospace",
      fontWeight: "bold",
    },
    h5:{
      fontFamily: "monospace",
      fontWeight: "bold",
      fontSize:"2rem",
    }
  }
})

const About0: React.FC = () => {
  const [dm1, setDm1] = useState<number>(600);
  const [dm2, setDm2] = useState<number>(100);
  const [dm3, setDm3] = useState<number>(100);
  const [o1, setO1] = useState<boolean>(true);
  const [o2, setO2] = useState<boolean>(false);
  const [o3, setO3] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(90);

  const handleC = (newDm1: number, newDm2: number, newDm3: number) => {
    setDm1(newDm1);
    setDm2(newDm2);
    setDm3(newDm3);
    if (newDm1 === 600) {
      setO1(true);
      setO2(false);
      setO3(false);
    } else if (newDm2 === 600) {
      setO1(false);
      setO2(true);
      setO3(false);
    } else {
      setO1(false);
      setO2(false);
      setO3(true);
    }
  };

  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme1}>
    <Box display="flex" alignItems="center" justifyContent="center" sx={{mt:"50px",color:"black"}}>
      <Stack
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection={isMobile ? "column" : "row"}
        width="90%" 
        gap={isMobile ? "10px" : 2} 
      >
        <Stack
          className="container1"
          onClick={() => handleC(600, 100, 100)}
          style={{
            width: isMobile ? "90%" : `${dm1}px`, 
            height: isMobile ? "auto" : "600px", 
            transition: "width 0.6s ease, height 0.6s ease",
          
            backgroundColor: "orange",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          {o1 ? (
                            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
            <Typography variant="h5" width="100%" sx={{fontWeight:"bold"}}>ABOUT US
              <Typography variant="body1" width="100%">Sports Society focuses on promoting and fostering sports among the students, faculty and staff of the university. The society aims to provide a platform for students to participate in a wide range of sports activities including both indoor and outdoor sports, and to develop and improve their physical and mental well-being. The Sports Society of VSSUT organizes various sports events, tournaments, and competitions throughout the year such as football, cricket, volleyball, badminton, and many more. Vssut also has sports clubs like VSSUT Cricket Club- VCC, VSSUT Shuttlers-VSS, VSSUT Basketball Club- VBC, VSSUT football club vfc, VSSUT Volleyball Club which provide a highly competitive environment where the talent of students is furnished and sharpened.!</Typography>
            </Typography>
                </motion.div>
          ) : (
            <Typography
              variant="h5"
              style={{
                transform: `rotate(${isMobile ? 0 : 270}deg)`,
                textAlign: "center",
              }}
            >
              About Us
            </Typography>
          )}
        </Stack>

        <Stack
          className="container2"
          onClick={() => handleC(100, 600, 100)}
          sx={{
            width: isMobile ? "90%" : `${dm2}px`,
            height: isMobile ? "auto" : "600px", 
            transition: "width 0.6s ease, height 0.6s ease",
            backgroundColor: "gray",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          {o2 ? (
                <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
            <Typography variant="h5" width="100%" sx={{fontWeight:"bold"}}>ILLUMINA
              <Typography variant="body1" width="100%">Veer Surendra Sai University of Technology (VSSUT) organizes its yearly sports fest named as ILLUMINA with great elation and valor.The two days sports extravaganza of our University kicks-off with a gallant show. The inaugural day starts off with the lighting of the torch at Burla Temple which kindles the spirit of sportsmanship and togetherness among all the VSSUTians. A number of sports enthusiasts turns up to become a part of the torch march from the temple to the University’s ground lead by Sports Secretary,VSSUT,Burla. They are greeted by a large crowd (students, staff and local people) encouraging and applauding them</Typography>
            </Typography>
            </motion.div>
          ) : (
            <Typography
              variant="h5"
              style={{
                transform: `rotate(${isMobile ? 0 : 270}deg)`,
                display: "inline-block",
                textAlign: "center",
              }}
            >
              Illumina
            </Typography>
          )}
        </Stack>

        <Stack
          className="container3"
          onClick={() => handleC(100, 100, 600)}
          style={{
            width: isMobile ? "90%" : `${dm3}px`, 
            height: isMobile ? "auto" : "600px", 
            transition: "width 0.6s ease, height 0.6s ease",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          {o3 ? (
                            <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                          >
            <Typography variant="h5" width="100%" sx={{fontWeight:"bold"}}> YOGA CLUB
              <Typography variant="body1" width="100%">Yoga Club VSSUT is the official member- operated club of Veer Surendra Sai University of Technology, working for the enlightenment of the students of the college by taking them out of their busy and monotonous schedule through Yoga. The club works through organizing health and thought-awareness events and competitions, both on and off the campus. The devoted motto of this society and the events- spreading health awareness and purity of thoughts among the juvenile and energetic minds for the bright future of India, as well as to provide a friendly circle and harmonious environment for the inquisitive people.</Typography>
            </Typography>
                            </motion.div>
          ) : (
            <Typography
              variant="h5"
              style={{
                transform: `rotate(${isMobile ? 0 : 270}deg)`,
                display: "inline-block",
                textAlign: "center",
              }}
            >
              Yoga Club
            </Typography>
          )}
        </Stack>
      </Stack>
    </Box>
    </ThemeProvider>
  );
};

export default About0;
