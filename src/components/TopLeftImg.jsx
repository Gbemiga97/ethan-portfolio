import { images } from "../utils"

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge
     z-10 w-[200px] xl:w-[400px] opacity-50">
      <img
       src={images.TopLeftImg} 
       alt="top_left_img" 
       
       />
    </div>
  )
}

export default TopLeftImg