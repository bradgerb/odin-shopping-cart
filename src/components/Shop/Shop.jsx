import { useEffect } from "react";
import { dataFetch } from "../Data/dataFetch";
import { ShopGrid } from "./ShopGrid";
import Nav from "../Navigation/Nav";
import './Shop.css'

const Shop = ({shopItems, setShopItems, cartItems, setCartItems, finalPrice, setFinalPrice}) => {

    useEffect(() => {
        const getShopData = async()=> {
            const shopData = await dataFetch();
            setShopItems(shopData);
        }
        getShopData();
    }, [setShopItems]);

  return (
    <>
        <Nav 
            cartItems={cartItems}
        />
        <div>
            <h1>This is a shop!</h1>
            
            <div className="shopGrid">
                <ShopGrid
                    shopItems = { shopItems }
                    cartItems={ cartItems }
                    setCartItems = { setCartItems }
                    finalPrice = { finalPrice }
                    setFinalPrice = { setFinalPrice }
                />
            </div>
            
        </div>
    </>
  );
};

export default Shop;