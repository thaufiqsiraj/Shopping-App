import {ShopContext} from "../../context/shop-context.jsx";
import {useContext} from "react";

export default function Product(props){
    const {id,productName, price, productImage} = props.data
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartItemCount = cartItems[id]
    return(
        <div className="product">
            <img src={productImage}/>
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
            </div>
            <button className="addToCartBttn" onClick={()=>addToCart(id)}>
                Add to cart {cartItemCount>0 && <>({cartItemCount})</>}
            </button>
        </div>
    )
}
