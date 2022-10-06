

function Header() {
  return (
    <div className="text-black text-xs flex items-center justify-between bg-gray-300 p-2 space-x-1 h-[50px] border-b-2 border-black sticky top-0 z-[10] sm:text-sm md:text-lg">
        <div className="flex-grow-[1] min-w-[70px] sm:max-w-[100px] sm:min-w-[110px]  md:min-w-[140px] lg:min-w-[140px] ">
            <p>Image</p>
        </div>
        <div className="flex-grow-[2] min-w-[60px] sm:min-w-[110px] md:min-w-[180px] lg:min-w-[320px] ">
            <p>Name</p>
        </div>
        <div className="flex-grow-[1] ">
            <p>Stock</p>
        </div>
        <div className="flex-grow-[1] ">
            <p>Available Quantity</p>
        </div>
        <div className="flex-grow-[1] ">
            <p>Price</p>
        </div>
        <div className="flex-grow-[2] flex justify-end pr-1 sm:pr-2 md:pr-4">
            <p>Buy</p>
        </div>
    </div>
  )
}

export default Header