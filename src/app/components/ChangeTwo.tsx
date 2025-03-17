import RevealLinks from "./FramerMotion/FlipWords";

import { Reveal } from "./FramerMotion/Reveal";

export default function ChangeTwo(props: any) {
  const projectOne = "/jobsearch.png";
  const projectTwo = "/Noted.png";
  const projectThree = "/ss2.png";
  const projectFour = "/bexgenSSV2.png";
  return (
    <div className="flex w-full gap-7 flex-col bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gradient-to-r dark:from-cyan-900 dark:to-blue-900 backdrop-blur-md cursor-none">
      <h1
        onMouseEnter={props.enter}
        onMouseLeave={props.leave}
        className="sm:mb-10 text-center text-5xl z-10 font-bold text-[#eee] self-center"
      >
        <Reveal animationType="slide">
          <RevealLinks
            size={"text-3xl md:text-5xl lg:text-6xl cursor-none"}
            word={"< Projects >"}
          />
        </Reveal>
      </h1>
      <div className="w-full flex gap-7 justify-center flex-wrap cursor-none">
        <Reveal animationType="slide2">
          <div
            id="changeMe"
            className="h-72 w-[580px] object-contain bg-black rounded hover:scale-105 transition-transform group relative"
            onMouseEnter={props.project}
            onMouseLeave={props.projLeave}
          >
            <div className=" w-[65%] h-[288px] opacity-0 z-40 p-5 -right-20 transition-all group-hover:opacity-100 group-hover:right-0 absolute bg-black bg-opacity-60">
              <h1 className="text-white text-[35px]">made with</h1>
              <img src="https://skillicons.dev/icons?i=react,next,tailwindcss,vercel,typescript,firebase,jest,html" />
              <h2 className="text-white pt-5">
                Portal is an app that lets you search for your perfect job all
                around the world and has other features like tracking your
                applied jobs
              </h2>
            </div>
            <img
              className="object-cover w-full h-full relative rounded cursor-none"
              src={projectOne}
              alt=""
            />

            <img
              className="absolute top-0 opacity-0 transition-opacity group-hover:opacity-100 object-cover w-full h-full rounded cursor-none"
              src="null"
              alt=""
            />
            <a href="https://portal-neon-eta.vercel.app" target="_blank">
              <button className="absolute top-40 left-6 opacity-0 transition-opacity group-hover:opacity-100 bg-black text-cyan-800 p-3 z-10 cursor-none">
                (Live Demo)
              </button>
            </a>
          </div>
        </Reveal>
        <Reveal>
          <div
            id="changeMe"
            className="h-72 w-96 bg-black hover:scale-105 transition-transform rounded group relative"
            onMouseEnter={props.project}
            onMouseLeave={props.projLeave}
          >
            <div className="w-[65%] h-[288px] opacity-0 z-40 p-5 -right-20 transition-all group-hover:opacity-100 group-hover:right-0 absolute bg-black bg-opacity-60">
              <h1 className="text-white text-[35px]">made with</h1>
              <img src="https://skillicons.dev/icons?i=react,javascript,tailwindcss,vercel,css,html" />
              <h2 className="text-white pt-5">
                a notes app where you can type markup and it saves your notes
                using firebase
              </h2>
            </div>
            <img
              className="object-cover w-full h-full rounded cursor-none"
              src={projectTwo}
              alt=""
            />
            <a href="https://notedxyz.netlify.app" target="_blank">
              <button className="absolute top-40 left-6 opacity-0 transition-opacity group-hover:opacity-100 bg-black text-cyan-800 p-3 z-10 cursor-none">
                (Live Demo)
              </button>
            </a>
            <a href="https://github.com/WhosDouble/K-notes" target="_blank">
              <button className="absolute bottom-6 left-6 opacity-0 transition-opacity group-hover:opacity-100 bg-black text-cyan-800 p-3 z-10 cursor-none">
                (code)
              </button>
            </a>
          </div>
        </Reveal>
      </div>
      <div className="w-full flex justify-center flex-wrap gap-7 cursor-none">
        <Reveal>
          <div
            id="changeMe"
            className="h-72 w-96 bg-black hover:scale-105 transition-transform rounded group relative"
            onMouseEnter={props.project}
            onMouseLeave={props.projLeave}
          >
            <div className="w-[65%] h-[288px] opacity-0 z-40 p-5 -right-20 transition-all group-hover:opacity-100 group-hover:right-0 absolute bg-black bg-opacity-60">
              <h1 className="text-white text-[35px]">made with</h1>
              <img src="https://skillicons.dev/icons?i=javascript,css,html" />
              <h2 className="text-white pt-5">
                A technical document for Intergrated API no Live Demo at this
                moment one coming soon.
              </h2>
            </div>
            <img
              className="object-cover w-full h-full relative rounded"
              src={projectThree}
              alt=""
            />
            <img
              className="absolute top-0 opacity-0 transition-opacity group-hover:opacity-100 object-cover w-full h-full rounded"
              src="null"
              alt=""
            />

            <a href="#">
              <button className="absolute bottom-6 left-6 opacity-0 transition-opacity group-hover:opacity-100 bg-black text-cyan-800 p-3 z-10 cursor-none">
                (code)
              </button>
            </a>
          </div>
        </Reveal>
        <Reveal animationType="slide2">
          <div
            id="changeMe"
            className="h-72 w-full max-w-[580px] bg-black rounded hover:scale-105 transition-transform group relative"
            onMouseEnter={props.project}
            onMouseLeave={props.projLeave}
          >
            <div
              id="changeMe"
              className="w-[65%] h-[288px] opacity-0 z-40 p-5 -right-20 transition-all group-hover:opacity-100 group-hover:right-0 absolute bg-black bg-opacity-60"
            >
              <h1 className="text-white text-[35px]">made with</h1>
              <img src="https://skillicons.dev/icons?i=svelte,tailwindcss,vite,javascript,netlify,css,html" />
              <h2 className="text-white pt-5">
                A fully Responsive Saas website based on embedded integration
                and has an interactive design
              </h2>
            </div>
            <img
              className="object-cover w-full h-full relative rounded"
              src={projectFour}
              alt=""
            />

            <img
              className="absolute top-0 opacity-0 transition-opacity group-hover:opacity-100 object-cover w-full h-full rounded"
              src="/bexgenssV2.png"
              alt=""
            />
            <a href="https://nex-gen-website.vercel.app" target="_blank">
              <button className="absolute top-40 left-6 opacity-0 transition-opacity group-hover:opacity-100 bg-black text-cyan-800 p-3 z-10 cursor-none">
                (Live Demo)
              </button>
            </a>
            <a
              href="https://github.com/WhosDouble/NexGen-website"
              target="_blank"
            >
              <button className="absolute bottom-6 left-6 opacity-0 transition-opacity group-hover:opacity-100 bg-black text-cyan-800 p-3 z-10 cursor-none">
                (code)
              </button>
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
