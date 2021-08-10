import React from "react";
import Product from "./Product";

const Main = ({ products }) => {
    console.log(products);
    return (
        <>
            <div className="block col-2">
                <h2>Products</h2>

                <div className="row">
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Main;
