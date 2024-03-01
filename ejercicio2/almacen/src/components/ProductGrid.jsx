import React from 'react';

const ProductGrid = ({ products, addToCart }) => {
    return (
        <div id="product-grid">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                    <button onClick={() => addToCart(product.id)}>Agregar al Carrito</button>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
