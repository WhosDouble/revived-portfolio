import RevealLinks from "./FramerMotion/FlipWords";

export default function ChangeTwo(props: any) {
  return (
    <div className="flex w-full gap-7 flex-col bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gradient-to-r dark:from-cyan-900 dark:to-blue-900 backdrop-blur-md">
      <h1
        onMouseEnter={props.enter}
        onMouseLeave={props.leave}
        className="sm:mb-10 text-center text-5xl z-10 font-bold text-[#eee] self-center"
      >
        <RevealLinks
          size={"text-3xl md:text-5xl lg:text-6xl"}
          word={"< Projects >"}
        />
      </h1>
      <div className="flex gap-7 justify-center cursor-pointer flex-wrap">
        <div
          id="changeMe"
          className="h-72 w-full max-w-[580px] object-contain bg-black rounded hover:scale-105 transition-transform group relative"
          onMouseEnter={props.project}
          onMouseLeave={props.projLeave}
        >
          <div className=" w-[400px] h-[288px] opacity-0 z-40 p-5 -right-20 transition-all group-hover:opacity-100 group-hover:right-0 absolute bg-black bg-opacity-60">
            <h1 className="text-white text-[35px]">made with</h1>
            <img src="https://skillicons.dev/icons?i=svelte,vite,tailwindcss,vercel,javascript,html" />
            <h2 className="text-white pt-5">
              a website based on embedded integration thats fully responsive and
              interactive
            </h2>
          </div>
          <img
            className="object-cover w-full h-full relative rounded"
            src="/bexgenSSV2.png"
            alt=""
          />

          <img
            className="absolute top-0 opacity-0 transition-opacity group-hover:opacity-100 object-cover w-full h-full rounded"
            src="null"
            alt=""
          />
          <a href="https://nex-gen-soulutions.vercel.app/" target="_blank">
            <button className="absolute top-40 left-6 opacity-0 transition-opacity group-hover:opacity-100 bg-black text-cyan-800 p-3 z-10">
              (Live Demo)
            </button>
          </a>
          <a
            href="https://github.com/WhosDouble/product-landing-page/tree/main?tab=readme-ov-file"
            target="_blank"
          >
            <button className="absolute bottom-6 left-6 opacity-0 transition-opacity group-hover:opacity-100 bg-black text-cyan-800 p-3 z-10">
              (code)
            </button>
          </a>
        </div>
        <div
          id="changeMe"
          className="h-72 w-96 bg-black hover:scale-105 transition-transform rounded group relative"
          onMouseEnter={props.project}
          onMouseLeave={props.projLeave}
        >
          <div className="w-[230px] h-[288px] opacity-0 z-40 p-5 -right-20 transition-all group-hover:opacity-100 group-hover:right-0 absolute bg-black bg-opacity-60">
            <h1 className="text-white text-[35px]">made with</h1>
            <img src="https://skillicons.dev/icons?i=vercel,javascript,css,html" />
            <h2 className="text-white pt-5">
              a technical documentation website thats fully responsive for all
              screens(no live Demo rn).
            </h2>
          </div>
          <img
            className="object-cover w-full h-full rounded"
            src="/ss2.png"
            alt=""
          />
          <a href="#" target="">
            <button className="absolute top-40 left-6 opacity-0 transition-opacity group-hover:opacity-100 bg-black text-cyan-800 p-3 z-10">
              (Live Demo)
            </button>
          </a>
          <a href="#" target="">
            <button className="absolute bottom-6 left-6 opacity-0 transition-opacity group-hover:opacity-100 bg-black text-cyan-800 p-3 z-10">
              (code)
            </button>
          </a>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-7">
        <div
          id="changeMe"
          className="h-72 w-96 bg-black hover:scale-105 transition-transform rounded group relative"
          onMouseEnter={props.project}
          onMouseLeave={props.projLeave}
        >
          <div className="w-[230px] h-[288px] opacity-0 z-40 p-5 -right-20 transition-all group-hover:opacity-100 group-hover:right-0 absolute bg-black bg-opacity-60">
            <h1 className="text-white text-[35px]">made with</h1>
            <img src="https://skillicons.dev/icons?i=firebase,react,vite,javascript,css,html" />
            <h2 className="text-white pt-5">
              a notes app where you can type markup and it saves your notes
              using firebase
            </h2>
          </div>
          <img
            className="object-cover w-full h-full relative rounded"
            src="/Noted.png"
            alt=""
          />
          <img
            className="absolute top-0 opacity-0 transition-opacity group-hover:opacity-100 object-cover w-full h-full rounded"
            src="/Noted.png"
            alt=""
          />
          <a href="https://notedxyz.netlify.app" target="_blank">
            <button className="absolute top-40 left-6 opacity-0 transition-opacity group-hover:opacity-100 bg-black text-cyan-800 p-3 z-10">
              (Live Demo)
            </button>
          </a>
          <a href="#">
            <button className="absolute bottom-6 left-6 opacity-0 transition-opacity group-hover:opacity-100 bg-black text-cyan-800 p-3 z-10">
              (code)
            </button>
          </a>
        </div>
        <div
          id="changeMe"
          className="h-72 w-full max-w-[580px] bg-black rounded hover:scale-105 transition-transform group relative"
          onMouseEnter={props.project}
          onMouseLeave={props.projLeave}
        >
          <div
            id="changeMe"
            className="w-[400px] h-[288px] opacity-0 z-40 p-5 -right-20 transition-all group-hover:opacity-100 group-hover:right-0 absolute bg-black bg-opacity-60"
          >
            <h1 className="text-white text-[35px]">made with</h1>
            <img src="https://skillicons.dev/icons?i=netlify,javascript,css,html" />
            <h2 className="text-white pt-5">
              a eCommerce website based on mens fragrances thats fully
              <span>responsive</span>
            </h2>
          </div>
          <img
            className="object-cover w-full h-full relative rounded"
            src="/ss1.png"
            alt=""
          />

          <img
            className="absolute top-0 opacity-0 transition-opacity group-hover:opacity-100 object-cover w-full h-full rounded"
            src="null"
            alt=""
          />
          <a href="https://unrivaled-cat-9182f4.netlify.app" target="_blank">
            <button className="absolute top-40 left-6 opacity-0 transition-opacity group-hover:opacity-100 bg-black text-cyan-800 p-3 z-10">
              (Live Demo)
            </button>
          </a>
          <a
            href="https://github.com/WhosDouble/NexGen-website"
            target="_blank"
          >
            <button className="absolute bottom-6 left-6 opacity-0 transition-opacity group-hover:opacity-100 bg-black text-cyan-800 p-3 z-10">
              (code)
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
