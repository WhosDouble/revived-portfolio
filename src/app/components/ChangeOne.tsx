import { FlipWords } from "./Aceternity/flipWords";
import { ShootingStars } from "./Aceternity/ShootingStars";
import { StarsBackground } from "./Aceternity/StarsBackGround";

import RevealLinks from "./FramerMotion/FlipWords";

export default function ChangeOne(props: any) {
  const words = [
    "Hello",
    "Hola",
    "Γεια σου",
    "Bonjour",
    "Greetings",
    "こんにちは",
    "안녕하세요",
    "Hallo",
    "Hej",
    "Привет",
  ];
  const water = props.mode
    ? { from: "#164e63", to: "#1e3a8a" }
    : { from: "#06b6d4", to: "#3b82f6" };
  return (
    <div className="flex flex-col text-white dark:bg-night-sky bg-sunny-sky justify-center relative items-center h-[1000px] w-full cursor-none">
      <h1
        onMouseEnter={props.enter}
        onMouseLeave={props.leave}
        className="sm:mb-10 text-center text-5xl z-10"
      >
        <FlipWords words={words} />
        I'm{" "}
        <RevealLinks
          size={"text-4xl sm:text-5xl md:text-7xl lg:text-8xl cursor-none"}
          word="rango"
        />
      </h1>
      <p className="text-stone-200 z-10 p-6 text-center cursor-none">
        A <span className="font-bold">Frontend Engineer</span> with a passion
        for creating responsive and engaging user experiences
      </p>
      <p className="text-gray-400 z-40 group relative text-xl pt-20 cursor-none">
        <a className="z-50 cursor-none" href="#projects">
          (scroll to start)
        </a>

        <svg
          className="opacity-0 group-hover:opacity-100 animate-bounce transition-opacity cursor-none absolute top-40"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#eee"
          viewBox="0 0 24 24"
        >
          <path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"></path>
          <path d="M11 6h2v6h-2z"></path>
        </svg>
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -69 1440 320"
        className="absolute z-20 block bottom-0 w-full"
      >
        <defs>
          <linearGradient id="waveGradient" gradientTransform="rotate(0)">
            <stop offset="0%" stopColor={water.from} />
            <stop offset="100%" stopColor={water.to} />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          className="border shadow-lg border-red"
          fillOpacity="1"
          d="M0,128L40,149.3C80,171,160,213,240,234.7C320,256,400,256,480,229.3C560,203,640,149,720,128C800,107,880,117,960,106.7C1040,96,1120,64,1200,53.3C1280,43,1360,53,1400,58.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      {props.mode ? <StarsBackground /> : null}
      {props.mode ? <ShootingStars /> : null}
    </div>
  );
}
