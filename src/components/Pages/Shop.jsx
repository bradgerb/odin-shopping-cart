import { useState, useEffect } from "react";
import { dataFetch } from "../Data/dataFetch";
import { ShopGrid } from "../Data/ShopGrid";
import Nav from "../Navigation/Nav";

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
        <Nav />
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