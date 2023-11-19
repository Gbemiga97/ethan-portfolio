import { Route, Routes, useLocation } from "react-router-dom"
import { About, Contact, Home, Services, Testimonials, Work } from "../pages"
import { AnimatePresence, motion } from "framer-motion"
import { Transition } from "."

const AnimRoutes = () => {
    const location = useLocation()

  return (
    <AnimatePresence initial={true}  mode="wait">
        <motion.div key={location.pathname} className="h-full">
        <Transition />
   <Routes key={location.pathname} location={location} >
    <Route path="/ethan-portfolio" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/work" element={<Work />} />
    <Route path="/testimonials" element={<Testimonials />} />
    <Route path="/contact" element={<Contact />} />
   </Routes>
   </motion.div>
   </AnimatePresence>
  )
}

export default AnimRoutes