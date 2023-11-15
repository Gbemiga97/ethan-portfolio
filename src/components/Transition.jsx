import { motion } from "framer-motion"
import { variants } from "../utils"





const Transition = () => {
  return (
    <div>
      <motion.div
      variants={variants.transitionVariant}
      initial='initial'
      animate="animate"
      exit="exit"
      transition={{delay: 0.2, duration: 0.6, ease: 'easeInOut'}}
      className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
      />
        <motion.div
      variants={variants.transitionVariant}
      initial='initial'
      animate="animate"
      exit="exit"
      transition={{delay: 0.4, duration: 0.6, ease: 'easeInOut'}}
      className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]"
      />
        <motion.div
      variants={variants.transitionVariant}
      initial='initial'
      animate="animate"
      exit="exit"
      transition={{delay: 0.6, duration: 0.6, ease: 'easeInOut'}}
      className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]"
      />
     
    </div>
  )
}

export default Transition