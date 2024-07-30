import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./components/ui/errorpage"
import { createContext, useContext, useEffect, useState } from "react"

type Context = '/' | '/SavvySaver/'
const BaseContext = createContext<Context>('/')

export function App() {
   const [base, setBase] = useState<Context>('/')
   useEffect(() => {
      import.meta.env.DEV ? setBase('/') : setBase('/SavvySaver/')
   }, [])

  return (
   <BaseContext.Provider value={base} >
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/e-commerce_project/'}>
         <Routes>
            <Route path="*" element={<ErrorPage />} />
         </Routes> 
      </BrowserRouter>
   </BaseContext.Provider>
  )
}

export const useBaseContext = () => useContext(BaseContext)

