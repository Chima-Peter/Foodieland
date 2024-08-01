import MediaQuery from "react-responsive"
import DesktopNav from "../lib/desktop_nav"
import MobileNav from "../lib/mobile_nav"
import Footer from "../lib/footer"
import { IoPlay } from "react-icons/io5";
import { useBaseContext } from "../../App";
import { PiForkKnifeFill } from "react-icons/pi";
import { IoAlarm } from "react-icons/io5";
import { FiPrinter, FiShare } from "react-icons/fi";
import { Ingredients } from "../lib/ingredients";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { isEmail } from "validator";

function Recipe() {
   const base = useBaseContext()
   // getting base name
   const backgroundImage = `url(${base}images/main/recipe.png)`
   //setting background image for first image

   const [email, setEmail] = useState(false)
   // state to check if email is verified

   const emailRef = useRef<HTMLInputElement>(null)
   //Accessing the email input

   const navigate = useNavigate()
   // for routing programmatically

   const nutrition = [
      {
         name: 'Calories',
         amount: '219.9 kcal'
      },
      {
         name: 'Total Fat',
         amount: '10.7 g'
      },
      {
         name: 'Protein',
         amount: '7.9 g'
      },
      {
         name: 'Carbohydrate',
         amount: '22.3 g'
      },
      {
         name: 'Cholesterol',
         amount: '37.4 mg'
      },
   ]
   // Array of nutritional information

   const verifyEmail = (event: React.FocusEvent<HTMLInputElement>) => {
      if (isEmail(event.target.value)) setEmail(true)
      else {
         setEmail(false)
         if (emailRef.current)
            emailRef.current.focus()
         // check emailRef.current to prevent null value then makes email field point of focus if email is invalid
      }
   }

   // handle submit only if email is valid
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (email) navigate('/')
      else {
         if (emailRef.current)
            emailRef.current.focus()
      }
   }

   return (
      <main className='flex flex-col gap-10 font-nav box-border  overflow-hidden'>
         <MediaQuery minWidth={769}>
               <DesktopNav />
         </MediaQuery>
         <MediaQuery maxWidth={768}>
               <MobileNav />
         </MediaQuery>

         {/* FIRST SECTION */}

         <section className="px-4 md:px-10 flex w-[100%] gap-8 justify-between flex-wrap  mt-[120px]">
            <div className=" items-start flex flex-col gap-8 md:gap-12">
               <h1 className="font-[600] text-3xl md:text-[48px]">
                  Health Japanese Fried Rice
               </h1>
               <div className="flex flex-wrap justify-between md:justify-normal gap-4 md:gap-0">
                  <div className="flex items-center gap-3 px-3 md:pr-6 py-0 md:border-r md:border-r-gray-300">
                     <img src={`${base}images/main/user.png`} alt="user" className="w-[50px] h-[50px] rounded-full" />
                     <div className="flex flex-col">
                        <h2 className="font-[600] text-[14px]">
                           John Smith
                        </h2>
                        <p className="font-[400] text-[12px]">
                           15 March 2022
                        </p>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 px-3 md:px-6 py-0 md:border-r md:border-r-gray-300">
                     <IoAlarm  className="w-[24px] h-[24px]"/>
                     <div className="flex flex-col">
                        <h2 className="font-[600] text-[14px]">
                           Prep Time
                        </h2>
                        <p className="font-[400] text-[12px]">
                           15 Minutes
                        </p>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 px-3 md:px-6 py-0 md:border-r md:border-r-gray-300">
                     <IoAlarm  className="w-[24px] h-[24px]"/>
                     <div className="flex flex-col">
                        <h2 className="font-[600] text-[14px]">
                           Cook Time
                        </h2>
                        <p className="font-[400] text-[12px]">
                           15 Minutes
                        </p>
                     </div>
                  </div>
                  <div  className="flex items-center rounded-3xl gap-3 w-fit px-3 md:px-6 py-0">
                     <PiForkKnifeFill className="w-[24px] h-[24px]" />
                     <h2 className="font-[500] text-[14px] leading-[17px] tracking-[-2%]">
                        Chicken
                     </h2>
                  </div>
               </div>
            </div>
            <div className="flex gap-6 items-center  w-[100%] md:w-fit justify-between">
               <div className="p-5 bg-[#E7FAFE] rounded-full">
                  <FiPrinter className="w-4 h-4" />
               </div>
               <div className="p-5 bg-[#E7FAFE] rounded-full">
                  <FiShare className="w-4 h-4" />
               </div>
            </div>
         </section>
         
         {/* SECOND SECTION */}

         <section className="flex w-[100%] px-4 md:px-10 justify-center md:justify-between gap-4 flex-wrap">
            <div  
               className="flex justify-center items-center w-[100%] h-[400px] rounded-2xl md:w-[600px] lg:w-[800px]"
               style={{backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center'}}>
               <div className="rounded-full p-4 bg-gray-100">
                  <IoPlay className="w-5 h-5"/>
               </div>
            </div>
            <div className=" w-[100%] md:w-[350px] h-[400px] rounded-2xl flex flex-col justify-between p-5 bg-[#E7FAFE]">
               <div className="flex flex-col gap-3">
                  <h2 className="text-[18px] font-[600]">
                     Nutrition Information
                  </h2>
                  <div className="flex-col flex items-center">
                     {
                        nutrition.map(value => (
                           <div key={value.amount} className="w-[100%] flex justify-between py-2 border-b border-b-gray-300">
                              <p className="text-[12px] font-[500]">
                                 {value.name}
                              </p>
                              <p className="text-[12px] font-[600]">
                                 {value.amount}
                              </p>
                           </div>
                        ))
                     }
                  </div>
               </div>
               <p className="text-center font-[400] text-[12px] tracking-wide">
                  oluptatibus quasi esse quisquam accusantium qui inventore osam corporis perspiciatis hic!
               </p>
            </div>
         </section>

         {/* LOREM TEXT */}

         <p className="w-[100%] px-4 md:px-10 text-[12px] font-[400] tracking-wide text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eim unex in iure, harum similique deleniti laborum corrupti praesentium culpa dignissimos, minus vel nisi possimus voluptas architecto dolores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nobis accusamus officiis molestias ducimus, deserunt aperiam eius voluptates dicta est. Ducimus incidunt dolore suscipit eum natus tempore fugiat? Architecto, odio. Lorem, ipsum dolor sit amet cpore minus nesciunt saepe rem, fugiat id omnis!
         </p>

         {/* INGREDIENTS & OTHER RECIPE SECTION */}

         <section className="flex justify-start md:justify-between w-[100%] sm:flex-wrap px-4 md:px-10">
            <div className="flex flex-col gap-6 w-[100%] md:w-[55vw]">
               <h3 className="font-[600] text-[24px]">
                  Ingredients
               </h3>
               <Ingredients text="For main dish" length={5} />
               <Ingredients text="For the sauce" length={3} />
            </div>
            <div className="flex flex-col gap-3">
               <h3 className="font-[600] justify-start text-[20px]">
                  Other Recipe
               </h3>
               <div className="flex flex-col  w-[300px] gap-3">
                  <div className="flex gap-2 items-center">
                     <img src={`${base}images/recipe/meatballs.png`} alt="" className="w-[120px] h-[80px] rounded-2xl"/>
                     <div className="flex flex-col gap-2 py-2">
                        <h3 className="font-[600] text-32px  overflow-hidden text-ellipsis text-nowrap whitespace-pre-wrap w-[170px]">
                           Chicken Meatbals with Creamy Cheese
                        </h3>
                        <p className="font-[400] text-[12px]">
                           By Andreas Paula
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-2 items-center">
                     <img src={`${base}images/recipe/pasta.png`} alt="" className="w-[120px] h-[80px] rounded-2xl"/>
                     <div className="flex flex-col gap-2 py-2">
                        <h3 className="font-[600] text-32px  overflow-hidden text-ellipsis text-nowrap whitespace-pre-wrap w-[170px]">
                           The Creamiest Creamy Chicken and Bacon Pasta
                        </h3>
                        <p className="font-[400] text-[12px]">
                           By Andreas Paula
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-2 items-center">
                     <img src={`${base}images/recipe/rice.png`} alt="" className="w-[120px] h-[80px] rounded-2xl"/>
                     <div className="flex flex-col gap-2 py-2">
                        <h3 className="font-[600] text-32px  overflow-hidden text-ellipsis text-nowrap whitespace-pre-wrap w-[170px]">
                           The Best East One Pot Chicken and Rice
                        </h3>
                        <p className="font-[400] text-[12px]">
                           By Andreas Paula
                        </p>
                     </div>
                  </div>
                  <img src={`${base}images/recipe/ads.png`} className="w-[100%] h-[300px]" alt="" />
               </div>
            </div>
         </section>

         {/* DIRECTIONS SECTION */}

      <section className="w-[300px] md:w-[500px]">
         <div>
            
         </div>
      </section>

         {/* INBOX SECTION */}

      <section className="w-[100%] px-4 md:px-10 mt-6 mb-20 font-nav">
         <div className="bg-[100%] bg-[#E7F9FD] w-[100%] flex flex-col gap-2 pt-8 items-center rounded-2xl text-white">
            <h4 className="w-[300px] md:w-[500px] font-[600] text-[28px] text-center text-black md:text-[36px]">
               Deliciousness to your inbox
            </h4>
            <p className="w-[300px] text-center text-black md:w-[600px] px-2 pt-2 font-[400] text-[14px]">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maiores doloremque nostrum ratione nobis earum voluptate dolor mollitia cumque corrupti? Minus cumque nam corporis repellendus maxime suscipit veritatis voluptatem voluptatum.
            </p>
            <div className="flex w-[100%] items-center justify-center md:justify-between flex-wrap md:flex-nowrap">
               <img src={`${base}images/inbox/salad.png`} className="w-[200px] h-[200px] hidden md:block rounded-l-2xl" alt="Salad" />
               <form className="bg-white border w-[100%] md:w-fit rounded-2xl py-1 mb-6 mt-2 md:mt-0 md:mb-0 border-white px-1 mx-1" noValidate onSubmit={handleSubmit}>
                  <input type="email" name="email" onBlur={verifyEmail} id="email" placeholder="Email" className={`placeholder:text-sm placeholder:text-gray-600 px-1 md:px-4 text-black text-[16px] focus:outline-none outline-none w-[200px]`} ref={emailRef} />
                  <button type="submit" className="bg-black text-white font-[600] px-3 h-fit py-2 rounded-lg text-[13px] tracking-wide">
                     Submit
                  </button>
               </form>
               <img src={`${base}images/inbox/photo.png`} className="w-[200px] h-[200px] hidden md:block rounded-e-2xl" alt="Meal" />
            </div>
         </div>
      </section>
         <Footer />
      </main>
   )
}

export default Recipe
