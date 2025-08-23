import React from 'react'
import MargheritaPizzaImg from '../assets/pizza.avif';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';

function Card2({ id, name, image, price, qty }) {
    let dispatch = useDispatch();
  return (
    <div className='w-full h-[120px] flex justify-between p-2 shadow-lg'>
        <div className='w-[60%] h-full overflow-hidden flex gap-5'>
            <div className='w-1/2 h-full overflow-hidden rounded-lg'> 
        {/* Use object-cover to make sure the container is filled */}
        <img src={image} alt='' className='w-full h-full object-cover'/>
    </div>

            <div className='flex-grow flex flex-col gap-2'>
                <div className='text-lg font-semibold text-gray-800'>{name}</div>

                {/* Quantity Counter */}
                <div className='flex items-center justify-between w-28 h-10 text-green-400 font-bold border-1 border-green-400 bg-gray-100 rounded-full overflow-hidden shadow-inner'>
                    <button className='w-1/3 h-full flex items-center justify-center text-xl  hover:bg-gray-200 transition-colors duration-200 ' onClick={()=>qty>1?dispatch(DecrementQty({id})):null}>
                        -
                    </button>
                    <span className='w-1/3 h-full flex items-center justify-center text-sm  bg-gray-200'>
                        {qty}
                    </span>
                    <button className='w-1/3 h-full flex items-center justify-center text-xl  hover:bg-gray-200 transition-colors duration-200' onClick={() => dispatch(IncrementQty({id}))}>
                        +
                    </button>
                </div>
                </div>
            </div>


        <div className='w-[40%] h-full flex flex-col items-end gap-6 '>
            <span className='text-xl text-green-400 font-semibold'>Rs.{price}</span>
            <MdDelete className='w-6 h-6 text-red-400 cursor-pointer' onClick={() => dispatch(RemoveItem(id))}/>
        </div>
    </div>
  )
}

export default Card2