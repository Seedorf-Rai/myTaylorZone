import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllProducts, fetchFourProducts, fetchThreeProducts } from "../slice/product";



export default function Layout(){
   const dispatch = useDispatch();
   useEffect(()=>{
    dispatch(fetchAllProducts());
    dispatch(fetchThreeProducts());
    dispatch(fetchFourProducts());
   },[dispatch])
    return(
       <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
       </>
    )
}
