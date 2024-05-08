
import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart,removeCart } from '../Slice/Cartslice';
const Foodcart = ({id, img, name, rating, desc, price , handeltost}) => {

  const dispatch = useDispatch()


  return (
    <div className='font-bold w-[200px]  rounded-lg p-5 bg-white flex flex-col gap-2'>
        <img className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duereation-500" src={img} alt="" />
    <div className='text-sm flex justify-between'>
        <h2>{name}</h2>
        <span className='text-green-500'>₹{price}</span>
    </div>
        <p className='text-sm font-normal'>{desc.slice(0,50)} ..</p>
        <div className='flex justify-between'>
            <span className='flex justify-center items-center gap-1'>
            <FaStar className='text-yellow-400 mr-1'/> {rating}
            </span>
            <button onClick={()=>dispatch(addToCart({ id , name , price, rating , img}) , handeltost(name))}
            
          className="p-1 text-white bg-green-500 hover:bg-green-500 rounded-lg text-sm">Add to Card</button>
        </div>
    </div>
  

  )
}

export default Foodcart