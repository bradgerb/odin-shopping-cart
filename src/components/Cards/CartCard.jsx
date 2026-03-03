import './CartCard.css'

const CartCard = ({number, title, price, picture, quantity, cartItems, setCartItems}) => {

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

    const handleRemove = ()=>{

        let button = {id: number};
        const i = cartItems.findIndex(e => e.id === button.id)

        let newCart = [...cartItems];
        newCart.splice(i, 1);
        setCartItems(newCart);
    }

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
                        <button className='cartRemove' id={number} onClick={handleRemove}>X</button>
                    </div>
                </div>
            </div>
            <hr className="faded-line"></hr>
        </>
    )
}

export { CartCard }