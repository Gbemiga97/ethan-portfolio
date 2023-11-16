import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiBehanceLine,
  RiPinterestLine,
  RiDribbbleLine
} from 'react-icons/ri'
import { Link } from 'react-router-dom'


const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link 
      className="hover:text-accent transition-all duration-300"
      to="#"
      >
      <RiYoutubeLine />
      </Link>
      <Link 
      className="hover:text-accent transition-all duration-300"
      to="#"
      >
      <RiInstagramLine />
      </Link>
      <Link 
      className="hover:text-accent transition-all duration-300"
      to="#"
      >
      <RiFacebookLine />
      </Link>
      <Link 
      className="hover:text-accent transition-all duration-300"
      to="#"
      >
      <RiDribbbleLine />
      </Link>
      <Link 
      className="hover:text-accent transition-all duration-300"
      to="#"
      >
      <RiBehanceLine />
      </Link>
      <Link 
      className="hover:text-accent transition-all duration-300"
      to="#"
      >
      <RiPinterestLine />
      </Link>
    </div>
  )
}

export default Socials