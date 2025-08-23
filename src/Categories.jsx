import { FaBorderAll } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa6";
import { LuSalad } from "react-icons/lu";
import { MdSoupKitchen } from "react-icons/md";
import { LuDessert } from "react-icons/lu";
import { GiHamburger } from "react-icons/gi";
import { FaBowlRice } from "react-icons/fa6";
import { GiTacos } from "react-icons/gi";
import { GiSushis } from "react-icons/gi";

const Categories=[
    {
        id:1,
        title:"All",
        image:<FaBorderAll className="w-[60px] h-[60px] text-green-400" />
    },
    {
        id:2,
        title:"Snacks",
        image:<MdFreeBreakfast className="w-[60px] h-[60px] text-green-400" />
    },
    {
        id:3,
        title:"Pasta",
        image:<GiHotMeal className="w-[60px] h-[60px] text-green-400" />
    },
    {
        id:4,
        title:"Pizza",
        image:<FaPizzaSlice className="w-[60px] h-[60px] text-green-400" />
    },
    {
        id:5,
        title:"Salad",
        image:<LuSalad className="w-[60px] h-[60px] text-green-400" />
    },
    {
        id:6,
        title:"Indian",
        image:<MdSoupKitchen className="w-[60px] h-[60px] text-green-400" />
    },
    {
        id:7,
        title:"Dessert",
        image:<LuDessert className="w-[60px] h-[60px] text-green-400" />
    },
    {
        id:8,
        title:"Burger",
        image:<GiHamburger className="w-[60px] h-[60px] text-green-400" />
    },
    {
        id:9,
        title:"Rice",
        image:<FaBowlRice className="w-[60px] h-[60px] text-green-400" />
    },
    {
        id:10,
        title:"Mexican",
        image:<GiTacos className="w-[60px] h-[60px] text-green-400" />
    },
    {
        id:11,
        title:"Japanese",
        image:<GiSushis className="w-[60px] h-[60px] text-green-400" />
    }
]

export default Categories;  