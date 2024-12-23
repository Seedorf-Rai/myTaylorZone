
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
export default function Card({id,name,category,price,rating,image}){
    return (
        <Link to={`/products/${id}`}>
          <div>
         <img
            className="lg:h-[350px] h-[240px] lg:w-[90%] w-[250px] mb-5 object-cover"
            src={image}
            alt=""
          />
          <h1 className="text-gray-900 text-xl font-semibold ">{name}</h1>
          <h2 className="text-gray-600">{category}</h2>
          <div className="mt-3">
            <p className="text-gray-900 text-xl font-semibold ">${price}</p>
            <div className="flex mt-2 gap-2">
              <FaStar className="text-blue-500" />
              <FaStar className="text-blue-500" />
              <FaStar className="text-blue-500" />
            </div>
          </div>
         </div>
        </Link>
    )
}