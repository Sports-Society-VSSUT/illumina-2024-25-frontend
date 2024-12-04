"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Card, Container, Stack } from "@mui/material";



interface Image {
  src: string;
  alt: string;
}

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  initialSlide: number;
  autoplay: boolean;
  arrows: boolean;
  autoplaySpeed: number;
}



const Gallery: React.FC = () => {
  const imageList: Image[] = [
    { src: "/illumina-2k24/1.JPG", alt: "Image 1" },
    { src: "/illumina-2k24/2.JPG", alt: "Image 2" },
    { src: "/illumina-2k24/3.JPG", alt: "Image 3" },
    { src: "/illumina-2k24/4.JPG", alt: "Image 4" },
    { src: "/illumina-2k24/5.JPG", alt: "Image 5" },
    { src: "/illumina-2k24/6.JPG", alt: "Image 6" },
  
  ];


  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
  };

  return (
    <Container maxWidth="lg">
    <Stack
      className="gallery-carousel"
      sx={{
        margin: "0 auto",
        my: {xs:"64px",sm:"72px"},
        overflow:"hidden"
      }}
    >
      <Slider {...settings}>
        {imageList.map((image, index) => (
          <div key={index} style={{ margin: "0 10px" , height:"100%"}}>
            <Card
              className="box"
              sx={{
                width:"100%",
                height:"100%",
                aspectRatio:"16/9",
                background: "white",
                overflow: "hidden",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={700}
                height={400}
                style={{
                  width: "100%", 
                  height: "100%", 
                  objectFit:"cover"
                }}
              />
            </Card>
          </div>
        ))}
      </Slider>

    </Stack>
    </Container>
  );
};

export default Gallery;
