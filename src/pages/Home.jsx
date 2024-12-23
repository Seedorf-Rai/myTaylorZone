import Banner from "../components/Banner"
import Footer from "../components/Footer"
import { Navbar } from "../components/Navbar"
import NewArrival from "../components/NewArrival"
import Product from "../components/Product"
import Trending from "../components/Trending"


export const Home = ()=>{
    return(
        <>
          <div className="px-10 mt-6">
          <div className="w-full font-title justify-center py-5 flex flex-col md:flex-row bg-[#B51E16] ">
             <h1 className="text-white font-semibold text-3xl md:text-5xl mx-10 ">MyTalorZone Coupon Card</h1>
             <div className="text-gray-300 px-10 md:px-0">
                <p>An easy last minute gift you can email staright to the recipient</p>
                <p className="underline font-semibold">Get Coupons</p>
             </div>
          </div>
          </div>
          <Trending></Trending>
          <NewArrival></NewArrival>
          <Product></Product>
          <Banner></Banner>
        </>
    )
}