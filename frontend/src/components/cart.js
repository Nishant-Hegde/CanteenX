import React from 'react';

function Cart({ cart, customerName, setCustomerName, placeOrder }) {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
      <input
        placeholder="Customer name"
        value={customerName}
        onChange={e => setCustomerName(e.target.value)}
      />
      <button onClick={placeOrder} disabled={!cart.length || !customerName}>
        Place Order
      </button>
    </div>
  );
}

export default Cart;
