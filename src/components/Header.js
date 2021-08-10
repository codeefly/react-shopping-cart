import React from "react";

const Header = ({ countCartItems }) => {
    return (
        <>
            <header className="row block center">
                <div>
                    <a href="#/">
                        <h1>Small Shopping Cart</h1>
                    </a>
                </div>
                <div>
                    <a href="#/">Signin</a>
                    <a href="#/">
                        Cart {""}
                        {countCartItems ? (
                            <button className="badge">{countCartItems}</button>
                        ) : (
                            ""
                        )}
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;
