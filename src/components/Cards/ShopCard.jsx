import { useState } from 'react';
import './ShopCard.css'

const ShopCard = ({number, title, price, description, picture, rating, cartItems, setCartItems, finalPrice, setFinalPrice}) => {

    const [quantity, setQuantity] = useState(1);

    let priceDecimals = 
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price)

    let shortDescription;
    let shortTitle;
    
    const descriptionEdit = ()=> {
        let limit = 150;
        if (description.length > limit) {
            shortDescription = description.substring(0,limit);
            shortDescription += '...';
        } else {
            shortDescription = description;
        }
    }
    descriptionEdit();

    const titleEdit = ()=> {
        let limit = 35;
        if (title.length > limit) {
            shortTitle = title.substring(0,limit);
            shortTitle += '...';
        } else {
            shortTitle = title;
        }
    }
    titleEdit();
        
    const handleClick = () => {
        let cartObject = {
            id: number,
            title: title,
            price: price,
            picture: picture,
            quantity: quantity,
        };

        if(cartItems.some(e => e.id === cartObject.id)) {
            let newCartItems = [...cartItems];
            const i = cartItems.findIndex(e => e.id === cartObject.id);
            // console.log(newCartItems[i].quantity);
            // console.log(cartObject.quantity);
            newCartItems[i].quantity = Number(cartItems[i].quantity) + Number(cartObject.quantity);
            // console.log(newCartItems[i].quantity);
            setCartItems(newCartItems);
        } else {
            setCartItems([...cartItems, cartObject]);
            setFinalPrice(finalPrice + (cartObject.price * cartObject.quantity));
        }
    }

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }

    return (
        <>
            <div className="shopCard">
                <h1>{shortTitle}</h1>
                <div className='image'><img src={picture} alt="Item image" height={70}/></div>
                <div className='text'>{shortDescription}</div>
                <br />
                <div className='priceWrapper'>
                    <div className='price'>{priceDecimals}</div>
                    <div>Rating: {rating}/5</div>
                </div>
                <br />
                <div className='cart'>
                    <div><input className='inputNumber' min={1} max={9} defaultValue={1} type="number" id={number} onChange={handleQuantity} /></div>
                    <button className="addToCart" onClick={handleClick}>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export { ShopCard }