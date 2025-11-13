import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';
import AdminPanel from './components/AdminPanel';

const API = 'http://localhost:5000/api';

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [orders, setOrders] = useState([]);

  // Fetch menu items on load
  const fetchItems = () =>
    fetch(API + '/items')
      .then(res => res.json())
      .then(setItems);

  useEffect(fetchItems, []);

  const addToCart = item => setCart([...cart, item]);

  const placeOrder = () => {
    fetch(API + '/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart, customerName }),
    }).then(() => {
      setCart([]);
      setCustomerName('');
      alert('Order placed!');
    });
  };

  const addItem = (name, price) => {
    fetch(API + '/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price }),
    }).then(fetchItems);
  };

  const fetchOrders = () =>
    fetch(API + '/orders')
      .then(res => res.json())
      .then(setOrders);

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>Welcome to CanteenX</h1>
      <Menu items={items} addToCart={addToCart} />
      <Cart
        cart={cart}
        customerName={customerName}
        setCustomerName={setCustomerName}
        placeOrder={placeOrder}
      />
      <hr />
      <AdminPanel
        addItem={addItem}
        items={items}
        refreshItems={fetchItems}
        orders={orders}
        fetchOrders={fetchOrders}
      />
    </div>
  );
}

export default App;