// App.js
"use client"
import React, { useState, useEffect } from 'react';
import ProductGrid from '../components/ProductGrid';
import ShoppingCart from '../components/ShoppingCart';
import productsData from '../app/data';

const App = () => {
    const [products, setProducts] = useState(productsData);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        updateTotal();
    }, [cartItems]);

    const addToCart = (productId) => {
        const selectedProduct = products.find(product => product.id === productId);
        setCartItems([...cartItems, { ...selectedProduct, quantity: 1 }]);
    };

    const updateCartItem = (productId, quantity) => {
        const updatedCart = cartItems.map(item =>
            item.id === productId ? { ...item, quantity: parseInt(quantity, 10) } : item
        );
        setCartItems(updatedCart);
    };

    const removeCartItem = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
    };

    const updateTotal = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        });
        setTotalPrice(total);
    };

    return (
        <div className="app">
            <header>
                <h1>Almacene Super Mario</h1>
            </header>

            <section id="main">
                {Object.keys(productsData.reduce((acc, product) => {
                    acc[product.category] = acc[product.category] || [];
                    acc[product.category].push(product);
                    return acc;
                }, {})).map(category => (
                    <div key={category}>
                        <h2>{category}</h2>
                        <ProductGrid
                            products={products.filter(product => product.category === category)}
                            addToCart={addToCart}
                        />
                    </div>
                ))}
            </section>

            <aside id="cart">
                <ShoppingCart
                    cartItems={cartItems}
                    removeCartItem={removeCartItem}
                    updateCartItem={updateCartItem}
                    totalPrice={totalPrice}
                />
            </aside>
        </div>
    );
};

export default App;
