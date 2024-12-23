

import { FaStar } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Card from "./Card";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function Product(){
   const products = useSelector((state)=>state.products.fourProducts)
    return(
      <div className="px-10 font-title">
        <div className="flex items-center  ">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <Link to={`/products`}>
      <MdOutlineKeyboardDoubleArrowRight className="text-4xl ms-5 relative bottom-2 hover:cursor-pointer " />

      </Link>
      </div>
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {
                products.map((product, index) => {
                    return (
                       <div className="col-span-1" key={product.id}>
                                        <Card id={product.id} name={product.title} image={product.image} category={product.category} price={product.price} ></Card>
                         </div>
                    )
            }
            )}

         </div>
        </div>
    )
}