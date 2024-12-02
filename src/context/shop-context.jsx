import {createContext, useState} from "react";
import {PRODUCTS} from "../product.js";
export const ShopContext = createContext(null)
function getDefaultCart(){
    let cart = {}
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i] = 0
    }
    return cart
}
export default function ShopContextProvider(props){
    const [cartItems,setCartItems] = useState(getDefaultCart())
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                if (itemInfo) {
                    console.log(`Adding ${cartItems[item]} * ${itemInfo.price}`);
                    totalAmount += cartItems[item] * itemInfo.price;
                }
            }
        }
        console.log(`Total Amount: ${totalAmount}`);
        return totalAmount;
    };

    function addToCart(itemId){
        setCartItems((prevState)=>({...prevState,[itemId]:prevState[itemId]+1}))
    }
    function removeFromCart(itemId){
        setCartItems((prevState)=>({...prevState,[itemId]:prevState[itemId]-1}))
    }
    function updateCartItemCount(newAmount, itemId){
        setCartItems((prevState)=>({...prevState,[itemId]:newAmount}))
    }
    const contextValue ={cartItems, addToCart, removeFromCart,updateCartItemCount,getTotalCartAmount}
    return(
       <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}
