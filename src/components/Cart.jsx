import React from "react";
import { IoMdClose } from "react-icons/io";
import Itemcart from "./Itemcart";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cart);
  const [activeCart, SetactiveCart] = useState(false);
  const navigate = useNavigate();
  const totalquty = cartItem.reduce((totalquty, item )=>{ 
    return totalquty + item.quty; }, 0)
  const totalPrice = cartItem.reduce((total, item)=>{
    return total + item.quty * item.price
  } , 0)
  return (
    <>
      <div
        className={`fixed right-0 top-0 lg:w-[23vw] w-full h-full bg-white p-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My order</span>
          <IoMdClose
            onClick={() => SetactiveCart(!activeCart)}
            className=" text-2xl font-bold p-1 rounded-md cursor-pointer hover:text-red-300 hover:border-red-300 border-2 border-gray-600 text-gray-600 "
          />
        </div>
        {
          cartItem.map((food)=>{
            return <Itemcart key={food.id} id={food.id} name={food.name} price={food.price} image={food.img} quty={food.quty} />
          })
        }
       
        

        <div className="absolute bottom-0">
          <h3>Items: {totalquty} </h3>
          <h3>Total Amount: {totalPrice}</h3>
          <hr />
          <button onClick={()=>navigate("/success")} className=" mb-5 bg-green-500 text-white font-bold px-3 rounded hover:text-black w-[90vw] lg:w-[18vw] py-1">
            Check Out
          </button>
        </div>
      </div>
      <FaCartShopping
        onClick={() => SetactiveCart(!activeCart)}
        className={`bg-white text-5xl shadow-md rounded-lg p-3 fixed right-10 cursor-pointer bottom-5 ${totalquty > 0 && "animate-bounce delay-500 transition-full"}`}

      />
    </>
  );
};

export default Cart;
