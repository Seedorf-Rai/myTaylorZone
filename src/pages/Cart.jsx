import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";



export default function Cart(){
   const products = useSelector((state)=>state.products.threeProducts);
    return(
        <div className="px-10 font-title py-5">
            <div className="flex justify-center">
            <h1 className="font-bold text-center text-3xl ">
            My Cart
            </h1>
            <TiShoppingCart className="text-4xl" />
            </div>
            <hr className="mt-4" />
            <div className="grid gap-10 grid-cols-5">
              <div className="col-span-2 py-5">
                Product Details
              </div>
              <div className="col-span-1 py-5">
                Quantity
              </div>
              <div className="col-span-1 py-5">Price</div>
              <div className="col-span-1 py-5">Total</div>

            </div>
            {
              products.map((product) =>{
                return (
                  <div className="grid mt-5 grid-cols-5">
            <div className="col-span-2 ">
                <div className="flex">
                <img className="w-[200px] h-[150px] rounded-md object-cover" src={product.image} alt="" />
                <div className="ms-3">
                <p className="font-bold text-xs md:text-xl">{product.title}</p>
                <p className="text-gray-400 hidden md:block mt-2">{product.description}</p>
                </div>
                </div>
              </div>
              <div className="col-span-1 ps-10 flex">
                <p className="font-bold">2</p>
              </div>
              <div className="col-span-1 ps-10 flex">
                <p className="font-bold">${product.price}</p>
              </div>
              <div className="col-span-1 ps-10 flex">
                <p className="font-bold">$400</p>
              </div>
            </div>
                )
              })
            }
            <div className=" flex justify-end ">
            <button className="px-8 py-3 rounded-md  bg-gray-900 text-white">Place Order</button>
            </div>
        </div>
    )
}