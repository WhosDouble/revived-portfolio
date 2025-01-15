"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ChangeOne from "./components/ChangeOne";
import ChangeTwo from "./components/ChangeTwo";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

import { Variants } from "framer-motion";
import "../app/globals.css";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [toggleDarkMode, setToggleDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("toggleDarkMode");
    if (savedMode) {
      setToggleDarkMode(JSON.parse(savedMode));
    } else {
      setToggleDarkMode(false);
    }
  }, []);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
      clipPath: "circle(50%)", // Keep the circular clip
      transition: {
        type: "smooth",
        duration: 0.1,
      },
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#FFEB00",
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)", // Glow effect
      mixBlendMode: "multiply",
      clipPath: "circle(50%)",
      transition: {
        type: "smooth",
        duration: 0.1,
      },
    },
    projectHover: {
      height: 50,
      width: 50,
      backgroundColor: "#FF5733",
      clipPath:
        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)", // Triangle shape
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)", // Glow effect
      transition: {
        type: "smooth",
        duration: 0.1,
      },
    },
    drag: {
      height: 20,
      width: 20,
      backgroundColor: "#6A4C8C",
      borderRadius: 0,
      clipPath:
        "polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%)",
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)", // Glow effect
      transition: {
        type: "smooth",
        duration: 0.1,
      },
    },
  };

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (toggleDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
    localStorage.setItem("toggleDarkMode", JSON.stringify(toggleDarkMode));
  }, [toggleDarkMode]);

  const settingDarkMode = () => {
    setToggleDarkMode((prevState: boolean) => !prevState);
  };

  const textEnter = () => setCursorVariant("text");

  const textLeave = () => setCursorVariant("default");

  const projectHover = () => setCursorVariant("projectHover");

  const projectLeave = () => setCursorVariant("default");

  const dragEnter = () => setCursorVariant("drag");

  return (
    <>
      <Navbar mode={toggleDarkMode} darkFunction={settingDarkMode} />
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className="SHADOW bg-[#eee] z-[9999] rounded-[50%] h-8 w-8 pointer-events-none fixed top-0 left-0"
      ></motion.div>

      <ChangeOne
        enter={textEnter}
        leave={textLeave}
        mode={toggleDarkMode}
        darkFunction={settingDarkMode}
      />
      <ChangeTwo
        mode={toggleDarkMode}
        darkFunction={settingDarkMode}
        enter={textEnter}
        leave={textLeave}
        project={projectHover}
        projLeave={projectLeave}
      />

      <AboutMe
        enter={textEnter}
        leave={textLeave}
        mode={toggleDarkMode}
        darkFunction={settingDarkMode}
        drag={dragEnter}
      />
      <ContactMe
        mode={toggleDarkMode}
        darkFunction={settingDarkMode}
        project={projectHover}
      />

      <Footer mode={toggleDarkMode} darkFunction={settingDarkMode} />
    </>
  );
}
