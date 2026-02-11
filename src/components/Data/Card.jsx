const Card = ({number, title, price, description}) => {

    return (
        <>
            <div className="card">
                card {number}
                <h1>{title}</h1>
                <div>{description}</div>
                <div>{price}</div>
            </div>
        </>
    )
}

export { Card }