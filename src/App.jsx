import { createBrowserRouter, RouterProvider } from 'react-router';
import { useState } from 'react';
import './App.css'
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Error from './components/Error/Error';

const App = () => {

  const [shopItems, setShopItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home 
        cartItems={cartItems}  
      />,
      errorElement: <Error />
    },
    {
      path: "/shop",
      element: <Shop 
        shopItems = {shopItems}
        setShopItems = {setShopItems}
        cartItems = {cartItems}
        setCartItems = {setCartItems}
        finalPrice = {finalPrice}
        setFinalPrice = {setFinalPrice}
      />
    },
    {
      path: "/cart",
      element: <Cart 
        cartItems = {cartItems}
        setCartItems = {setCartItems}
        finalPrice = {finalPrice}
        setFinalPrice = {setFinalPrice}
      />
    }
  ]);
  

  return (
    <RouterProvider router = {router} />
  );
};

export default App
