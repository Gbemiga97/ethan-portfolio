import { images } from "../utils"


const Circles = () => {
  return (
    <div
    className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2
    mix-blend-color-dodge animate-pulse duration-75 z-10"
    >
      <img 
      className="w-full h-full"
      width={260}
      height={200}
      src={images.Circle} 
      alt="circle" />
    </div>
  )
}

export default Circles