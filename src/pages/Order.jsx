import { Link } from "react-router";



export default function User(){

    return (
        <>
         <h1 className="text-4xl font-bold text-center mt-5">Sorry This page is not available at the moment</h1>
         <h1 className="text-4xl font-bold text-center mt-5">Try Visiting</h1>
        <div className="flex text-center w-full justify-center mt-5 ">
        <Link className="underline text-blue-500 ms-4" to={'/'}>
           Home
         </Link>
        <Link className="underline text-blue-500 ms-4" to={'/products'}>
           products
         </Link>
         <Link className="underline text-blue-500 ms-4" to={'/cart'}>
           carts
         </Link>
         <Link className="underline text-blue-500 ms-4" to={'/products/1'}>
           Product Details
         </Link>
        </div>
        <div className="flex justify-center items-center">
        <img className="w-[50%] object-cover" src="https://img.freepik.com/free-vector/mosquito-bite-concept-illustration_114360-9240.jpg?t=st=1734940029~exp=1734943629~hmac=16103cac9d7576ac74ebb768c43485e6be87196dae1e9a8d1e8e4a859dde5b8e&w=740" alt="" />
        </div>
        </>
    )
}