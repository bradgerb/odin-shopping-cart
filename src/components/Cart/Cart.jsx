import Nav from "../Navigation/Nav";
import { CartGrid } from "./CardGrid";
import './Cart.css'

const Cart = ({cartItems, setCartItems, finalPrice, setFinalPrice}) => {

  let finalPriceAsCash = 
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(finalPrice)

  const handleCheckout =  ()=> {
    setCartItems([]);
    setFinalPrice(0);
  }

  return (
    <>
      <Nav 
        cartItems = {cartItems}
        setCartItems ={setCartItems}
    />

    <h1>This is a cart!</h1>

      <div className="cartGrid">
        <CartGrid 
          cartItems = { cartItems }
        />
      </div>
    <div className="checkoutWrapper">
      <div className="checkout">
        <button onClick={handleCheckout}>Checkout</button>
        <div>Total price: {finalPriceAsCash}</div>
      </div>
    </div>

    </>
  )
}

export default Cart;