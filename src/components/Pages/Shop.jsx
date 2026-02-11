import { useState, useEffect } from "react";
import { dataFetch } from "../Data/dataFetch";
import { ShopGrid } from "../Data/ShopGrid";

const Shop = () => {

    const [shopItems, setShopItems] = useState([]);

    useEffect(() => {
        const getShopData = async()=> {
            const shopData = await dataFetch();
            setShopItems(shopData);
        }
        getShopData();
    }, []);

  return (
    <>
        <div>
            <h1>This is a shop!</h1>
            
            <div className="grid">
                <ShopGrid
                    shopItems = { shopItems }
                />
            </div>
            
        </div>
    </>
  );
};

export default Shop;