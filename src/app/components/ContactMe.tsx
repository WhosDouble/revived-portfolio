import { motion } from "framer-motion";

function ContactMe(props: any) {
  return (
    <div className="flex flex-col justify-center items-center w-full p-10 pt-24 pb-28 gap-10 bg-[#175f74] dark:bg-[#020f1f]">
      <div className="flex gap-8 items-center">
        <h1 className=" text-gray-400 text-7xl font-bold">CONTACT ME!</h1>
        <a href="mailto:rangocode23@gmail.com">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="bg-[#508C9B] p-5 cursor-none text-[#eee] font-semibold rounded-full"
          >
            Send Email
          </motion.button>
        </a>
      </div>
      <div className="">
        <h2 className="text-white">
          you've made it to the bottom of the ocean congrats
        </h2>
      </div>
    </div>
  );
}
export default ContactMe;
