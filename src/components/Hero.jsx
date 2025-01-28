import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pp.jpg";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const container = (delay) => ({
    hidden: {x:-100, opacity:0},
    visible: {
        x:0, 
        opacity: 1, 
        transition: {duration: 0.5, delay: delay},
    },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35" id="home">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
            <motion.h1 variants={container(0)}
            initial="hidden"
            animate="visible"
             className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                Silki Rai</motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-purple-500 bg-clip-text text-4xl tracking-tight ">
                Hello World!!</motion.span>
            <motion.p variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6">
                {HERO_CONTENT}
                <span className="flex items-center  mt-4">
                  Visit my coding profiles : 
                  <span className="flex items-center justify-center gap-8 text-3xl ml-3">
                    <a href="https://leetcode.com/u/silkirai18/" target="_blank"><SiLeetcode /></a>
                  <a href="https://www.geeksforgeeks.org/user/silkyrai18/" target="_blank">< SiGeeksforgeeks /></a>
                  </span>
                  
                </span>
                
            </motion.p>
        </div>
        </div>
        <div className="w-full h-100 lg:w-1/2 lg:p-8 mb-20">
        <div className="flex justify-center ">
            <motion.img initial={{x:100, opacity: 0}}
            animate={{x:0, opacity:1}}
            transition={{duration: 1, delay : 1.2}}
            width={380} height={200} className="my-6 rounded"
             src={profilePic} alt="Silki Rai" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero
