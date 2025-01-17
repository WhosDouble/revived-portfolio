import Polaroid from "./Polaroid";
import RevealLinks from "./FramerMotion/FlipWords";

function ContactMe(props: any) {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen z-[9999] bg-[#175f74] dark:bg-[#020f1f] px-4">
      <h1
        onMouseEnter={props.enter}
        onMouseLeave={props.leave}
        className="mb-10 text-center z-10 font-bold text-[#eee]"
      >
        <RevealLinks
          size={"text-4xl md:text-7xl lg:text-8xl cursor-none"}
          word={"< Contact >"}
        />
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        <Polaroid
          description={"CLICK ME TO GO TO MY EMAIL"}
          img={"/mountain.png"}
          dragText={"(pssst drag me)"}
          psText={"YOU LISTENED HURRAY CONFETTI"}
          rotate={7}
        />
        <Polaroid
          description={"CLICK ME TO GO TO MY LINKEDIN"}
          img={"/undawata.png"}
          dragText={"(dont listen to the first one dont drag)"}
          psText={"great now we gotta clean this up thanks..."}
          rotate={-3}
        />
        <Polaroid
          description={"CLICK ME TO GO TO MY GITHUB"}
          img={"/github.png"}
          dragText={"(just drag you only live once)"}
          psText={"See worth it"}
          rotate={4}
        />
      </div>
    </div>
  );
}
export default ContactMe;
