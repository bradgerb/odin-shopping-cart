import Nav from "../Navigation/Nav";

const Cart = ({cartItems, setCartItems}) => {

  return (
    <>
      <Nav 
        cartItems = {cartItems}
      />
      <div>
        <h1>This is a cart</h1>
        <p>You can buy things</p>

      </div>
    </>
  )
}

export default Cart;