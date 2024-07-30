import MediaQuery from "react-responsive"
import DesktopNav from "../lib/desktop/desktop_nav"

function Home() {
  return (
   <>
      <MediaQuery minWidth={768}>
         <main className='flex flex-col gap-6'>
            <DesktopNav />
         </main>
      </MediaQuery>
   </>
  )
}

export default Home
