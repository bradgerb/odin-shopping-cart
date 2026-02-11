import { Card } from "../Cards/Card"
import './Shop.css'

const ShopGrid = ({shopItems})=> {

    return (
        <>
            {shopItems.map((image)=>(
                <div key={image.id}>
                    <Card
                        number = { image.id }
                        title = { image.title }
                        price = { image.price }
                        description = { image.description }
                    />
                </div>
            ))}
        </>
    )

}

export { ShopGrid }