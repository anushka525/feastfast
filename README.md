**🍔 FeastFast**
A Modern, Fast & Responsive Food Ordering App

FeastFast is a lightning-fast, fully responsive food-ordering application built with React, powered by Redux Toolkit for scalable global state management, and styled using the utility-first flexibility of Tailwind CSS.

**✨ Features**
**🔎 Dynamic Menu Catalog**

Browse a detailed menu sourced from structured JavaScript data, including category, Veg/Non-Veg type, and pricing.
Referenced in: food.js

**🎯 Category-Based Filtering**

Filter items by category—like Pizza, Salad, or Indian—using visually appealing icon-based filter buttons.
Referenced in: Categories.jsx, Home.jsx

**🛒 Smart Global Cart**

The entire cart system is managed by Redux Toolkit, handling:

**-** Adding items

**-** Removing items

**-** Increasing/decreasing quantities

**-** Referenced in: cartSlice.js, store.js

**💵 Automatic Billing**

The app calculates:

**-** Subtotal

**-** Delivery fee (Rs. 79)

**-** Taxes (0.5%)

**-** Final bill total

Referenced in: Home.jsx

**🧾 Smooth Checkout**

A seamless “Place Order” experience with instant notifications using React Toastify.
Referenced in: App.jsx, Home.jsx

**📱 Fully Responsive UI**

Tailwind CSS ensures the design works beautifully across all screen sizes—from smartphones to desktops.

**💻 Tech Stack**

This project uses a modern JavaScript ecosystem, including:

**React (v19.1.1):** For building the user interface

**Vite (v5.0.0):** For fast development and bundling

**Redux Toolkit (v2.8.2):** For global state management

**Tailwind CSS:** For utility-first responsive styling

**React Toastify (v11.0.5):** For toast notifications

**React Icons (v5.5.0):** For icon usage

**⚙️ Installation & Setup**
**1. Clone the repository**
git clone <YOUR_REPO_URL>
cd fooddelivery

**2. Install dependencies**
npm install

**3. Run the development server**
npm run dev


Your app will be available at the URL displayed in the terminal (commonly http://localhost:5173).

**📁 Project Architecture**

The app uses both Redux Toolkit and React Context API for smooth and scalable state handling.

**Redux Toolkit**

The central store (store.js) manages the core global state.

The cart logic lives within cartSlice.js, which contains reducers for:

**-** Adding items

**-** Removing items

**-** Increasing quantity

**-** Decreasing quantity

**React Context API**

**-** UserContext.jsx manages UI-related state such as:

**-** Selected food category

**-** Search input

**-** Cart sidebar visibility

Both Redux Provider and UserContextProvider are wrapped around the entire app via main.jsx.

**📄 Important Files**

src/pages/Home.jsx — Main page containing filters, billing logic, food cards, and cart UI.

src/food.js — Static dataset containing all food menu items.

src/Categories.jsx — Contains the category list and associated icons.

src/redux/cartSlice.js — Manages all cart operations and global cart state.

**🤝 Contributing**

Feel free to contribute!
(You may specify guidelines, e.g., “Ensure code follows ESLint standards,” etc.)

**📝 License**

This project is licensed under the MIT License. Feel free to use, modify, and distribute it.
