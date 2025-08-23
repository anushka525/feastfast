import React, { createContext, useState } from 'react'
import foodItems from '../food';
export const dataContext=createContext();
function UserContext({children}) {
    let[cate, setCate] = useState(foodItems);
    let [input, setInput]= useState("");
    let [showCart,setShowCart] = useState(false);

    let data={
        input,
        setInput,
        cate,
        setCate,
        showCart,
        setShowCart
    }
  return (
    <div>
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext;