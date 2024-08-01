import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

interface IngredientProp {
   length: number,
   text: string
}
function IngredientDiv() {
   const [check, setCheck] = useState(false)
   // Detect when user clicks on checked icon

   const handleIcon = () => {
      setCheck(!check)
   }
   // Toggle icon
   
   return (
      <div  className="flex gap-4 items-center w-[100%] border-b border-b-gray-300 py-4">
         {
            check ? <FaCircleCheck onClick={handleIcon} className="w-5 h-5 cursor-pointer" /> : <div onClick={handleIcon}  className="rounded-full border border-black w-5 h-5 cursor-pointer"></div>
         }
         <p className={`font-[400] tracking-wider text-[13px] ${check ? 'line-through text-gray-400' : ''}`}>
            Lorem ipsum dolor sit, amet consectetur
         </p>
      </div>
   )
}

export function Ingredients({length, text}: IngredientProp) {
   const numberOfLorem = Array(length).fill('0')
   // Create the div x number of times

   return (
      <div className='flex flex-col mb-3'>
         <h3 className="font-extrabold text-[14px] mb-2">
         {text}
         </h3>
         {
            numberOfLorem.map((value, index) => (
               <IngredientDiv  key={`${value}+${index}`} />
            ))
         }
      </div>
   )
}
