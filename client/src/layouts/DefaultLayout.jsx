import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

const DefaultLayout = () => {
  return (
    <div className="p-5 mt-12 w-3/5 mx-auto border-2 border-slate-800 shadow-lg min-h-[230px] rounded-md">
        <Header/>
        <div className="my-5">
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default DefaultLayout