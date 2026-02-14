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
                <div className='image'><img src={picture} alt="Item image" width={100}/></div>
                <div>{description}</div>
                <br />
                <div>{priceDecimals}</div>
            </div>
        </>
    )
}

export { Card }