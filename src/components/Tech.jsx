import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { motion } from "motion/react";
import { IoLogoVue } from "react-icons/io5";
import { RiSvelteFill } from "react-icons/ri";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col justify-center items-center gap-8 md:gap-16"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-4xl selection:bg-purple-300 selection:text-yellow-900 font-light text-neutral-950 border-b-2 border-red-700"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-6 p-5 sm:text-xs">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <BiLogoPython className="cursor-pointer text-[80px] text-red-700 transition-all duration-200 hover:-translate-y-3" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <BiLogoJavascript className="cursor-pointer text-[80px] text-red-700 transition-all duration-200 hover:-translate-y-3" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <IoLogoVue className="cursor-pointer text-[80px] text-red-700 transition-all duration-200 hover:-translate-y-3" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <RiSvelteFill className="cursor-pointer text-[80px] text-red-700 transition-all duration-200 hover:-translate-y-3" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <BiLogoReact className="cursor-pointer text-[80px] text-red-700 transition-all duration-200 hover:-translate-y-3" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-red-700 transition-all duration-200 hover:-translate-y-3" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <BiLogoNodejs className="cursor-pointer text-[80px] text-red-700 transition-all duration-200 hover:-translate-y-3" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <BiLogoMongodb className="cursor-pointer text-[80px] text-red-700 transition-all duration-200 hover:-translate-y-3" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <SiMysql className="cursor-pointer text-[80px] text-red-700 transition-all duration-200 hover:-translate-y-3" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
