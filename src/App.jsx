// import { useState } from 'react'
import './App.css'
import { Link } from "react-router";
// import Home from './components/Home'

// function App() {
//   return (
//     <>
//       <nav>
//         <a>Home</a>
//         <a>Shop</a>
//         <a>Cart</a>
//       </nav>

//       <Home/>
//     </>
//   )
// }



const App = () => {
  return (
    <div>
      <nav>
        <div>
          My Shop
        </div>
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </nav>
        <h1>Hello from the main page of the app!</h1>
        <p>Here are some examples of links to other pages</p>
    </div>
  );
};

export default App
