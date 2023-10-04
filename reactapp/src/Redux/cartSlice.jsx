import React, { useState } from 'react';

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    // Add more products as needed
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      {/* Product List */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      {/* Cart Items */}
      <div>
        <h2>Cart</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Total Amount */}
      <div>
        <p>Total: ${getTotalAmount().toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ShoppingCart;
