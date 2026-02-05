import './App.css'
import Nav from './components/Navigation/Nav';
// import { useState } from 'react';
// import { Outlet } from "react-router";

const App = () => {

// const [cart, setCart] = useState(['test']);

    // <Shop 
    //   cart = { cart }
    //   setCart = { setCart }
    // />

    // const setTheCart = ()=>{
    //  setCart(['test2']); 
    // }

    // console.log(cart);
    // setTheCart();
    // console.log(cart);

  return (
    <div>
      <Nav />
      <h1>Welcome to the default page!</h1>
      {/* <Outlet /> */}
    </div>
  );
};

export default App
