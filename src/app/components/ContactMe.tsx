import Polaroid from "./Polaroid";
import RevealLinks from "./FramerMotion/FlipWords";

function ContactMe(props: any) {
  return (
    <div className="w-full z-[9999] h-[1500px] bg-[#175f74] dark:bg-[#020f1f]">
      <h1
        onMouseEnter={props.enter}
        onMouseLeave={props.leave}
        className="sm:mb-10 text-center z-10 font-bold text-[#eee] self-center"
      >
        <RevealLinks
          size={"text-4xl md:text-7xl lg:text-8xl cursor-none"}
          word={"< Contact >"}
        />
      </h1>
      <Polaroid
        description={"CLICK ME TO GO TO MY EMAIL"}
        img={"/mountain.png"}
        initialX={100}
        initialY={50}
        dragText={"(pssst drag me)"}
        rotate={6}
      />
      <Polaroid
        description={"CLICK ME TO GO TO MY LINKEDIN"}
        img={"/mountain.png"}
        initialX={900}
        initialY={90}
        dragText={"(dont listen to the first one dont drag)"}
        rotate={-3}
      />
      <Polaroid
        description={"CLICK ME TO GO TO MY GITHUB"}
        img={"/mountain.png"}
        initialX={550}
        initialY={670}
        dragText={"(just drag you only live once)"}
        rotate={1}
      />
    </div>
  );
}
export default ContactMe;
