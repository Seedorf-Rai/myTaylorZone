import { useSelector } from "react-redux";
import Card from "../components/Card";


export default function Product(){
  const products = useSelector((state)=>state.products.allProducts)
    return(
        <div className="px-10 py-10">
         <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
          {
            products.map((product)=>{
              return(
                <div className="col-span-1" key={product.id}>
                  <Card id={product.id} name={product.title} image={product.image} category={product.category} price={product.price} ></Card>
                </div>
              )
            })
          }

         </div>
        </div>
    )
}