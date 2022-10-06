import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { selectItems } from "../redux/basketSlice"
import Product from "./Product"


function ProductFeed({products:{products}}) {
    // console.log(products)

    const [searchResults,setSearchResults] = useState([])
    const items = useSelector(selectItems)
    const [filteredByCategory,setFilteredByCategory] =  useState([])
    const [filteredByRating,setFilteredByRating] = useState([])
    
    // console.log(items)
  
   const query = useSelector((state)=>state.basket.search)
   const rating = useSelector((state)=>state.basket.rating)
   const category = useSelector((state)=>state.basket.category)

   
      
        
        // {products.map((product)=>console.log(product.rating))}
      
        useEffect(()=>{
          if(!category) return;
          
         
          setFilteredByCategory(products.filter((product)=>(product.category.includes(category))))
          
        
      },[category])
      useEffect(()=>{
        if(!rating) return;
        setFilteredByRating(products.filter((product)=>(product.rating >= (rating.slice(0,1) ))))
      
    },[rating])
     
      // if(rating){console.log(filteredByRating,"blb lvlaa")}
      
      // const filterByCategory =() =>{
      //   setFilteredByCategory(products.filter((product)=>(product.category.includes(category))))
      // }
  
    useEffect(()=>{
      if(!query) return;
      // if(!items) return;
    setSearchResults(products.filter((product)=>product.title.toLowerCase().includes(query.toLowerCase())))  
    
  },[query])
  return (
    <div className="text-black z-[2] bg-gray-100">
      {/* {searchResults.length===0  &&  !rating && !category ?products.map((product)=>(
            <Product product = {product} key={product.id}></Product>
        )):searchResults.map((product)=>(
          <Product product = {product} key={product.id}></Product>
      ))} */}
      {searchResults.length ===0  &&  !rating && !category &&
         products.map((product)=>(
          <Product product = {product} key={product.id}></Product>
      ))
      }
      {searchResults.length ===0 &&category && !rating &&
        
        filteredByCategory?.map((product)=>(
          <Product product = {product} key={product.id}></Product>
        ))
      }

      {searchResults.length ===0 &&!category && rating &&
        
        filteredByRating?.map((product)=>(
          <Product product = {product} key={product.id}></Product>
        ))
      }

      {searchResults.length === 0 && category && rating &&
        
        filteredByCategory?.map((product)=>(
          <Product product = {product} key={product.id}></Product>
        ))
      }
       {/* {searchResults.length === 1 && category && rating &&
        
        filteredByCategory?.map((product)=>(
          <Product product = {product} key={product.id}></Product>
        ))
      } */}

     {searchResults.map((product)=>(
                  <Product product = {product} key={product.id}></Product>
              ))}
        
      
    </div>
  )
}

export default ProductFeed