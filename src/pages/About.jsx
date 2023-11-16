import { useState } from "react"
import { Avatar, Circles } from "../components"
import { motion } from "framer-motion"
import { data, variants } from "../utils"

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
      className="hidden xl:flex bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex-col items-center xl:flex-row gap-x-6">
        <div>text</div>
        <div>
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
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
        </div>
      </div>
    </section>
  )
}

export default About