import React from "react";

const Basket = ({ cartItems, onAdd, onRemove }) => {
    const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemPrice * 0.14;
    const shippingPrice = itemPrice > 2000 ? 0 : 50;
    const totalPrice = itemPrice + taxPrice + shippingPrice;

    return (
        <>
            <div className="block col-1">
                <h2>Cart Items</h2>
                <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>

                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-2">{item.name}</div>
                        <div className="col-2">
                            <button onClick={() => onAdd(item)} className="add">
                                +
                            </button>
                            <button
                                onClick={() => onRemove(item)}
                                className="remove"
                            >
                                -
                            </button>
                        </div>
                        <div className="col-2 text-right">
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>
                    </div>
                ))}

                {cartItems.length !== 0 && (
                    <>
                        <hr />
                        <div className="row">
                            <div className="col-2">Item Price</div>
                            <div className="col-1 text-right">
                                ${itemPrice.toFixed(2)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">Tax Price</div>
                            <div className="col-1 text-right">
                                ${taxPrice.toFixed(2)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">Shipping Price</div>
                            <div className="col-1 text-right">
                                ${shippingPrice.toFixed(2)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <strong>Total Price</strong>
                            </div>
                            <div className="col-1 text-right">
                                ${totalPrice.toFixed(2)}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Basket;
