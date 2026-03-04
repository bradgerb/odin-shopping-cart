import './CartCard.css'

const CartCard = ({number, title, price, picture, quantity, cartItems, setCartItems, finalPrice, setFinalPrice}) => {

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

    const removeFromCart = (i)=> {
        let newCart = [...cartItems];
        setFinalPrice(finalPrice - (newCart[i].price * newCart[i].quantity));
        newCart.splice(i, 1);
        setCartItems(newCart);
    }

    const handleRemove = ()=>{
        let button = {id: number};
        const i = cartItems.findIndex(e => e.id === button.id);
        removeFromCart(i);
    }

    const handleMinus = ()=> {
        let button = {id: number};
        const i = cartItems.findIndex(e => e.id === button.id);
        
        let newCart = [...cartItems];

        if (newCart[i].quantity > 1) {
            setFinalPrice(finalPrice - newCart[i].price);
            newCart[i].quantity--;
            setCartItems(newCart);
        } else {
            removeFromCart(i);
        }
    }

    const handlePlus = ()=> {
        let button = {id: number};
        const i = cartItems.findIndex(e => e.id === button.id);
        
        let newCart = [...cartItems];
        setFinalPrice(finalPrice + newCart[i].price);
        newCart[i].quantity++;
        setCartItems(newCart);
    }

    return (
        <>
            <div className="cartCard">
                <div className='image'><img src={picture} alt="Item image" height={70}/></div>
                <div className='title'>{title}</div>
                <div className='cartTotals'>
                    <div className='quantity'>
                        <button className='incrementButtonMinus' onClick={handleMinus}>-</button>
                        <div className="quantityNumber">{quantity}</div>
                        <button className='incrementButtonPlus' onClick={handlePlus}>+</button>
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