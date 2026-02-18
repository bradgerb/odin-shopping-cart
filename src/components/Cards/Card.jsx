import './Card.css'

const Card = ({title, price, description, picture}) => {

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

    return (
        <>
            <div className="card">
                <h1>{shortTitle}</h1>
                <div className='image'><img src={picture} alt="Item image" height={70}/></div>
                <div className='text'>{shortDescription}</div>
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