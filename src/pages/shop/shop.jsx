import {PRODUCTS} from "../../product.js";
import Product from "./product.jsx";
import "./shop.css"
export default function Shop(){
    return(
        <div className="shop">
            <div className="shopTitle">
                <h1>Shopping App</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product)=>(
                    <Product data={product}/>
                ))}
            </div>
        </div>
    )
}