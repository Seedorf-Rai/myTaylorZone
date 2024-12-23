import { useSelector } from "react-redux";
import Card from "./Card";
export default function NewArrival() {
  const products = useSelector((state) => state.products.threeProducts);
  return (
    <div className="px-10 font-title my-10">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <div className="flex justify-center items-center text-center">
          <div className="col-span-1">
            <p className="md:text-3xl text-lg font-bold my-5">A First Look</p>
            <p className="md:text-5xl text-lg font-extrabold">New Arrivals</p>
            <button className="border rounded-2xl md:py-5 font-semibold mt-5 border-gray-900 px-2 py-4 md:px-10 text-lg md:text-2xl">
              Show What's New
            </button>
          </div>
        </div>
       {
        products.map((product) =>{
          return(
            <div key={product.id} className="col-span-1">
              <Card name={product.title} id={product.id} price={product.price} image={product.image} category={product.category} />
              </div>
          )
        })
       }

      </div>
    </div>
  );
}
