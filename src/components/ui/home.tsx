import MediaQuery from "react-responsive"
import DesktopNav from "../lib/desktop/desktop_nav"
import { useBaseContext } from "../../App"
import { BiSolidAlarm } from "react-icons/bi";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaPlayCircle } from "react-icons/fa";

function Home() {
   const base = useBaseContext()
   // Access basename using context from APP.tsx

   const categories = [
      {
         name: 'Breakfast',
         gradient: 'gray-200'
      },
      {
         name: 'Vegan',
         gradient: 'green-200'
      },
      {
         name: 'Meat',
         gradient: 'red-200'
      },
      {
         name: 'Dessert',
         gradient: 'pink-100'
      },
      {
         name: 'Lunch',
         gradient: 'gray-200'
      },
      {
         name: 'Chocolate',
         gradient: 'gray-200'
      },
   ]
   // Array to render categories

  return (
   <main className='flex flex-col gap-8 box-border overflow-hidden'>
      {/* Create nav for desktop view */}
      <MediaQuery minWidth={768}>
            <DesktopNav />
      </MediaQuery>
      <section className="w-[100%] px-6 flex flex-col gap-14">
         {/* MAIN IMAGE */}
         <div className="bg-[#E7FAFE] flex rounded-3xl relative justify-between md:flex-row flex-col flex-1">
            <div className="font-nav flex flex-col items-start shrink gap-6 px-6 py-14 w-fit">
               <div className="px-4 py-3 flex w-fit shadow-xl items-center gap-2 rounded-3xl bg-white">
                  <img src= {`${base}images/main/img1.png`} className="w-5 h-5" alt="recipes" />
                  <p className="text-sm font-[600]">
                     Hot recipes
                  </p>
               </div>
               <div>
                  <h1 className="font-[600] lg:text-[50px] leading-[77px] tracking-[-4%]">
                     Spicy delicious
                  </h1>
                  <h1 className="font-[600] lg:text-[50px] leading-[77px] tracking-[-4%]">
                     chicken wings
                  </h1>
               </div>
               <p className="font-[400] text-[16px] leading-[28px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a nihil voluptatibus perferendis impedit laborum ipsam iste fuga optio sunt minim
               </p>
               <div className="flex items-center gap-2 mb-8">
                  <div className="bg-gray-200 flex items-center rounded-3xl gap-2 w-fit px-5 py-2">
                     <BiSolidAlarm className="w-[24px] h-[24px]" />
                     <h2 className="font-[500] text-[14px] leading-[17px] tracking-[-2%]">
                        30 Minutes
                     </h2>
                  </div>
                  <div  className="bg-gray-200 flex items-center rounded-3xl gap-2 w-fit px-5 py-2">
                     <PiForkKnifeFill className="w-[24px] h-[24px]" />
                     <h2 className="font-[500] text-[14px] leading-[17px] tracking-[-2%]">
                        Chicken
                     </h2>
                  </div>
               </div>
               <div className="flex items-center justify-between w-[100%] mt-8 flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                     <img src={`${base}images/main/user.png`} alt="user" className="w-[50px] h-[50px] rounded-full" />
                     <div className="flex flex-col gap-2">
                        <h2 className="font-[700] text-[16px] leading-[19px] tracking-[-2%]">
                           John Smith
                        </h2>
                        <p className="font-[500] text-[14px] leading-[17px] tracking-[-2%]">
                           15 March 2022
                        </p>
                     </div>
                  </div>
                  <div className="bg-black flex gap-2 items-center w-fit px-8 py-3 rounded-xl text-white">
                     <p className="font-[600] text-[14px] leading-[17px] tracking-tight">
                        View recipes
                     </p>
                     <FaPlayCircle className="w-[20px] h-[20px]"/>
                  </div>
               </div>
            </div>
            <div className="absolute md:translate-x-[-450px] lg:translate-x-[-520px] right-0 pt-6 hidden md:block shrink-0">
               <div className="bg-black rounded-[50%] w-[150px] h-[150px] flex justify-center items-center">
                  <div className="bg-white rounded-[50%] w-[80px] h-[80px] flex justify-center items-center">
                     <img src={`${base}images/main/thumb.png`} alt="thumbs up" className="w-[50px] -rotate-[25deg] h-[50px]" />
                  </div>
               </div>
            </div>
            <img 
               src={`${base}images/desktop/home.webp`} 
               srcSet={`${base}images/mobile/home.webp 300w, ${base}images/tablet/home.webp 600w, ${base}images/desktop/home.webp 1200w`} 
               sizes='(max-width: 600px) 300px, (max-width: 1000px) 500px, 600px' 
               alt="ERROR PAGE" 
               rel='preload' 
               className="rounded-e-3xl rounded-r-3xl shrink-0"/>
         </div>
         {/* CATEGORIES PAGE */}
         <div className="font-nav w-[100%]">
            <div className="flex w-[100%] justify-between">
               <h3 className="font-[600] text-[24px] leading-[58px] tarcking-[-4%]">
                  Categories
               </h3>
               <button type="button" className="font-[600] text-[12px] leading-[19px] tracking-[-2% bg-[#E7FAFE] w-fit px-6 rounded-xl">
                  View All Categories
               </button>
            </div>
            <div className="flex w-[100%] flex-wrap gap-2 md:justify-between">
               {
                  categories.map(value => (
                     <div key={value.name} className={`flex flex-col gap-2 items-center w-fit p-6 pb-3 text-center bg-gradient-to-b from-white to-${value.gradient} rounded-b-xl`}>
                        <img src={`${base}images/categories/${value.name}.png`} alt="" className="w-[50px] h-[50px]"/>
                        <p className="font-[600] text-[12px] leading-[22px] tracking-[-2%]">
                           {value.name}
                        </p>
                     </div>
                  ))
               }
            </div>
         </div>
      </section>
   </main>
  )
}

export default Home
