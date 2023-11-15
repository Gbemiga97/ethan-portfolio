import { NavLink } from "react-router-dom"
import { data } from "../utils"


const Nav = () => {

  

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max
    bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
   <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center
    gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl 
    xl:text-xl xl:rounded-full">
    {
      data.navData.map(({name, path, icon}, i) => (
        <NavLink
        key={i}
        to={path}
        className={(({isActive}) => isActive ? 'text-accent group' : 'group')}
        >
         <div className="absolute pr-14 right-0 hidden  xl:group-hover:flex">
          <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
          <p className="text-[12px] text-primary leading-none font-semibold capitalize">
            {name}</p>
            <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] 
            absolute -right-[0.4rem]  " />
          </div>
         </div>
          <div>{icon}</div>
        </NavLink>
      ))
    }
   </div>
   </nav>
  )
}

export default Nav