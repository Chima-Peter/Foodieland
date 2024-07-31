import { useBaseContext } from "../../App"
import { BiSolidAlarm } from "react-icons/bi";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

interface RecipeProps {
   image: string,
   text: string
}
const Recipe02: React.FC<RecipeProps> = ({ image, text }) => {
   const base = useBaseContext()
   // Using base to set correct path to image

   const [favourite, setFavourite]= useState(true)
   // state to change color when clicked

   const backgroundImage = `url(${base}images/recipe02/${image}.png)`
   // setting background image for div

   const handleFavourite = () => {
      setFavourite(!favourite)
   }

  return (
      <div key={text}  className="rounded-xl flex pb-1 flex-col gap-2 bg-[#E7F9FD] font-nav w-[250px]">
         <div className="rounded-xl w-[250px] h-[130px]" 
            style={{backgroundImage,   backgroundSize: 'cover', backgroundPosition: 'center'}}>
               <div className="p-2 cursor-pointer rounded-full bg-white mr-4 float-right mt-4">
                  {
                     favourite ? <FaHeart onClick={handleFavourite} className="text-gray-400" /> : <FaHeart onClick={handleFavourite} className="text-red-500" />
                  }
               </div>
         </div>
         <h3 className="font-[600] text-[16px] tracking-[-4%] px-4">
            {text}
         </h3>
         <div className="flex justify-start gap-1">
            <div className="flex items-center rounded-3xl gap-1 w-fit px-4 py-2">
               <BiSolidAlarm className="w-[16px] h-[16px]" />
               <h2 className="font-[500] text-[12px] leading-[17px] tracking-[-2%]">
                  30 Minutes
               </h2>
            </div>
            <div  className="flex items-center rounded-3xl gap-1 w-fit px-4 py-2">
               <PiForkKnifeFill className="w-[16px] h-[16px]" />
               <h2 className="font-[500] text-[12px] leading-[17px] tracking-[-2%]">
                  Chicken
               </h2>
            </div>
         </div>
      </div>
  )
}

export default Recipe02
