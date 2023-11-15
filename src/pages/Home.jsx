import { motion } from "framer-motion"
import { Avatar, ProjectBtn } from "../components"
import { variants } from "../utils"


const Home = () => {
  return (
    <section className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 
      to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 
        xl:text-left h-full container mx-auto">

          <motion.h1 
          variants={variants.fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h1">
            Transforming Ideas <br /> Into 
          <span className="text-accent">
            Digital Reality
          </span>
          </motion.h1>
          <motion.p
          variants={variants.fadeIn('down', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Voluptate quo dignissimos a 
             nesciunt error similique aliquam 
            ducimus voluptates officiis dolores.
          </motion.p>

          <div className="flex justify-center xl:hidden relative">
            <ProjectBtn />
          </div>
          <motion.div
          variants={variants.fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="hidden xl:flex"
          >
            <ProjectBtn />
          </motion.div>
        </div>
      </div>

      <div className="w-[1200px] h-full absolute right-0 bottom-0 ">

        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full
        h-full absolute mix-blend-color-dodge translate-z-0 " />
      <div>particles</div>
      <div>
        <Avatar />
      </div>
      </div>
    </section>
  )
}

export default Home