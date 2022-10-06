import Link from "next/link"
import { useSelector } from "react-redux"
import CartProducts from "../components/CartProducts"
import { selectItems } from "../redux/basketSlice"

function Checkout() {
    const items = useSelector(selectItems)
    const getTotal = ()=>{
        let totalPrice = 0;
        items.forEach(item => {
            totalPrice += item.price * item.quantity
          })
          return(totalPrice)
    }
    // console.log(items,"edde")
  return (
    <div className='flex flex-col md:flex-row '>
        <div className=' w-screen text-black items-center justify-between md:w-[70%]'>
            <div className=' h-[50px] flex items-center p-2 bg-white sticky top-0 z-10 border-b-2 border-gray-300'>
                <p className='w-[250px] flex-grow-[2]'>Products</p>
                <p className='w-[150px] flex-grow-[1]'>Price</p>
                <p className='w-[150px] flex-grow-[1]'>Quantity</p>
                <p className='w-[150px] flex-grow-[1]'>Sub Total</p>
            </div>
            {/* map items added to cart */}
            {items.length>0 &&
            <div className=" divide-y-2 divide-gray-200 space-y-4">
                {items.map((item)=>(
                    <CartProducts item = {item}  key={item.id}></CartProducts>
                ))}
                
            </div>
            }
        </div>
        <div className="md:hidden">
            <p>Total</p>
        </div>
        <div className=' hidden p-3 md:block h-[400px] w-[400px] border border-gray-300 mx-3 mt-2 t-2'>
            <div className="h-[30%] text-4xl ">
                <p>Cart Total</p>
            </div>
            <div className="divide-y divide-gray-300 space-y-5 text-lg">
            <div className=" flex items-center justify-between p-3">
            <p>Sub Total</p>
            <p>{getTotal()}</p>
            </div>
            <div className="text-2xl flex items-center justify-between p-3">
            <p>Total</p>
            <p>{getTotal()}</p>
            </div>
            </div>
            <div className="flex items-center justify-center p-8 text-white">
                <Link href="/success">
                <button className=" border-2 bg-blue-500 rounded-3xl p-3 h-[50px] w-[400px] hover:bg-blue-700">PROCEED TO CHECKOUT</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Checkout