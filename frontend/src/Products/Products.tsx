//import data from "./data";
import React, {useState, useEffect} from "react";
import axios from "axios";
import { error } from "console";

type Product = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    brand: string;
    rating: number;
    numberOfReviews: number;
}

const emptyProducts: Product[] = [];

function Products() {

    const[products, setProducts]: [Product[], (products: Product[]) => void]
    = useState(emptyProducts);

    useEffect(() => {
        axios.get<Product[]>("http://localhost:5241/catalog",
            {
                headers: {
                    "Content-Type": "application/json"
                }, 
            }
        )
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));

    }, []);


    return (
        <ul className="products">
            {products.map((product) => (
                <li key = {product.id}>
                    <div className="product">
                        <img
                            className="product-image"
                            src={product.imageUrl}
                            alt="product"
                        />
                        <div className="product-anme">
                            <a href="product.html">{product.name}</a>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">${product.price}</div>
                        <div className="product-rating">
                            {product.rating} Stars ({product.numberOfReviews} Reviews)
                        </div>
                    </div>
                </li>
            ))}

        </ul>
    );
}
export default Products;