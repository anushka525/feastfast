import MargheritaPizzaImg from './assets/pizza.avif';
import VeggieBurgerImg from './assets/veggieburger.webp';
import VegBiryaniImg from './assets/vegbiryani.webp';
import CaesarSaladImg from './assets/CaesarSalad.avif';
import GrilledCheeseSandwichImg from './assets/cheezesandwich.webp';
import PastaAlfredoImg from './assets/PastaAlredo.avif';
import PaneerTikkaImg from './assets/paneertikka.avif';
import NutrellaTacosImg from './assets/NutrellaTacos.avif';
import SushiPlatterImg from './assets/SushiPlatter.avif';
import FrenchFriesImg from './assets/FrenchFries.avif';
import ChocolateCakeImg from './assets/ChocolateCake.avif';
import FishCurryImg from './assets/FishCurry.avif';
import FarmHousePizzaImg from './assets/farmhousepizza.avif';
import VegFriedRiceImg from './assets/vegfriedrice.webp';
import GreekSaladImg from './assets/greeksalad.avif';
import ClubSandwichImg from './assets/ClubSandwich.avif';
import SpaghettiBologneseImg from './assets/SpaghettiBolognese.avif';
import VeggieTacosImg from './assets/VeggieTacos.webp';
import TempuraImg from './assets/Tempura.avif';
import OnionRingsImg from './assets/OnionRings.avif';
import BrownieImg from './assets/Brownie.avif';
import ButterChickenImg from './assets/ButterChicken.webp';
import HawaiianPizzaImg from './assets/HawaiianPizza.avif';
import ChickenSandwichImg from './assets/ChickenSandwich.avif';
import MacaroniCheeseImg from './assets/MacaroniCheese.webp';

const foodItems = [
  {
    id: 1,
    food_name: "Margherita Pizza",
    food_category: "Pizza",
    food_image: MargheritaPizzaImg,
    price: 249,
    food_quantity: 1,
    type: "Veg"
  },
  {
    id: 2,
    food_name: "Veggie Burger",
    food_category: "Burger",
    food_image: VeggieBurgerImg,
    price: 219,
    food_quantity: 1,
    type: "Veg"
  },
  {
    id: 3,
    food_name: "Veg Biryani",
    food_category: "Rice",
    food_image: VegBiryaniImg,
    price: 239,
    food_quantity: 1,
    type: "Veg"
  },
  {
    id: 4,
    food_name: "Caesar Salad",
    food_category: "Salad",
    food_image: CaesarSaladImg,
    price: 209,
    food_quantity: 1,
    type: "Veg"
  },
  {
    id: 5,
    food_name: "Grilled Cheese Sandwich",
    food_category: "Sandwich",
    food_image: GrilledCheeseSandwichImg,
    price: 229,
    food_quantity: 1,
    type: "Veg"
  },
  {
    id: 6,
    food_name: "Pasta Alfredo",
    food_category: "Pasta",
    food_image: PastaAlfredoImg,
    price: 259,
    food_quantity: 1,
    type: "Veg"
  },
  {
    id: 7,
    food_name: "Paneer Tikka",
    food_category: "Indian",
    food_image: PaneerTikkaImg,
    price: 269,
    food_quantity: 1,
    type: "Veg"
  },
  {
    id: 8,
    food_name: "Nutrella Tacos",
    food_category: "Mexican",
    food_image: NutrellaTacosImg,
    price: 219,
    food_quantity: 1,
    type: "Veg"
  },
  {
    id: 9,
    food_name: "Sushi Platter",
    food_category: "Japanese",
    food_image: SushiPlatterImg,
    price: 299,
    food_quantity: 1,
    type: "Non Veg"
  },
  {
    id: 10,
    food_name: "French Fries",
    food_category: "Snacks",
    food_image: FrenchFriesImg,
    price: 209,
    food_quantity: 1,
    type: "Veg"
  },
  {
    id: 11,
    food_name: "Chocolate Cake",
    food_category: "Dessert",
    food_image: ChocolateCakeImg,
    price: 219,
    food_quantity: 1,
    type: "Veg"
  },
  {
    id: 12,
    food_name: "Fish Curry",
    food_category: "Indian",
    food_image: FishCurryImg,
    price: 289,
    food_quantity: 1,
    type: "Non Veg"
  },
  {
    id: 13,
    food_name: "Farm House Pizza",
    food_category: "Pizza",
    food_image: FarmHousePizzaImg,
    price: 259,
    food_quantity: 1,
    type: "Veg"
  },
  {
    id: 14,
    food_name: "Veg Fried Rice",
    food_category: "Rice",
    food_image: VegFriedRiceImg,
    price: 219,
    food_quantity: 1,
    type: "Veg"
  },
  {
    id: 15,
    food_name: "Greek Salad",
    food_category: "Salad",
    food_image: GreekSaladImg,
    price: 209,
    food_quantity: 1,
    type: "Veg"
  },
  {
    id: 16,
    food_name: "Club Sandwich",
    food_category: "Sandwich",
    food_image: ClubSandwichImg,
    price: 229,
    food_quantity: 1,
    type: "Veg"
  },
  {
    id: 17,
    food_name: "Spaghetti Bolognese",
    food_category: "Pasta",
    food_image: SpaghettiBologneseImg,
    price: 259,
    food_quantity: 1,
    type: "Non Veg"
  },
  {
    id: 18,
    food_name: "Veggie Tacos",
    food_category: "Mexican",
    food_image: VeggieTacosImg,
    price: 219,
    food_quantity: 1,
    type: "Veg"
  },
  {
    id: 19,
    food_name: "Tempura",
    food_category: "Japanese",
    food_image: TempuraImg,
    price: 279,
    food_quantity: 1,
    type: "Non Veg"
  },
  {
    id: 20,
    food_name: "Onion Rings",
    food_category: "Snacks",
    food_image: OnionRingsImg,
    price: 209,
    food_quantity: 1,
    type: "Veg"
  },
  {
    id: 21,
    food_name: "Brownie",
    food_category: "Dessert",
    food_image: BrownieImg,
    price: 219,
    food_quantity: 1,
    type: "Veg"
  },
  {
    id: 22,
    food_name: "Butter Chicken",
    food_category: "Indian",
    food_image: ButterChickenImg,
    price: 289,
    food_quantity: 1,
    type: "Non Veg"
  },
  {
    id: 23,
    food_name: "Hawaiian Pizza",
    food_category: "Pizza",
    food_image: HawaiianPizzaImg,
    price: 259,
    food_quantity: 1,
    type: "Veg"
  },
  {
    id: 24,
    food_name: "Chicken Sandwich",
    food_category: "Sandwich",
    food_image: ChickenSandwichImg,
    price: 229,
    food_quantity: 1,
    type: "Non Veg"
  },
  {
    id: 25,
    food_name: "Macaroni Cheese",
    food_category: "Pasta",
    food_image: MacaroniCheeseImg,
    price: 249,
    food_quantity: 1,
    type: "Veg"
  }
];

export default foodItems;