import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";

const Polaroid = (props: any) => {
  const [confettiOn, setConfettiOn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDragStart = () => {
    setFadeOut(false);
    setConfettiOn(true);
  };

  const handleDragEnd = () => {
    setFadeOut(true);
    setTimeout(() => {
      setConfettiOn(false);
      setFadeOut(false);
    }, 2500);
  };
  console.log(confettiOn);
  return (
    <div className="relative">
      {confettiOn && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={500}
          gravity={0.2}
          colors={["#550A46", "#009990", "#A0EDF7"]}
          style={{
            opacity: fadeOut ? 0 : 1,
            transition: "opacity 1.5s ease-in-out",
            position: "absolute",
            top: -180,
            left: 0,
            zIndex: 9999, // Make sure confetti appears above other content
          }}
        />
      )}
      <motion.div
        drag
        initial={{ x: props.initialX, y: props.initialY }}
        style={{ transform: `${props.rotate}`, position: "absolute" }}
        className="w-[650px] bg-white p-3 border border-[#ccc] text-center inline-block m-5 relative "
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <img
          className="w-full mt-3 h-auto block"
          src={props.img}
          alt="image of yours truly"
          onDragStart={(e) => e.preventDefault()}
        />
        <p className="font-bold pt-4 text-xl">{props.description}</p>
        <p className="text-gray-300">
          {confettiOn ? "YOU DRAGGED HORRAY" : props.dragText}
        </p>
      </motion.div>
    </div>
  );
};
export default Polaroid;
