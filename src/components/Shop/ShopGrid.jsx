import { ShopCard } from "../Cards/ShopCard"

const ShopGrid = ({shopItems, cartItems, setCartItems, finalPrice, setFinalPrice})=> {

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

export { ShopGrid }