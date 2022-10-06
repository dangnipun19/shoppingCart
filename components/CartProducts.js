import { XCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromBasket, selectItems } from '../redux/basketSlice';

export default function ({item}) {
  // const items = useSelector(selectItems)
  // const items = useSelector((state) => state.item)
  //  console.log(item)
  const dispatch = useDispatch();
  console.log(item.id)
  const subtotal = item.price * item.quantity
  
  return (
    <div className='flex space-x-10 bg-white items-center p-2 '>
      <XCircleIcon 
          className='w-[30px] h-[30px] ' 
          onClick={() => dispatch(removeFromBasket(item.id))}>
            Remove
        </XCircleIcon>
      <div className=" p-2 max-w-[70px] h-[80px] flex items-center justify-center bg-gray-200 rounded-md flex-grow-[1] sm:max-w-[80px]  sm:h-[100px] md:max-w-[100px]  md:h-[100px] ">
            <Image src={item.images[0]} height={80} width={80}  alt="" layout="fixed" objectFit="contain" className="absolute"></Image>
        
        
        </div>
    {/* <div className='w-[250px] flex-grow-[3] flex'>
      <Image src={item.images[0]} width={80} height={80}  objectFit="contain"></Image>
      <p>{item.title}</p>
    </div> */}
    <div className='flex-grow-[1]'>
    <p>{item.title}</p>
    </div>
    <div>
      <p className='w-[150px] flex-grow-[1]'>{item.price}</p>
    </div>
    <div className='w-[150px]  flex-grow-[1] '>
      <div className='rounded-2xl border-2 border-gray-200 h-[40px] w-[100px] p-2  flex items-center justify-between '>
        <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
      </div>
    </div>
    <div className='w-[150px] flex-grow-[1]'>
      <p>{subtotal}</p>
    </div>
    </div>
  )
}
