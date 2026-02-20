import { ShopCard } from "../Cards/ShopCard"
import './Shop.css'

const ShopGrid = ({shopItems, cartItems, setCartItems})=> {

    return (
        <>
            {shopItems.map((image)=>(
                <div key={image.id}>
                    <ShopCard
                        number = { image.id }
                        title = { image.title }
                        price = { image.price }
                        description = { image.description }
                        picture = { image.picture }
                        rating = { image.rating }
                        cartItems={ cartItems }
                        setCartItems = { setCartItems }
                    />
                </div>
            ))}
        </>
    )

}

export { ShopGrid }