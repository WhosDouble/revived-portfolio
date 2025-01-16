import { motion } from "framer-motion";

function ContactMe(props: any) {
  return (
    <div className=" bg-[#175f74] dark:bg-[#020f1f]">
      <motion.div
        drag
        style={{ transform: "rotate(-4deg)" }}
        className="w-[650px] bg-white p-3 border border-[#ccc] text-center inline-block m-5 relative "
      >
        <img
          className="w-full mt-3 h-auto block"
          src="/mountain.png"
          alt="image of yours truly"
          onDragStart={(e) => e.preventDefault()}
        />
        <p className="font-bold pt-4 text-xl">this is my blah blah blah</p>
      </motion.div>
      <motion.div
        drag
        style={{ transform: "rotate(-4deg)" }}
        className="w-[650px] bg-white p-3 border border-[#ccc] text-center inline-block m-5 relative "
      >
        <img
          className="w-full mt-3 h-auto block"
          src="/mountain.png"
          alt="image of yours truly"
          onDragStart={(e) => e.preventDefault()}
        />
        <p className="font-bold pt-4 text-xl">this is my blah blah blah</p>
      </motion.div>
      <motion.div
        drag
        style={{ transform: "rotate(-4deg)" }}
        className="w-[650px] bg-white p-3 border border-[#ccc] text-center inline-block m-5 relative "
      >
        <img
          className="w-full mt-3 h-auto block"
          src="/mountain.png"
          alt="image of yours truly"
          onDragStart={(e) => e.preventDefault()}
        />
        <p className="font-bold pt-4 text-xl">this is my blah blah blah</p>
      </motion.div>
    </div>
  );
}
export default ContactMe;
