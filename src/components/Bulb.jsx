import { images } from "../utils"


const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 
    mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <img 
      width={200}
      height={200}
      src={images.Bulb} 
      alt="bulb"
      className="w-full h-full"
      />
    </div>
  )
}

export default Bulb