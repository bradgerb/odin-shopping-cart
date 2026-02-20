import './CartCard.css'

const CartCard = ({title, price, picture, quantity, cartItems, setCartItems}) => {

    let priceDecimals = 
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price)

    return (
        <>
            <div className="cartCard">
                <div className='image'><img src={picture} alt="Item image" height={70}/></div>
                <div>{title}</div>
                <div className='cartPrice'>
                    <div>{quantity}</div>
                    <div>{priceDecimals}</div>
                </div>
            </div>
            <hr class="faded-line"></hr>
        </>
    )
}

export { CartCard }