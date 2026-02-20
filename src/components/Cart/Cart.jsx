import Nav from "../Navigation/Nav";
import { CartCard } from "../Cards/CartCard";

const Cart = ({cartItems, setCartItems}) => {

  return (
    <>
      <Nav 
        cartItems = {cartItems}
        setCartItems ={setCartItems}
      />
      <div>
        <h1>This is a cart</h1>
        <p>You can buy things</p>

        {cartItems.map((cart)=>(
            <div key={cart.id}>
                <CartCard
                    // number = { image.id }
                    // title = { image.title }
                    // price = { image.price }
                    // picture = { image.picture }
                    // quantity = { image.quantity }
                />
            </div>
        ))}

      </div>
    </>
  )
}

export default Cart;