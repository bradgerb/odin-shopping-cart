import Nav from "../Navigation/Nav";
import { CartGrid } from "./CardGrid";
import './Cart.css'

const Cart = ({cartItems, setCartItems}) => {

  return (
    <>
      <Nav 
        cartItems = {cartItems}
        setCartItems ={setCartItems}
    />

    <h1>This is a cart</h1>

      <div className="cartGrid">
        <CartGrid 
          cartItems = { cartItems }
          setCartItems = { setCartItems }
        />
      </div>
    </>
  )
}

export default Cart;