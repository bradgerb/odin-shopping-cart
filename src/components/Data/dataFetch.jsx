async function dataFetch() {
    const numberOfProducts = [];

    for(let i = 1; i <= 5; i++){
        numberOfProducts.push(i);
    }

    const storeData = Promise.all(
        [...numberOfProducts].map(async (id) => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            console.log(data);
            return {
                id: data.id,
                title: data.title,
                price: data.price,
                description: data.description,
            }
        })
    )
    return storeData
}

export { dataFetch }