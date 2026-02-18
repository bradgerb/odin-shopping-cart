import './Card.css'

const Card = ({title, price, description, picture}) => {

    let priceDecimals = 
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price)

    return (
        <>
            <div className="card">
                <h1>{title}</h1>
                <div className='image'><img src={picture} alt="Item image" height={70}/></div>
                <div className='text'>{description}</div>
                <br />
                <div className='price'>{priceDecimals}</div>
                <br />
                <div className='cart'>
                    <div><input className='inputNumber' min={1} max={9} defaultValue={1} type="number" /></div>
                    <button className="addToCart">Add to cart</button>
                </div>
            </div>
        </>
    )
}

export { Card }