import React from 'react';

const ShoppingCart = ({ cartItems, removeCartItem, updateCartItem, totalPrice }) => {
    return (
        <div>
            <h2>Carrito de Compra</h2>
            <div id="cart-items">
                {cartItems.map(item => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <input
                            type="number"
                            value={item.quantity}
                            min="1"
                            onChange={(e) => updateCartItem(item.id, e.target.value)}
                        />
                        <p>${item.price}</p>
                        <button onClick={() => removeCartItem(item.id)}>Eliminar</button>
                    </div>
                ))}
            </div>
            <p>Total: ${totalPrice.toFixed(2)}</p>
        </div>
    );
};

export default ShoppingCart;
