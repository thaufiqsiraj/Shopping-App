import { PRODUCTS } from "../../product.js";
import { ShopContext } from "../../context/shop-context.jsx";
import { useContext } from "react";
import CartItem from "./cart-item.jsx";
import "./cart.css";
import {useNavigate} from "react-router-dom"

export default function Cart() {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount(); // Use lowercase "t" for consistency
    const navigate = useNavigate()
    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} key={product.id} />;
                    }
                })}
            </div>
            {totalAmount>0?(
                <div className="checkout">
                    <p>Subtotal: ${totalAmount.toFixed(2)}</p> {/* Display total */}
                    <button onClick={()=>navigate("/")}>Continue Shopping</button>
                    <button>Checkout</button>
                </div>
            ) : (<h1>Your cart is empty</h1>
            )}
        </div>
    );
}
