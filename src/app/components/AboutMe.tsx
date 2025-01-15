import { motion } from "framer-motion";

import RevealLinks from "./FramerMotion/FlipWords";

export default function AboutMe(props: any) {
  const deepWater = props.mode ? "rgb(2, 15, 31)" : "rgb(23, 95, 116)";

  return (
    <div className="flex flex-col w-full justify-center text-[#eee] relative pt-24 gap-10 bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gradient-to-r dark:from-cyan-900 dark:to-blue-900">
      <h2
        onMouseEnter={props.enter}
        onMouseLeave={props.leave}
        className="sm:mb-10 text-center text-5xl self-center font-bold text-[#eee] z-10"
      >
        <RevealLinks
          size={"text-3xl md:text-5xl lg:text-6xl"}
          word={"<About>"}
        />
      </h2>
      <div className="w-full flex justify-center flex-col text-left">
        <p className="mx-auto w-full max-w-[700px] pb-10">
          I’m a developer who loves turning ideas into reality and solving
          problems in creative ways. Getting into front-end development has been
          an exciting journey full of learning, building, and refining projects.
          Whether it’s crafting interactive web apps or designing clean,
          eye-catching portfolio sites, I take pride in creating work that’s
          both functional and enjoyable to use.
        </p>

        <p className="mx-auto w-full max-w-[700px] pb-10">
          What keeps me hooked on coding is the endless potential to grow and
          innovate. Every challenge—debugging a stubborn issue, integrating an
          API, or experimenting with a new framework—feels like an opportunity
          to learn something new. Over the past few months, I’ve dedicated
          countless hours to honing my skills with tools like Svelte, React, and
          TailwindCSS, while also diving deeper into API integration and state
          management. These experiences have sharpened my ability to adapt and
          solve problems effectively.
        </p>

        <p className="mx-auto w-full max-w-[700px] mb-16">
          For me, coding isn’t just about writing code—it’s about building
          something meaningful. I enjoy creating applications that are polished,
          responsive, and user-friendly, and I love the process of finding smart
          solutions to tricky problems. It’s incredibly rewarding to see an idea
          evolve from a concept into something tangible that people can interact
          with and benefit from. I’m driven by the desire to keep growing as a
          developer, take on exciting challenges, and work on projects that
          really make an impact. Whether it’s improving the user experience,
          optimizing performance, or experimenting with the latest technologies,
          I’m always eager to push the boundaries of what I can create. Beyond
          the technical side, I also appreciate the creative aspect of
          coding—designing interfaces that are not only functional but also
          visually engaging. Each project gives me a chance to merge logic with
          creativity, and that balance is what keeps me excited about this
          field. I’m committed to staying curious and adaptable in an industry
          that’s always evolving. There’s so much to explore, so many skills to
          master, and endless opportunities to make a difference through
          technology. I can’t wait to see where this journey takes me and how
          much further I can push my skills in the ever-changing world of tech.
        </p>
        <h2
          onMouseEnter={props.enter}
          onMouseLeave={props.leave}
          className="text-5xl mb-24 mt-10 font-bold self-center"
        >
          WHAT DO I ADD?
        </h2>
        <div className="flex justify-center w-full gap-16 mb-16">
          <div className="w-full max-w-[500px]">
            <h2 className="text-left text-lg font-bold pb-5">
              Front-End Expertise
            </h2>
            <p className="text-left">
              I specialize in building responsive, user-friendly interfaces that
              prioritize both functionality and aesthetics. With hands-on
              experience in frameworks like Svelte and React, coupled with
              styling tools like TailwindCSS, I can create visually engaging
              designs that work seamlessly across devices. My focus is always on
              delivering intuitive user experiences that leave a lasting
              impression.
            </p>
          </div>
          <div className="w-full max-w-[500px]">
            <h2 className="text-left font-bold text-lg pb-5">
              Problem-Solving Mindset
            </h2>
            <p className="text-left">
              I thrive on tackling challenges and finding creative solutions to
              complex problems. Whether it’s debugging code, optimizing
              performance, or implementing new features, I approach every task
              with persistence and curiosity. My ability to quickly adapt to new
              tools and frameworks ensures that I’m always equipped to handle
              the demands of a fast-paced development environment.
            </p>
          </div>
          <div className="w-full max-w-[500px]">
            <h2 className="text-left font-bold text-lg pb-5">
              Passion for Growth
            </h2>
            <p className="text-left">
              I am deeply committed to continuous learning and improvement. From
              mastering API integration to refining state management techniques,
              I consistently seek out opportunities to expand my skill set and
              stay ahead of industry trends. My enthusiasm for growth allows me
              to bring fresh ideas and innovative solutions to every project I
              work on.
            </p>
          </div>
        </div>
      </div>
      <h2
        onMouseEnter={props.enter}
        onMouseLeave={props.leave}
        className="text-center text-5xl self-center font-bold text-[#eee] pb-10"
      >
        <RevealLinks
          size={"text-3xl md:text-4xl lg:text-5xl"}
          word={"<TechStack>"}
        />
      </h2>

      <div className="flex justify-center gap-10 m-auto">
        <div className="flex gap-14 relative justify-center">
          <motion.img
            onMouseEnter={props.drag}
            onMouseLeave={props.leave}
            drag
            dragConstraints={{ top: -5, left: -5, bottom: 5, right: 5 }}
            dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className=" w-20 "
            src="https://skillicons.dev/icons?i=react"
          />
          <motion.img
            onMouseEnter={props.drag}
            onMouseLeave={props.leave}
            drag
            dragConstraints={{ top: -5, left: -5, bottom: 5, right: 5 }}
            dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className=" w-20 "
            src="https://skillicons.dev/icons?i=svelte"
          />
          <motion.img
            onMouseEnter={props.drag}
            onMouseLeave={props.leave}
            drag
            dragConstraints={{ top: -5, left: -5, bottom: 5, right: 5 }}
            dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="w-20 "
            src="https://skillicons.dev/icons?i=tailwindcss"
          />
          <motion.img
            onMouseEnter={props.drag}
            onMouseLeave={props.leave}
            drag
            dragConstraints={{ top: -5, left: -5, bottom: 5, right: 20 }}
            dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="w-20 "
            src="https://skillicons.dev/icons?i=javascript"
          />
          <motion.img
            onMouseEnter={props.drag}
            onMouseLeave={props.leave}
            drag
            dragConstraints={{ top: -5, left: -5, bottom: 5, right: 5 }}
            dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="w-20 "
            src="https://skillicons.dev/icons?i=typescript"
          />
          <motion.img
            onMouseEnter={props.drag}
            onMouseLeave={props.leave}
            drag
            dragConstraints={{ top: -5, left: -5, bottom: 5, right: 5 }}
            dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="w-20 "
            src="https://skillicons.dev/icons?i=git"
          />
          <motion.img
            onMouseEnter={props.drag}
            onMouseLeave={props.leave}
            drag
            dragConstraints={{ top: -5, left: -5, bottom: 5, right: 5 }}
            dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="w-20 "
            src="https://skillicons.dev/icons?i=github"
          />
          <motion.img
            onMouseEnter={props.drag}
            onMouseLeave={props.leave}
            drag
            dragConstraints={{ top: -5, left: -5, bottom: 5, right: 5 }}
            dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="w-20 "
            src="https://skillicons.dev/icons?i=html"
          />
          <motion.img
            onMouseEnter={props.drag}
            onMouseLeave={props.leave}
            drag
            dragConstraints={{ top: -5, left: -5, bottom: 5, right: 5 }}
            dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="w-20 "
            src="https://skillicons.dev/icons?i=css"
          />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={deepWater}
          fillOpacity="1"
          d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,154.7C672,149,768,107,864,90.7C960,75,1056,85,1152,90.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
