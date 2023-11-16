import { images } from "../utils"


const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <img
      width={737}
      height={678}
       src={images.Avatar} 
       alt="avatar" 
       className="translate-z-0 w-full h-full"
       />
    </div>
  )
}

export default Avatar