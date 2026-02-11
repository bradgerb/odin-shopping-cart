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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />
    },
    {
      path: "/shop",
      element: <Shop 
        shopItems = {shopItems}
        setShopItems = {setShopItems}
        cartItems = {cartItems}
        setCartItems = {setCartItems}
      />
    },
    {
      path: "/cart",
      element: <Cart 
        cartItems = {cartItems}
        setCartItems = {setCartItems}
      />
    }
  ]);
  

  return (
    <RouterProvider router = {router} />
  );
};

export default App
