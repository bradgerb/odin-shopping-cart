import { createBrowserRouter, RouterProvider } from 'react-router';
import { useState } from 'react';
import './App.css'
import Home from './components/Pages/Home';
import Shop from './components/Pages/Shop';
import Cart from './components/Pages/Cart';
import Error from './components/Error/Error';

const App = () => {

  const [shopItems, setShopItems] = useState([]);

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
      />
    },
    {
      path: "/cart",
      element: <Cart />
    }
  ]);
  

  return (
    <RouterProvider router = {router} />
    // <div>
    //   <Nav />
    //   <h1>Welcome to the home page of My Store!</h1>
    // </div>
  );
};

export default App
