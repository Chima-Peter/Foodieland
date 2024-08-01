import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./components/ui/errorpage"
import { createContext, useContext, useEffect, useState } from "react"
import Home from "./components/ui/home"
import Recipe from "./components/ui/recipe"

type Context = '/' | '/Foodieland/'
const BaseContext = createContext<Context>('/Foodieland/')

export function App() {
   const [base, setBase] = useState<Context>('/')
   useEffect(() => {
      import.meta.env.DEV ? setBase('/') : setBase('/Foodieland/')
   }, [])
   // Set base to be either / or /foodieland/ so images can have the right path both in production and development mode

  return (
   <BaseContext.Provider value={base} >
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Foodieland/'}>
         <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<Home />} />
            <Route path="recipe" element={<Recipe />} />
         </Routes> 
      </BrowserRouter>
   </BaseContext.Provider>
  )
}

export const useBaseContext = () => useContext(BaseContext)

