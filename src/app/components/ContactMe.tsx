import { motion } from "framer-motion";

import Polaroid from "./Polaroid";
import RevealLinks from "./FramerMotion/FlipWords";

function ContactMe(props: any) {
  return (
    <div className="w-full h-[1500px] bg-[#175f74] dark:bg-[#020f1f]">
      <RevealLinks
        size={
          "text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-center text-[#eee] cursor-none"
        }
        word={"Contact"}
      />
      <Polaroid
        description={"THIS IS MY BLAH BLAH BLAH"}
        img={"/mountain.png"}
        initialX={100}
        initialY={50}
        dragText={"(pssst drag me)"}
      />
      <Polaroid
        description={"AND HERE IS MY BLAH BLAH BLAH"}
        img={"/mountain.png"}
        initialX={900}
        initialY={90}
        dragText={"(dont listen to the first one dont drag)"}
      />
      <Polaroid
        description={"WHERE IS MY BLAH BLAH BLAH"}
        img={"/mountain.png"}
        initialX={550}
        initialY={670}
        dragText={"(just drag you only live once)"}
      />
    </div>
  );
}
export default ContactMe;
