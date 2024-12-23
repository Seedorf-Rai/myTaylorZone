export default function Trending() {
  return (
    <div className="px-10 font-title mt-10">
      <h1 className="text-3xl font-bold mb-4">Trending Now</h1>
      <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <div>
          <img
            className="w-[300px] h-[300px] object-cover"
            src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p className="font-semibold underline text-center py-4">
            LiefStyle Sneakers
          </p>
        </div>
        <div>
          <img
            className="w-[300px] h-[300px] object-cover"
            src="https://images.pexels.com/photos/3782789/pexels-photo-3782789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p className="font-semibold underline text-center py-4">Heels</p>
        </div>
        <div>
          <img
            className="w-[300px] h-[300px] object-cover"
            src="https://images.pexels.com/photos/8801175/pexels-photo-8801175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p className="font-semibold underline text-center py-4">Clogs</p>
        </div>
        <div>
          <img
            className="w-[300px] h-[300px] object-cover"
            src="https://images.pexels.com/photos/2098848/pexels-photo-2098848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p className="font-semibold underline text-center py-4">Slippers</p>
        </div>
        <div>
          <img
            className="w-[300px] h-[300px] object-cover"
            src="https://images.pexels.com/photos/1485166/pexels-photo-1485166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p className="font-semibold underline text-center py-4">Boots</p>
        </div>
        <div>
          <img
            className="w-[300px] h-[300px] object-cover"
            src="https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p className="font-semibold underline text-center py-4">Coats</p>
        </div>
      </div>

      <div className="grid grid-cols-3 h-[50vw] gap-4">
        {/* First Section */}
        {/* <div className="relative bg-[url('https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Dark overlay */}
          {/* <div className="absolute text-lg md:text-4xl inset-0 h-[100vh] flex items-end justify-center p-6 opacity-0 translate-y-10 hover:opacity-100 hover:translate-y-0 transition-all duration-500 ease-out">
            <h1 className="text-white text-lg md:text-4xl">
              Discover the latest trends and elevate your style with our
              exclusive latest fashion collections.
            </h1>
          </div>
        </div>  */}
        <div className="relative bg-[url('https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Dark overlay */}
          <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 translate-y-10 hover:opacity-100 hover:translate-y-0 transition-all duration-500 ease-out">
            <h1 className="text-white text-sm md:text-4xl">
              Join the fashion revolution, where comfort meets elegance in every
              outfit.
            </h1>
          </div>
        </div>

        {/* Second Section */}
        <div className="relative bg-[url('https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Dark overlay */}
          <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 translate-y-10 hover:opacity-100 hover:translate-y-0 transition-all duration-500 ease-out">
            <h1 className="text-white text-sm md:text-4xl">
              Join the fashion revolution, where comfort meets elegance in every
              outfit.
            </h1>
          </div>
        </div>

        {/* Third Section */}
        <div className="relative bg-[url('https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Dark overlay */}
          <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 translate-y-10 hover:opacity-100 hover:translate-y-0 transition-all duration-500 ease-out">
            <h1 className="text-white text-sm md:text-4xl">
              From casual wear to chic evening dresses, we have everything to
              match your unique style.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
