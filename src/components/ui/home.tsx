import MediaQuery from "react-responsive"
import DesktopNav from "../lib/desktop_nav"
import { useBaseContext } from "../../App"
import { BiSolidAlarm } from "react-icons/bi";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaPlayCircle } from "react-icons/fa";
import Recipe from "../lib/recipe";
import { FaInstagram } from "react-icons/fa6";


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

   const recipe = [
      {
         image: 'beef',
         text: 'Big and Juicy Wagyu Beef Cheeseburger'
      },
      {
         image: 'salmon',
         text: 'Fresh Lime Roasted Salmon with Ginger Sauce'
      },
      {
         image: 'strawberry',
         text: 'Strawberry Oatmeal Pancake with Honey Syrup'
      },
      {
         image: 'salad',
         text: 'Fresh and Healthy Mixed Mayonnaise Salad'
      },
      {
         image: 'meatballs',
         text: 'Chicken Meatballs with Cream Cheese'
      },
      // Empty object for the ad image
      {
         image: '',
         text: ''
      },
      {
         image: 'fruity',
         text: 'Fruity Pancake with Orange & Blueberry'
      },
      {
         image: 'rice',
         text: 'The Best Easy One Pot Chicken and Rice'
      },
      {
         image: 'pasta',
         text: 'The Creamiest Creamy Chicken and Bacon Pasta'
      },
   ]
   // Array of recipe data

   const imgArray = [1,2,3,4]

   const backgroundImage = `url(${base}images/chef/chef.png)`
   // setting background image for div

  return (
   <main className='flex flex-col gap-8 box-border overflow-hidden'>
      {/* Create nav for desktop view */}
      <MediaQuery minWidth={768}>
            <DesktopNav />
      </MediaQuery>
      <section className="w-[100%] px-4 md:px-10 flex flex-col gap-20">

         {/* MAIN */}

         <div className="bg-[#E7FAFE] flex rounded-3xl relative justify-between md:flex-row flex-col flex-1">
            <div className="font-nav flex flex-col items-start shrink gap-6 px-6 py-14 w-fit">
               <div className="px-4 py-3 flex w-fit shadow-xl items-center gap-2 rounded-3xl bg-white">
                  <img src= {`${base}images/main/img1.png`} className="w-5 h-5" alt="recipes" />
                  <p className="text-sm font-[600]">
                     Hot recipes
                  </p>
               </div>
               <div>
                  <h1 className="font-[600] text-[30px] md:text-[40px] lg:text-[50px] ">
                     Spicy delicious
                  </h1>
                  <h1 className="font-[600] text-[30px] md:text-[40px] lg:text-[50px] ">
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
                     <button type="button" className="font-[600] text-[14px] leading-[17px] tracking-tight">
                        View recipes
                     </button>
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

         {/* CATEGORIES */}

         <div className="font-nav w-[100%] flex flex-col gap-8">
            <div className="flex w-[100%] justify-between items-center">
               <h3 className="font-[600] text-[18px] md:text-[24px] tarcking-[-4%]">
                  Categories
               </h3>
               <button type="button" className="bg-[#E7FAFE] font-[600] px-5 h-fit py-3 rounded-xl text-[13px] leading-[17px] tracking-tight">
                  View All Categories
               </button>
            </div>
            <div className="flex w-[100%] flex-wrap gap-4 justify-center md:justify-between">
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

         {/* SIMPLE & TASTY RECIPES */}

         <div className="flex flex-col gap-12 w-[100%]">
            <div className="flex flex-col items-center w-[100%]">
               <h3 className="font-[600] text-[36px] text-center tracking-[-4%]">
                  Simple and tasty recipes
               </h3>
               <p className="font-[400] w-[90vw] md:w-[75ch] text-[14px] text-center leading-[28px] tracking-tight">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, labore ipsam corporis consequatur aperiam amet omnis non voluptatibus dolorem enim dicta repudiandae debitis nulla quis animi dolores facilis explicabo ea?
               </p>
            </div>
            <div className="w-[100%] flex flex-wrap md:justify-between gap-x-4 gap-y-4 md:gap-y-8 justify-center lg:gap-y-10">
               {
                  recipe.map((value, index) => (
                     (index != 5) ? <Recipe image= {value.image} text= {value.text} /> : <img src={`${base}images/recipe/ads.png`} alt="ADS" className="w-[300px]"/>
                  ))
               }
            </div>
         </div>
         {/* CHEF IMAGE SECTIOn */}

         <div className="w-[100%] items-center gap-4 justify-center flex flex-col md:flex-row md:justify-center">
            <div className="flex flex-col gap-4 w-[90vw] px-2 md:w-[75ch]">
               <h3 className="font-[600] text-[32px] md:text-[36px] leading-[40px] md:leading-[50px]">
                  Everyone can be a chef in their own kitchen
               </h3>
               <p className="font-[400] text-[16px] text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, sed expedita consequatur ipsum in perspiciatis reprehenderit illo consectetur consequuntur quisquam hic perferendis neque id labore ut ea velit provident quae?
               </p>
               <button type="button" className="mt-8 font-[600] text-[14px] bg-black text-white px-6 py-3 tracking-tight h-fit w-fit rounded-xl">
                  View recipes
               </button>
            </div>
            <div className="bg-gradient-to-b from-white to-[#E7F9FD] rounded-b-xl">
               <div style={{backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center'}} className="w-[96vw] md:w-[500px] h-[450px]">
                  <div className="w-[100%] px-4 flex justify-between translate-y-[80px]">
                     <img src={`${base}images/chef/meat.png`} alt="meat" className="w-[50px] h-[50px]"/>
                     <img src={`${base}images/chef/onions.png`} alt="onions" className="w-[30px] h-[30px] translate-x-[-50px] md:translate-x-[-100px]"/>
                  </div>
                  <img src={`${base}images/chef/vegan.png`} alt="vegan" className="float-right mr-7 translate-y-[90px] w-[40px] h-[40px]" />
                  <img src={`${base}images/chef/apple.png`} alt="apple" className="w-[30px] h-[30px] translate-y-[300px] md:translate-x-[-15px]"/>
               </div>
            </div>
         </div>
      </section>
      {/* FOODIE ISLAND */}
      <section className="flex flex-col gap-4 w-[100%] bg-gradient-to-b px-4 pb-12 from-white to-[#E7F9FD] md:px-10 ">
         <div className="flex flex-col gap-2 items-center w-[100%] mb-6">
            <h3 className="font-[600] text-[36px] text-center tracking-[-4%]">
               Check out @foodieland on Instagram
            </h3>
            <p className="font-[400] w-[90vw] md:w-[75ch] text-[14px] text-center tracking-tight">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, labore ipsam corporis consequatur aperiam amet omnis non voluptatibus dolorem enim dicta repudiandae debitis nulla quis animi dolores facilis explicabo ea?
            </p>
         </div>
         <div className="w-[100%] flex flex-wrap gap-2 md:justify-between">
            {
               imgArray.map(value => (
                  <img src= {`${base}images/instagram/${value}.png`} className="w-[250px]" alt={`image ${value}`} />
               ))
            }
         </div>
         <button type="button" className="mt-8 flex gap-2 items-center self-center font-[600] text-[14px] bg-black text-white px-6 py-3 tracking-tight h-fit w-fit rounded-xl">
            <span>
               Visit Our Instagram
            </span>
            <FaInstagram className="w-5 h-5"/>
         </button>
      </section>
   </main>
  )
}

export default Home
