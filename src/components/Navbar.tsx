"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { Slide, Box, CssBaseline, Container } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

type NavbarProps = {
  onClic1: () => void;
  onClic2: () => void;
  onClic3: () => void;
  onClic4: () => void;
};

function HideOnScroll(props: { window?: () => Window; children?: React.ReactElement<unknown> }) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

const Navbar = ({ onClic1, onClic2, onClic3, onClic4 }: NavbarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setBgOpacity(scrollTop > 0 ? 0.7 : 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const navLinks = [
    { text: "HOME", path: "/", onClick: onClic1 },
    { text: "EVENTS", path: "/schedule", onClick: onClic2 },
    { text: "GALLERY", path: "/events", onClick: onClic3 },
    { text: "ADMINISTRATION", path: "/admin", onClick: onClic4 },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar
          sx={{
            backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
            backdropFilter:  "blur(10px)",
            boxShadow: "none",
            transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ justifyContent: "space-between", py: "16px" }}>
              <Image
                className="illumina"
                src="/IlluminaLogoPng-min.png"
                alt="illumina"
                width={70}
                height={70}
              />
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: "25px",
                }}
                component={List}
              >
                {navLinks.map((link) => (
                  <ListItem key={link.text} onClick={link.onClick}>
                    <ListItemText primary={link.text} style={{ cursor: "pointer" }} />
                  </ListItem>
                ))}
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                  sx={{ color: "white" }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.text} onClick={link.onClick}>
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>

      <Toolbar />
    </React.Fragment>
  );
};

export default Navbar;
