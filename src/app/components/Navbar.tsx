import ScrollProgress from "./FramerMotion/ScrollProgress";
export default function Navbar(props: any) {
  return (
    <>
      <nav
        id="navbar"
        className="flex items-center justify-center mt-3 rounded-3xl z-[999] inset-0 w-full max-w-[600px] h-14 gap-8 px-4 mx-auto text-stone-200 fixed bg-black"
      >
        <a className="mix-blend-difference" href="#">
          Me!
        </a>
        <a className="mix-blend-difference" href="#projects">
          Projects
        </a>
        <a className="mix-blend-difference" href="#aboutMe">
          About Me
        </a>
        <a className="mix-blend-difference" href="#contactMe">
          Contact Me!
        </a>
        <button className="cursor-none" onClick={props.darkFunction}>
          {props.mode ? "LIGHT MODE" : "DARK MODE"}
        </button>
      </nav>
      <div id="scroll-progress">
        <ScrollProgress />
      </div>
    </>
  );
}
