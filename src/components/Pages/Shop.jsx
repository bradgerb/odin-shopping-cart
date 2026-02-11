import { useState, useEffect } from "react";
import { dataFetch } from "../Data/dataFetch";
import { Card } from "../Data/Card";

const Shop = () => {

    const [shopItems, setShopItems] = useState([]);

    useEffect(() => {
        const getShopData = async()=> {
            const shopData = await dataFetch();
            setShopItems(shopData);
        }
        // console.log(shopItems);
        getShopData();
        // console.log(shopItems);
    }, []);


    // useEffect(()=> {

    //   const items = [];

    //   for(let i = 1; i <= 5; i++){
    //       items.push(i);
    //   }

    //   const storeData = Promise.all(
    //       [...items].map(async (id) => {
    //           const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    //           const data = await response.json();
    //           console.log(data);

    //           return {
    //               id: data.id,
    //               title: data.title
    //           }
    //       })
    //     )
    //     console.log(storeData);
    // },[])

  return (
    <>
        <div>
            <h1>This is a shop!</h1>
            <p>It is not a ship</p>
            {shopItems.map((image)=>(
                <div key={image.id}>
                    <Card
                        number = { image.id }
                        title = { image.title }
                        price = { image.price }
                        description = { image.description }
                    />
                </div>
            ))}
        </div>
    </>
  );
};

export default Shop;