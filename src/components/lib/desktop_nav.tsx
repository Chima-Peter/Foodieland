import { NavLink } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

function DesktopNav() {
  return (
      <nav className="flex fixed top-0 z-50 w-[100%] bg-white items-center p-4 px-4 md:px-10 justify-between border-b border-b-gray-300">
         <h1 className="font-logo text-3xl font-semibold ">
            Foodieland
         </h1>
         <ul className="flex gap-12 items-center appearance-none font-nav">
            <li>
               <NavLink to={'/'} className="text-sm font-[500] hover:border-b-2 pb-1 border-b-black tracking-tight">
                  Home
               </NavLink>
            </li>
            <li>
               <NavLink to={'/recipe'}  className="text-sm font-[500] hover:border-b-2 pb-1 border-b-black tracking-tight">
                  Recipes
               </NavLink>
            </li>
            <li>
               <NavLink to={'_'}  className="text-sm font-[500] hover:border-b-2 pb-1 border-b-black tracking-tight">
                  Blog
               </NavLink>
            </li>
            <li>
               <NavLink to={'_'}  className="text-sm font-[500] hover:border-b-2 pb-1 border-b-black tracking-tight">
                  Contact
               </NavLink>
            </li>
            <li>
               <NavLink to={'_'}  className="text-sm font-[500] hover:border-b-2 pb-1 border-b-black tracking-tight">
                  About us
               </NavLink>
            </li>
         </ul>
         <ul className="flex gap-6 items-center appearance-none">
            <li>
               <NavLink to={''}>
                  <FaFacebookF className="w-4 h-4" />
               </NavLink>
            </li>
            <li>
               <NavLink to={''}>
                  <FaTwitter className="w-4 h-4" />
               </NavLink>
            </li>
            <li>
               <NavLink to={''}>
                  <FaInstagram className="w-4 h-4" />
               </NavLink>
            </li>
         </ul>
      </nav>
  )
}

export default DesktopNav
