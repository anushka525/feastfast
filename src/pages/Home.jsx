import React, { useState, useContext } from 'react';
import { dataContext } from '../context/UserContext';
import Nav from '../Components/Nav';
import Categories from '../Categories';
import Card from '../Components/Card';
import foodItems from '../food';
import { RxCross2 } from "react-icons/rx";
import Card2 from '../Components/Card2';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function Home() {
  let {cate, setCate, input, showCart, setShowCart} = useContext(dataContext);

  function filter(category) {
    if(category==="All") {
      setCate(foodItems)
    } else {
      setCate(
        foodItems.filter((item) => (item.food_category===category))
      );
    }
  }

  let items = useSelector((state) => state.cart);
  let subTotal = items.reduce((total, item) => total + item.price * item.qty, 0);
  let deliveryFee = 79;
  let taxes = subTotal*0.5/100;
  let total = Math.floor(subTotal + deliveryFee + taxes);

  return (
    <div className='w-full min-h-screen bg-slate-200'>
        <Nav/>
        {!input?
        <div className="flex justify-center items-center gap-x-4 w-full overflow-x-auto px-8">
          {Categories.map((category) => (
            <div key={category.id} className="w-[150px] h-[150px] bg-white flex flex-col items-center justify-center px-4 rounded-md shadow-lg hover:bg-green-100 cursor-pointer transition-shadow duration-200" onClick={() => filter(category.title)}>
              <span className="mb-2">{category.image}</span>
              <h2 className="text-slate-500 font-medium">{category.title}</h2>
            </div>
          ))}
        </div>
        : 
        null}

        <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
          {cate.length < 1 && <span className='text-2xl text-gray-500 w-full flex items-center justify-center p-5'>No items found</span>}
          {cate.map(item => (
            <Card
              key={item.id}
              id={item.id}
              food_name={item.food_name}
              food_image={item.food_image}
              price={item.price}
              type={item.type}
            />
          ))}
        </div>
        <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-x transition-all duration-500 ease-in-out overflow-auto  ${showCart?"translate-x-0":"translate-x-full"}`}>
          <header className='w-full h-[60px] bg-green-400 text-white flex justify-between items-center px-5'>
            <span>Order Items</span>
            <span className='w-10 h-10
          bg-green-500 rounded-full shadow-lg
          flex items-center justify-center
          transition-all duration-300 ease-in-out
          hover:
          cursor-pointer' onClick={()=>setShowCart(!showCart)}><RxCross2 /></span>
          </header>
          {items.length > 0?
          <>
          <div className='w-full flex flex-col gap-8 p-3 mt-9'>
            {items.map(item => (
              <Card2
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                qty={item.qty}
              />
            ))}
          </div>
          <div className='w-full border-t-2 border-gray-400 mt-7 flex flex-col items-center gap-4 p-8'>
            <div className='w-full items-center flex justify-between text-xl font-semibold text-gray-600'>
              <span>Subtotal</span>
              <span className='text-green-400 font-semibold text-lg'>Rs.{subTotal}</span>
            </div>
            <div className='w-full items-center flex justify-between text-xl font-semibold text-gray-600'>
              <span>Delivery Fee</span>
              <span className='text-green-400 font-semibold text-lg'>Rs.{deliveryFee}</span>
            </div>
            <div className='w-full items-center flex justify-between text-xl font-semibold text-gray-600'>
              <span>Taxes</span>
              <span className='text-green-400 font-semibold text-lg'>Rs.{taxes}</span>
            </div>
            <div className='w-full border-t-2 border-gray-400  items-center flex justify-between text-2xl font-semibold text-gray-600'>
            <span>Total</span>
            <span className='text-green-400 font-semibold text-2xl'>Rs.{total}</span>
            </div>
            <button className='w-[80%] p-3  rounded-lg bg-green-200 hover:bg-green-400 transition-all' onClick={() => toast.success("Order placed successfully!")}>Place Order</button>
          </div>
          </>
          :
          <div className='text-2xl w-full flex items-center justify-center p-5'>
            <span className='text-gray-500 '>Your cart is empty</span>
          </div>
          }
          
        </div>
    </div>
  )
}

export default Home