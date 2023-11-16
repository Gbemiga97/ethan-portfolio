import { Link } from "react-router-dom"
import { images } from "../utils"
import {Socials} from "."

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className='container mx-auto'>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">

          <Link
          to='/'
          >
          <img 
          src={images.Logo} 
          alt="logo"
          width={220}
          height={48}
          />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  )
}

export default Header