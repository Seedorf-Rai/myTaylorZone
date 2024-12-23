


export default function Banner(){

    return(
        <div className="bg-[#E6F4FE] py-10 my-6 font-title ">
            <div className="px-10  ">
                <h1 className="text-3xl text-gray-800 font-bold ">Join Our List , Get 10% Off</h1>
                <p className=" w-full md:w-1/2 my-5 font-medium ">
                Sign up for Zappos emails—new subscribers get 10% off a future order!* Plus, get early access to sales, coupons, and more. (One code per email address.)
                </p>
                <div>
                    <input type="text" className="w-[24rem] md:w-[30rem] py-5 px-10 border-gray-300 border rounded-2xl " placeholder="Email Address" />
                    <button className="px-5 py-5 md:ms-4 rounded-xl mt-4 md:mt-0 bg-gray-950 text-white">Join the Party</button>
                </div>
            </div>
        </div>
    )
}