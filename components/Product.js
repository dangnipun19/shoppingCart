import Image from "next/image"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectItems } from "../redux/basketSlice";
import { useState } from "react";
import { useEffect } from "react";


function Product({product:{id,title,description,price,discount,rating,stock,brand,images,thumbnail,category}}) {
    // console.log(category)
    const [qty,setQty] = useState(0)
    const dispatch = useDispatch();
    const[availableQty,setAvailableQty] = useState(stock)
    const handleAdd = () =>{
        const product = {
            id,title,price,description,category,images,rating
        }
        dispatch(addToBasket(product))
        setQty(qty+1);

        setAvailableQty(availableQty-1) 
        // dispatch(setQuantity(qty+1))
    }
   

//     const [searchResults,setSearchResults] = useState([])
//     const items = useSelector(selectItems)
//     // console.log(items)
  
//    const query = useSelector((state)=>state.basket.search)
// //    console.log(query)
  
//     useEffect(()=>{
//       if(!query) return;
//       if(!items) return;
//     setSearchResults(items.filter((product)=>product.title.toLowerCase().includes(query.toLowerCase())))  
    
//   },[query])

    //  const getQty=()=>{
    //     const quantity = useSelector((state)=>state.basket.qty)
    //     console.log("qty is" , quantity)
    //     return quantity
    //  }
  return (
    <div className=" p-1 pt-2 flex space-x-1 text-xs sm:text-base sm:p-4 sm:space-x-6 md:space-x-8">
        <div className=" p-2 max-w-[70px] h-[80px] flex items-center justify-center bg-gray-200 rounded-md flex-grow-[1] sm:max-w-[80px]  sm:h-[100px] md:max-w-[100px]  md:h-[100px] ">
            <Image src={images[0]} height={80} width={80}  alt="" layout="fixed" objectFit="contain" className="absolute"></Image>
        </div>
        <div className="px-1 flex-grow-[2] max-w-[60px] min-w-[60px]   sm:min-w-[100px] md:min-w-[120px] lg:min-w-[300px] whitespace-pre-line">
            <p>{title}</p>
        </div>
        {availableQty>0?<div className="flex-grow-[1] text-green-700 min-w-[80px] max-w-[180px] lg:min-w-[120px] lg:max-w-[220px]">🙂In stock</div>:<div className="flex-grow-[1] text-green-700 min-w-[80px] max-w-[180px] lg:min-w-[120px] lg:max-w-[220px]">😞Out of stock</div>}
        <div className="flex-grow-[1] min-w-[100px] px-5 max-w-[200px] sm:min-w-[120px] md:min-w-[160px] lg:min-w-[230px]">
            <p>{availableQty>=0?availableQty:0}</p>
        </div>
        <div className="flex-grow-[1] min-w-[40px]">
            <p>{"$"+price}</p>
        </div>
        <div className="flex-grow-[2] flex justify-end max-w-[300px]">
           <div className="w-8 h-10 bg-gray-200 flex items-center justify-center sm:w-14 md:w-20">
             <p>{qty}</p>
            </div>
            <div className=" bg-black w-8 h-10 text-white flex items-center justify-center sm:w-14 md:w-20"  onClick={handleAdd}>
                <ShoppingCartIcon className="h-5 "></ShoppingCartIcon>
            </div>
        </div>
        
    </div>
  )
}

export default Product