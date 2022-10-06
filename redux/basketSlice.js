import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:[],
    searchResults:[],
    search:'',
    rating:'',
    category:'',

};

export const basketSlice = createSlice({
    name:"basket",
    initialState,
    reducers:{
    addToBasket:(state,action)=>{
        const itemInCart = state.items.find((item)=>item.id === action.payload.id);
        if(itemInCart){
            itemInCart.quantity++;
        }else{
            state.items.push ({...action.payload,quantity:1}) 
        }
        
    },
    filter:(state,action)=>{
        
        const filterItem = state.items.filter((item)=>item.id === action.payload);
        state.items = filterItem;
    },
    incrementQuantity:(state,action)=>{
        const item = state.items.find((item)=>item.id===action.payload)
        item.quantity++
    },
    decrementQuantity:(state,action)=>{
        const item = state.items.find((item)=>item.id===action.payload)
        if(item.quantity === 1 ){
            item.quantity = 1
        }else{
            item.quantity--;
        }
    },
    removeFromBasket:(state,action)=>{
        const removeItem = state.items.filter((item)=>item.id !== action.payload);
        state.items = removeItem;
    },
    searchIt:(state,action)=>{
        state.search = action.payload
    },
    rating:(state,action)=>{
        state.rating = action.payload
    },
    category:(state,action)=>{
        state.category = action.payload
    },
    
    allReset:()=>initialState
    },
});

export const {addToBasket,removeFromBasket,incrementQuantity,decrementQuantity,filter,searchIt,rating,category,categoryReset,ratingReset} = basketSlice.actions;

export const selectItems = (state)=>state.basket.items;
export const search = (state)=> state.basket.searchResults;
export const selectTotal = (state) => state.basket.items.reduce((total,item)=>total+item.price ,0)
export default basketSlice.reducer;


// else if(searchResults.length === 0 && !rating && category ){
//     return(
//       products.filter((product)=>(product.category.includes(category)&&<Product product = {product} key={product.id}></Product>)
      
//       )
//     )
// }