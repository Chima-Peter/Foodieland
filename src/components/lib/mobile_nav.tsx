import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancelPresentation } from "react-icons/md";

function MobileNav() {
   const [icon, setIcon] = useState(true)
   const [animateState, setAnimateState] = useState('animate')

   const handleNavEntry = () => {
      setIcon(false)
      setAnimateState('animate')

      // Set animation for entry
   }

   // toggling the hamburger menu to show menu

   const handleNavExit = () => {
      setTimeout(() => {setIcon(true)}, 400)
      // delay removal of menu so animation can work first

      setAnimateState('exit')

      // Set animation for exit
   }
   // toggling the hamburger menu to hide menu

   const slideVariants = {
      initial: {
         x: '-10%',
         opacity: 0
      },
      animate: {
         x: 0,
         opacity: 1
      },
      exit: {
         x: '-10%',
         opacity: 0
      }
   }
   // animation to show menu

  return (
      <nav className="flex fixed bg-white z-50 w-[100%] flex-col gap-4 p-4 px-4 border-b border-b-gray-300">
         <div className="w-[100%] flex justify-between items-center">
            <h1 className="font-logo text-3xl font-semibold ">
               Foodieland
            </h1>
            {
               icon && <GiHamburgerMenu className="w-7 h-7" onClick={handleNavEntry} />
            }
            {
               !icon && <MdCancelPresentation className="w-7 h-7" onClick={handleNavExit} />
            }
            
         </div>
         {
            !icon && <motion.div  
               className='text-xs font-medium flex box-border flex-col gap-8 px-4 pb-4 h-[100vh]'
               variants={slideVariants}
               initial='initial'
               animate={animateState}
               transition= {{
                     ease: 'linear',
                     duration: 0.3
               }}>
               <ul className="flex gap-6 flex-col items-start appearance-none font-nav">
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
               <ul className="flex gap-6 justify-start appearance-none">
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
         </motion.div>
         }
      </nav>
  )
}

export default MobileNav
