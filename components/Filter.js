import{ShoppingBagIcon} from "@heroicons/react/24/outline"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filter, addToBasket, selectItems, searchIt, rating, category, allReset, categoryReset } from "../redux/basketSlice"

function Filter({categories,products:{products}}) {

    const [search,setSearch] = useState("")
    // const [searchResults,setSearchResults] = useState([])
    const [ratingValue,setRatingValue] = useState()
    const [categoryValue,setCategoryValue] = useState()
    const items = useSelector(selectItems)
    const qty = []
    const dispatch = useDispatch();
//    console.log(ratingValue,"queeeeery")
    useEffect(()=>{
        if(!search) return;
    //   setSearchResults(products.filter((product)=>product.title.toLowerCase().includes(search.toLowerCase())))  
        
    //   if(!searchResults) return;
      dispatch(searchIt(search))
      
    },[search])
    
    useEffect(()=>{
        dispatch(category(categoryValue))
        dispatch(rating(ratingValue))
    },[categoryValue,ratingValue])

    items.map((item)=>(
           qty.push(item.quantity) 
        ))
        
    const getTotalItems = ()=>{
        const init = 0
        let totalQty = qty.reduce((prev,curr)=>prev+curr,init)
        
          return(totalQty)
    }
    // const reset = ()=>{
    //     dispatch(allReset())
    // }

    
  return (
    <div className="h-12 flex p-1 space-x-2 items-center text-xs justify-between sm:text-base">
        <div className="flex items-center  space-x-2">
            <p>Category:</p>
        <select className="w-[70px] h-[30px] sm:w-[130px]"onChange={(e)=>setCategoryValue(e.target.value)}>
        {categories.map((category)=>(
            
                <option>{category}</option>
            
        ))}
        </select>
        <div className="flex items-center space-x-2 ">
            <p>Rating:</p>
            <select className="w-[70px] h-[30px] sm:w-[130px] " onChange={(e)=>setRatingValue(e.target.value)}>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
            </select>
            <p>Reset</p>
        </div>
        </div>

      {/* search bar */}
        <div className="flex space-x-1 items-center sm:space-x-2">
            <p>Search:</p>
            <div>
            <input className="w-[70px] px-2 sm:w-[150px] border-2 border-black bg-gray-200 rounded-sm" onChange={(e)=>setSearch(e.target.value)}></input>
            </div>
            <Link href="/checkout">
            <div className=" cursor-pointer">
                <ShoppingBagIcon  className = "h-[20px] sm:h-[30px] mr-1"></ShoppingBagIcon>
                {items.length > 0 && (
                <span className="absolute right-1 top-3 z-50 flex h-3 w-3 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[9px] text-white md:h-4 md:w-4 md:top-2 md:text[12px]">
                {getTotalItems()}
              </span>
              )}
            </div>
            </Link>
        </div>
        
    </div>
  )
}

export default Filter