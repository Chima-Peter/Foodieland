import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
function DesktopNav() {
  return (
      <nav className="flex w-[100%] items-center p-4 px-6 justify-between border-b border-b-gray-300">
         <h1 className="font-logo text-3xl font-semibold ">
            Foodieland
         </h1>
         <ul className="flex gap-12 items-center appearance-none font-nav">
            <li>
               <Link to={'/'} className="text-sm font-[500] hover:border-b-2 pb-1 border-b-black tracking-tight">
                  Home
               </Link>
            </li>
            <li>
               <Link to={'/recipe'}  className="text-sm font-[500] hover:border-b-2 pb-1 border-b-black tracking-tight">
                  Recipes
               </Link>
            </li>
            <li>
               <Link to={'/'}  className="text-sm font-[500] hover:border-b-2 pb-1 border-b-black tracking-tight">
                  Blog
               </Link>
            </li>
            <li>
               <Link to={'/'}  className="text-sm font-[500] hover:border-b-2 pb-1 border-b-black tracking-tight">
                  Contact
               </Link>
            </li>
            <li>
               <Link to={'/'}  className="text-sm font-[500] hover:border-b-2 pb-1 border-b-black tracking-tight">
                  About us
               </Link>
            </li>
         </ul>
         <ul className="flex gap-6 items-center appearance-none">
            <li>
               <Link to={''}>
                  <FaFacebookF className="w-4 h-4" />
               </Link>
            </li>
            <li>
               <Link to={''}>
                  <FaTwitter className="w-4 h-4" />
               </Link>
            </li>
            <li>
               <Link to={''}>
                  <FaInstagram className="w-4 h-4" />
               </Link>
            </li>
         </ul>
      </nav>
  )
}

export default DesktopNav
