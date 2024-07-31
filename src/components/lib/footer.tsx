import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

function Footer() {
   return (
      <footer className="flex flex-col gap-3 px-4 md:px-10 flex-wrap md:flex-nowrap font-nav w-[100%] pb-8">
         <div className="flex justify-center gap-6 md:justify-between border-b  flex-wrap md:flex-nowrap border-b-gray-300 w-[100%] pb-8">
            <div className="flex flex-col items-start">
            <h5 className="font-logo text-3xl font-semibold px-2">
               Foodieland
            </h5>
            <p  className=" px-2 pt-2 font-[400] text-[12px]">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates sint repellat 
            </p>
            </div>
            <ul className="flex justify-between w-[100%] md:w-fit md:justify-normal md:gap-12 items-center appearance-none">
               <li>
                  <Link to={'/recipe'}  className="text-xs md:text-sm font-[500] hover:border-b-2 pb-1 border-b-black tracking-tight">
                     Recipes
                  </Link>
               </li>
               <li>
                  <Link to={'/'}  className="text-xs md:text-sm font-[500] hover:border-b-2 pb-1 border-b-black tracking-tight">
                     Blog
                  </Link>
               </li>
               <li>
                  <Link to={'/'}  className="text-xs md:text-sm font-[500] hover:border-b-2 pb-1 border-b-black tracking-tight">
                     Contact
                  </Link>
               </li>
               <li>
                  <Link to={'/'}  className="text-xs md:text-sm font-[500] hover:border-b-2 pb-1 border-b-black tracking-tight">
                     About us
                  </Link>
               </li>
            </ul>
         </div>
         <div className="flex gap-4 justify-center md:justify-between w-[100%] ml-auto pt-4 flex-wrap md:flex-nowrap"> 
            <div></div>
            <p  className=" px-2 pt-2 font-[400] text-[14px]">
               ©2020 Flowbase. Powered by <span className="text-red-500"> Webflow</span>
            </p>
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
         </div>
      </footer>
      
   )
}

export default Footer
