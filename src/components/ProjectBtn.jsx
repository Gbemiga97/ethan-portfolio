import { HiArrowRight } from "react-icons/hi2"
import { Link } from "react-router-dom"
import { images } from "../utils"



const ProjectBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
      to={'/work'}
      className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar
      bg-cover bg-center bg-no-repeat group"
      >
      <img 
      className="animate-spin-slow"
      src={images.RoundedText} 
      alt="my_projects w-full h-full max-w-[141px] max-h-[148px]" />
      <HiArrowRight
      className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"
      />
      </Link>
    </div>
  )
}

export default ProjectBtn