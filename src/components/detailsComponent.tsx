import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";

export function MainDetailsComponent() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingY: "24px",
        display: "flex",
        flexDirection: "column",
        gap: { xs: "36px", md: "64px" },
      }}
    >
      <AboutUs />
      <Illumina />
      <YogaClub />
    </Container>
  );
}

const AboutUs = () => {
  return (
    <Box sx={{ width: "100%", my: { xs: "64px", sm: "72px" } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)" },
          gap: "20px",
        }}
      >
        {/* About Us Text Section */}
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              height: "100px",
              mb: "16px",
            }}
          >
            <Box
              sx={{ height: "80%", width: "24px", backgroundColor: "#007FFF" }}
            ></Box>
            <Typography
              variant="h3"
              className="desc-title"
              sx={{ fontWeight: "bold" }}
            >
              ABOUT US
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            Sports Society focuses on promoting and fostering sports among the
            students, faculty, and staff of the university. The society aims to
            provide a platform for students to participate in a wide range of
            sports activities, including both indoor and outdoor sports, and to
            The Sports Society of VSSUT organizes various sports events,
            tournaments, and competitions throughout the year such as football,
            cricket, volleyball, badminton, and many more. VSSUT also has sports
            clubs like VSSUT Cricket Club, VSSUT Shuttlers, VSSUT Basketball
            Club, VSSUT Football Club, and VSSUT Volleyball Club, which provide
            a highly competitive environment where the talents of students are
            honed.
          </Typography>
        </Box>

        {/* Image Grid Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" },
            gap: "10px",
          }}
        >
          {[
            { src: "/clubs/athletics.jpg", alt: "Athletics" },
            { src: "/clubs/football.jpg", alt: "Football" },
            { src: "/clubs/cricket.jpg", alt: "Cricket" },
            { src: "/clubs/volleyball.jpg", alt: "Volleyball" },
            { src: "/clubs/basketball.jpg", alt: "Basketball" },
            { src: "/clubs/shuttlers.jpg", alt: "Badminton" },
          ].map((image, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={400}
                height={400}
                style={{ borderRadius: "8px", objectFit: "cover" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const Illumina = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)" },
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
            order: { xs: 2, md: 1 },
          }}
        >
          <ImageComponent src="/illumina/illumina1.jpg" alt="illumina1" />
          <ImageComponent src="/illumina/illumina2.jpg" alt="illumina2" />
          <ImageComponent src="/illumina/illumina3.jpg" alt="illumina3" />
          <ImageComponent src="/illumina/illumina4.jpg" alt="illumina4" />
        </Box>
        <Box
          sx={{
            order: { xs: 1, md: 2 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              height: "100px",
              mb: "16px",
            }}
          >
            <Box
              sx={{ height: "80%", width: "24px", backgroundColor: "#FFDF22" }}
            ></Box>
            <Typography
              variant="h3"
              className="desc-title"
              sx={{ fontWeight: "bold" }}
            >
              ILLUMINA
            </Typography>
          </Box>

          <Typography variant="body1" width="100%" paragraph>
            Veer Surendra Sai University of Technology (VSSUT) organizes its
            yearly sports fest named as ILLUMINA with great elation and
            valor.The two days sports extravaganza of our University kicks-off
            with a gallant show. The inaugural day starts off with the lighting
            of the torch at Burla Temple which kindles the spirit of
            sportsmanship and togetherness among all the VSSUTians. A number of
            sports enthusiasts turns up to become a part of the torch march from
            the temple to the University’s ground lead by Sports
            Secretary,VSSUT,Burla. They are greeted by a large crowd (students,
            staff and local people) encouraging and applauding them
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const YogaClub = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)" },
          gap: "20px",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              height: "100px",
              mb: "16px",
            }}
          >
            <Box
              sx={{ height: "80%", width: "24px", backgroundColor: "#ffdbac" }}
            ></Box>
            <Typography
              variant="h3"
              className="desc-title"
              sx={{ fontWeight: "bold" }}
            >
              YOGA CLUB
            </Typography>
          </Box>
          <Typography variant="body1" width="100%" paragraph>
            Yoga Club VSSUT is the official member- operated club of Veer
            Surendra Sai University of Technology, working for the enlightenment
            of the students of the college by taking them out of their busy and
            monotonous schedule through Yoga. The club works through organizing
            health and thought-awareness events and competitions, both on and
            off the campus. The devoted motto of this society and the events-
            spreading health awareness and purity of thoughts among the juvenile
            and energetic minds for the bright future of India, as well as to
            provide a friendly circle and harmonious environment for the
            inquisitive people.
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "16px",
            }}
          >
            <ImageComponent src={"/yoga.jpg"} alt={"yoga"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

interface ImageComponentProps {
  src: string;
  alt: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt }) => {
  return (
    <>
      <Image
        width={400}
        height={400}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "8px",
          objectFit: "cover",
        }}
        src={src}
        alt={alt}
      />
    </>
  );
};
