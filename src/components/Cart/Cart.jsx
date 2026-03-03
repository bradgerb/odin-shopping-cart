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

  let template;

  if (cartItems.length === 0) {
    template = <h1>Cart empty, please visit shop to add items</h1>
  } else {
    template = <h1>This is a cart!</h1>
  }

  return (
    <>
      <Nav 
        cartItems = {cartItems}
        setCartItems ={setCartItems}
      />

      {template}

        <div className="cartGrid">
          <CartGrid 
            cartItems = { cartItems }
          />
        </div>
      <div className="checkoutWrapper">
        {cartItems.length > 0 &&
        <div className="checkout">
          <button className="checkoutButton" onClick={handleCheckout}>Checkout</button>
          <div>Total price: {finalPriceAsCash}</div>
        </div>
        }
      </div>
    </>
  )
}

export default Cart;