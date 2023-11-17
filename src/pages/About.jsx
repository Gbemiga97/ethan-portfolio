import { useState } from "react"
import { Avatar, Circles } from "../components"
import { motion } from "framer-motion"
import { data, variants } from "../utils"
import CountUp from "react-countup"


const About = () => {

  const [index, setIndex] = useState(0)

  return ( 
    <section className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div 
      variants={variants.fadeIn('right', 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col  items-center xl:flex-row gap-x-6">

        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 
          variants={variants.fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2">
            Captivating 
            <span className="text-accent"> stories </span>
            birth magnificent designs.
          </motion.h2>
          <motion.p 
          variants={variants.fadeIn('right', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            10 years ago, I began freelancing as a developer,
            Since then, I've done remote work for agencies, 
            consulted for startup, and collaborated on digital 
            products for business and consumer use.   
          </motion.p>
          {/* counters */}
          <motion.div 
          variants={variants.fadeIn('right', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">

              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
              after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp
                  start={0}
                  end={10}
                  duration={5}
                  />+
                </div>
                <p className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience</p>
                </div>

                      {/* Clients */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
              after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp
                  start={0}
                  end={250}
                  duration={5}
                  />+
                </div>
                <p className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients</p>
                </div>


                {/* Projects  */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
              after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp
                  start={0}
                  end={650}
                  duration={5}
                  />+
                </div>
                <p className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects</p>
                </div>


                    {/* awards */}
                <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp
                  start={0}
                  end={8}
                  duration={5}
                  />+
                </div>
                <p className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards</p>
                </div>
            </div>
          </motion.div>

           
        </div>


                  {/* Info */}
        <motion.div 
        variants={variants.fadeIn('left', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex-1 flex flex-col w-full xl:max-w-[48%] h-[480px] ">
          <div className="flex gap-x-4 xl:gap-x-8 justify-center xl:justify-normal mx-auto xl:mx-0 mb-4">
            {
              data.aboutData.map(({title}, i) => (
                <div 
                className={`${index === i && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(i)}
                key={i}>
                  {title}
                </div>
              ))
            }
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
            {
              data.aboutData[index].info.map(({title, stage, icons}, i) => (
                <div
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 "
                key={i}>
                  <h2 className="font-light mb-2 md:mb-0"
                  >{title}</h2>
                  <div className="hidden md:flex">-</div>
                  <p>{stage}</p>
                  <div className="flex gap-x-4">
                  {
                    icons?.map((icon, i) => (
                      <div 
                      className="text-2xl text-white"
                      key={i}>
                        {icon}
                      </div>
                    ))
                  }
                  </div>

                </div>
              ))
            }
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About