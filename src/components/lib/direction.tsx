import { useState } from "react"
import { FaCircleCheck } from "react-icons/fa6"

function Direction() {
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
         <p className="font-[400] tracking-wider text-[13px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, magni ad. Magnam, qui! Corrupti, ipsam alias aperiam, nihil, laudantium distinctio fuga dolorum culpa maiores provident cupiditate in necessitatibus consequuntur assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, excepturi repellendus vero nulla quibusdam magni eaque veniam fugiat? Odio quisquam deleniti alias modi aliquam earum dolore tempora necessitatibus corporis magni!
         </p>
      </div>
   )
}

export default Direction
