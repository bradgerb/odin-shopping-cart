import { useEffect } from "react";

const Shop = () => {

    useEffect(()=> {

      const items = [];

      for(let i = 1; i <= 5; i++){
          items.push(i);
      }

      const storeData = Promise.all(
          [...items].map(async (id) => {
              const response = await fetch(`https://fakestoreapi.com/products/${id}`);
              const data = await response.json();

              return {
                  id: data.id,
                  title: data.title
              }
          })
        )
        console.log(storeData);
    },[])

  return (
    <>
        <div>
            <h1>This is a shop!</h1>
            <p>It is not a ship</p>
        </div>
    </>
  );
};

export default Shop;