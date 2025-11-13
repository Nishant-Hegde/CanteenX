import React, { useState } from 'react';

function AdminPanel({ addItem, items, refreshItems, orders, fetchOrders }) {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  return (
    <div>
      <h2>Admin Panel</h2>
      <input
        placeholder="Item name"
        value={itemName}
        onChange={e => setItemName(e.target.value)}
      />
      <input
        placeholder="Price"
        type="number"
        value={itemPrice}
        onChange={e => setItemPrice(e.target.value)}
      />
      <button
        onClick={() => {
          addItem(itemName, Number(itemPrice));
          setItemName('');
          setItemPrice('');
        }}
        disabled={!itemName || !itemPrice}
      >
        Add Item
      </button>
      <button onClick={refreshItems}>Refresh Menu</button>
      <button onClick={fetchOrders}>View Orders</button>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <strong>{order.customerName}</strong> ordered{' '}
            {order.items.map(i => i.name).join(', ')} at{' '}
            {new Date(order.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
