import Logo from '../../public/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";



export default function Footer(){

    return(
       <>
         <div className="px-5 md:px-10 flex justify-between py-5">
           <img className="object-cover w-[200px] me-10" src={Logo} alt="" />
           <div className="flex">
           <FaFacebook className="text-3xl me-5" />
           <FaInstagram className="text-3xl me-5" />
           <ImLinkedin className="text-3xl me-5" />

           </div>

        </div>
        <hr className="border-t-2 border-dotted border-gray-300 my-4" />
         <div className="w-[100vw] pb-2 font-title text-center">
            @By Seedorf Rai 23 Dec 2024
         </div>
       </>

    )
}