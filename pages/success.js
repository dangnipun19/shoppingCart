import { useContext } from "react"
import { useSelector } from "react-redux"
import Header from "../components/Header"
import OrderPlaced from "../components/OrderPlaced"
import { search, selectItems } from "../redux/basketSlice"

import { data } from "../context/filterState"
import { useState } from "react"
import { useEffect } from "react"


function thankYou() {

  const [searchResults,setSearchResults] = useState([])
  const items = useSelector(selectItems)
  // console.log(items)

 const query = useSelector((state)=>state.basket.search)
  console.log(query,"fdff")

  useEffect(()=>{
    if(!query) return;
    if(!items) return;
  setSearchResults(items.filter((product)=>product.title.toLowerCase().includes(query.toLowerCase())))  
  
},[query])

// console.log(searchResults,"yus")
  // const c = useContext(data)
  // console.log(qty)
  // console.log(c.name)
  return (
    <div>
        <div>
            <Header></Header>
        </div>
        <div className="bg-gray-200 h-screen">
            <OrderPlaced></OrderPlaced>
        </div>
    </div>
  )
}

export default thankYou