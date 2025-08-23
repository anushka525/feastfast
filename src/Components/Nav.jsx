import React, { useContext, useEffect } from 'react';
import { IoFastFoodSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { dataContext } from '../context/UserContext';
import foodItems from '../food';
import { useSelector } from 'react-redux';

function Nav() {
  let {input,setInput,cate,setCate,showCart,setShowCart}=useContext(dataContext);
  useEffect((()=>{
    setCate(
      foodItems.filter((item) => item.food_name.toLowerCase().includes(input.toLowerCase()))
    );
  }),[input]);
  let items=useSelector((state) => state.cart);

  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>

      <div className='w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-xl'>
        <IoFastFoodSharp  className='w-[30px] h-[30px] text-green-400 '/>
      </div>

      <form className='w-[30%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-xl md:w-[40%]'
        onSubmit={(e) => e.preventDefault()}>
        <FaSearch className='w-[20px] h-[20px] text-green-400'/>
        <input 
          type="text" 
          placeholder="Search Items..." 
          className='w-[100%] outline-none text-[16px] md:text-[20px]' onChange={(e)=>setInput(e.target.value)} value={input}/>
      </form>

      <div className='w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-xl relative cursor-pointer'
      onClick={() => setShowCart(!showCart)}>
        <span className='absolute -top-2 -right-2 bg-green-400 text-white rounded-full w-[20px] h-[20px] flex items-center justify-center cursor-pointer'>{items.length}</span>
        <FaCartShopping className='w-[30px] h-[30px] text-green-400 cursor-pointer' />
      </div>

    </div>
  )
}

export default Nav