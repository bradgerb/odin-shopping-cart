import { CartCard } from "../Cards/CartCard"
import { v4 as uuidv4 } from 'uuid';

const CartGrid = ({cartItems, setCartItems, finalPrice, setFinalPrice})=> {

    return (
        <>
        {cartItems.map((cart)=>(
            <div key={uuidv4()}>
                <CartCard
                    number = { cart.id }
                    title = { cart.title }
                    price = { cart.price }
                    picture = { cart.picture }
                    quantity = { cart.quantity }
                    cartItems = { cartItems }
                    setCartItems = { setCartItems }
                    finalPrice = { finalPrice }
                    setFinalPrice = { setFinalPrice }
                />
            </div>
        ))}
        </>
    )

}

export { CartGrid }