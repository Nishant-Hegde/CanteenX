import React from 'react';

function Menu({ items, addToCart }) {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name} - ₹{item.price}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;