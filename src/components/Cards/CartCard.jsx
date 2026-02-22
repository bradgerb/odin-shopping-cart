import './CartCard.css'

const CartCard = ({title, price, picture, quantity}) => {

    let priceDecimals = 
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price)

    let totalPrice =
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price * quantity);

    return (
        <>
            <div className="cartCard">
                <div className='image'><img src={picture} alt="Item image" height={70}/></div>
                <div className='title'>{title}</div>
                <div className='cartTotals'>
                    <div className='quantity'>
                        <button className='incrementButtonMinus'>-</button>
                        <div className="quantityNumber">{quantity}</div>
                        <button className='incrementButtonPlus'>+</button>
                    </div>
                    <div>
                        <div>Each</div>
                        <div>{priceDecimals}</div>
                    </div>
                    <div>
                        <div>Total</div>
                        <div>{totalPrice}</div>
                    </div>
                    <div className="remove">
                        <button>X</button>
                    </div>
                </div>
            </div>
            <hr className="faded-line"></hr>
        </>
    )
}

export { CartCard }