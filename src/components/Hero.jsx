import { motion } from "motion/react"
import pfp from "../assets/pfp.jpg"

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:py-28 selection:bg-purple-300 selection:text-yellow-900">
        <div className="flex flex-col items-center justify-center gap-10 text-white">
            <motion.div
                initial = {{y: -50, opacity: 0}}
                animate = {{y: 0, opacity: 1}}
                transition= {{duration: 0.3, delay:0.2}}
            >
              <img src={pfp} alt="" className=" mt-12 h-auto w-[90%] max-w-[350px] cursor-pointer rounded-3xl shadow-xl shadow-neutral-400 transition-all duration-200 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-neutral-300"/>
            </motion.div>

              <motion.div className="flex max-w-[600px] flex-col items-center justify-center text-center gap-3 "

                  initial = {{y: 50, opacity: 0}}
                  animate = {{y: 0, opacity: 1}}
                  transition = {{duration: 0.3, delay: 0.2}}

              >
                  <h1 className="text-neutral-950 font-semibold text-4xl">Shalap Pandotra</h1>
                  <h3 className="text-neutral-950 font-semibold">Developer</h3>
                  <p className="text-neutral-950 ">Hi! I'm a passionate web developer with a knack for learning and crafting responsive, user-friendly web applications. I specialize in modern frontend technologies like React and Tailwind CSS, complemented by my experience in backend development with tools such as Angular, MySQL and MongoDB. I thrive on solving complex problems and bringing ideas to life through clean, efficient code. Whether it's building dynamic UIs or designing robust backend systems, I enjoy every step of the development process. Let’s create something amazing together! <br />
                  Ps this website is also made with React ;)
                  </p>
              </motion.div>
        </div>
    </div>
  )
}

export default Hero
