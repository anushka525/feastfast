import React from 'react';
import {useDispatch} from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { LuLeafyGreen } from "react-icons/lu";
import foodItems from '../food';
import { toast } from 'react-toastify';

function Card({ id, food_name, food_image, price, type }) {
  let dispatch = useDispatch();
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-400 transition-all'>
        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
           <img src={food_image} alt="" className='object-cover w-full h-full rounded-t-2xl rounded-b-2xl' />
        </div>


        <div  className='text-2xl font-semibold'>
            {food_name}
        </div>


        <div className='w-full flex justify-between items-center '>
            <div className='font-semibold text-lg text-green-400'>
            Rs.{price}
            </div>
            <div className='flex justify-center items-center gap-2 text-green-400 text-lg font-semibold'>
                <LuLeafyGreen className={type === "Non Veg" ? "text-red-500" : "text-green-400"}/> <span className={type === "Non Veg" ? "text-red-500" : "text-green-400"}>{type}</span>
            </div>
        </div>
        <button className='w-[100%] p-3 rounded-lg bg-green-200 hover:bg-green-400 transition-all' onClick={() => {dispatch(addItem({ id:id, name:food_name, price:price, image:food_image, qty:1 })); toast.success("Item added to cart");}}>Add to Cart</button>
    </div>
  )
}

export default Card