import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { removeCart, incrementItem, decrementItem } from '../Slice/Cartslice';

const Itemcart = ({id, name, image, price , quty }) => {
  const i= useSelector((state)=>state.cart)
  const dispatch = useDispatch()

  return (
    <div className='flex gap-2 shadow-md rounded-lg p-[25px] mb-3 '>
        <MdDelete onClick={()=>dispatch(removeCart({id, image,  price, name, quty}))} className='absolute right-7 cursor-pointer' />

        <img className='w-[60px] h-[60px]' src={image} alt="" />
        <div className='leading-5'>
            <h2 className='font-bold'>{name}</h2>
           <div className='flex justify-between p-2'>
            <span className='font-bold'>₹ {price}</span>
           <div className=' flex justify-center items-center gap-2 absolute right-7'>
           <CiCircleMinus onClick={()=>dispatch(decrementItem({id}))} className='text-xl cursor-pointer' />
            <span>{quty}</span>
            <CiCirclePlus onClick={()=>dispatch(incrementItem({id}))} className='text-xl cursor-pointer' />
            
            </div>
           </div>
        </div>
    </div>
  )
}

export default Itemcart