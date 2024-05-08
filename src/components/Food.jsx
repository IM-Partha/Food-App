import React from 'react'
import Foodcart from './Foodcart'
import FoodData from '../data/FoodData.js'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Food = () => {
  const handeltost= (name)=> toast.success(`${name} Added To Cart`)
  const category = useSelector((state)=>state.category.category)
  const search = useSelector ((state)=> state.search.search)
  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
      {
        FoodData.filter((food)=>{
          if(category==="All"){
            return food.name.toLowerCase().includes(search.toLowerCase())
          }
          else{
            return category ===food.category
          }
        }).map((food)=>{
          return <Foodcart key={food.id} id={food.id} name={food.name} price={food.price} desc={food.desc}
          rating={food.rating} img={food.img} handeltost={handeltost} />
            
        })
      }
      
        
    </div>
    </>
  )
}

export default Food