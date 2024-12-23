import { CiHeart } from "react-icons/ci";
import { CiSaveUp2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchById } from "../slice/product";

export default function ProductDetail() {
  const {id} = useParams();
  const dispatch = useDispatch()
  const [product, setProduct] = useState({});
  const allProducts = useSelector((state)=>state.products.allProducts)
  // useEffect(()=>{
  //  dispatch(fetchById({id}))
  // },[dispatch])
  const products = useSelector((state)=>state.products.fourProducts)
  useEffect(() => {
    const selectedProduct = allProducts.find(prod => prod.id === Number(id)); // Convert `id` to a number for strict equality
    setProduct(selectedProduct || {});
  }, [id, allProducts]);
  return (
    <>
      <div className="px-10 py-10 font-title">
        <div className="grid  md:grid-cols-12">
          <div className="col-span-5">
            <img
              src={product.image}
              className="w-[60%] object-cover rounded-md"
              alt=""
            />
          </div>
          <div className="col-span-1 ps-4">
            <div className="flex flex-row md:flex-col">
              <div className="p-3 w-[40px] mt-5 rounded-md bg-[#F2F2F2] ">
                <CiHeart></CiHeart>
              </div>
              <div className="p-3 ms-2 md:ms-0 w-[40px] mt-5 rounded-md bg-[#F2F2F2] ">
                <CiSaveUp2></CiSaveUp2>
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className="text-lg text-gray-500 underline">
              {
                product.category
              }
            </div>
            <div className="text-3xl font-bold my-3">{product.title}</div>
            <div className="text-lg text-gray-500 mb-3">
              {
                product.description
              }
            </div>
            <div className="font-bold text-gray-900 text-3xl  ">${product.price}</div>
            <div className="text-lg text-gray-500">Quantity: 10</div>
            <div className="flex mt-2 gap-2">
              <FaStar className="text-blue-500" />
              <FaStar className="text-blue-500" />
              <FaStar className="text-blue-500" />
            </div>
            <div className="flex py-4 justify-between ">
               <p>Size: <span className="font-bold">8</span></p>
               <p className="underline">
                Show Cart
               </p>
            </div>
            <div className="flex">
                <button className="px-3 me-4 border-gray-800 py-1 border rounded-md">8</button>
                <button className="px-3 me-4 border-gray-800 py-1 border rounded-md">10</button>
                <button className="px-3 me-4 border-gray-800 py-1 border rounded-md">12</button>
                <button className="px-3 me-4 border-gray-800 py-1 border rounded-md">16</button>
                <button className="px-3 border-gray-800 py-1 border rounded-md">18</button>
            </div>
            <div className="flex mt-5">
            <button className="px-8 py-3 rounded-md  bg-gray-900 text-white">Add To Cart</button>
            <button className="px-8 py-3 rounded-md ms-5  border border-gray-900">Check Out Now</button>

            </div>
          </div>
        </div>
        <div className="flex py-10 justify-between">
           <h1 className="font-bold text-3xl ">Related Products</h1>
           <Link className="underline">View All</Link>
        </div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
           {
            products.map((product) =>{
              return (
                <Card key={product.id} image={product.image} name={product.title} price={product.price} id={product.id}
                category={product.category} ></Card>
              )
            })
           }
        </div>
      </div>
    </>
  );
}
