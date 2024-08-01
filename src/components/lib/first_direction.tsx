import { useState } from "react"
import { FaCircleCheck } from "react-icons/fa6"

interface DirectionProps {
   num: number
}
const Direction_1: React.FC<DirectionProps> = ({ num }) => {
   const [check, setCheck] = useState(false)
   // Detect when user clicks on checked icon

   const handleIcon = () => {
      setCheck(!check)
   }
   // Toggle icon
   
   return (
      <div  className="flex flex-col gap-4 items-start w-[100%] py-4">
         <div className="flex gap-4 items-center">
            {
               check ? <FaCircleCheck onClick={handleIcon} className="w-5 h-5 cursor-pointer" /> : <div onClick={handleIcon}  className="rounded-full border border-black w-5 h-5 cursor-pointer"></div>
            }
            <h3 className={`font-extrabold text-lg ${check ? 'line-through text-gray-400' : ''}`}>
               {num}. Lorem ipsum dolor sit amet 
            </h3>
         </div>
         <p className="font-[400] tracking-wider text-[13px] text-justify leading-[24px] pl-9">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, magni ad. Magnam, qui! Corrupti, ipsam alias aperiam, nihil, laudantium distinctio fuga dolorum culpa maiores provident cupiditate in necessitatibus consequuntur assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, excepturi repellendus vero nulla quibusdam magni eaque veniam fugiat? Odio quisquam deleniti alias modi aliquam earum dolore tempora necessitatibus corporis magni!
         </p>
      </div>
   )
}

export default Direction_1
