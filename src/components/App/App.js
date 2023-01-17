import React, { useEffect, useState } from 'react';
import './App.css';
import { getOrders, sendOrder } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

const App = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders()
      .then(data => {
        // console.log('get orders data: ', data.orders);
        setOrders(data.orders);
      })
      .catch(err => console.error('Error fetching:', err));
  }, []);

  const addOrder = (order) => {
    sendOrder(order)
      .then(data => {
        console.log('addOrder post data: ', data);
        setOrders([...orders, data]);
      })
      .catch(err => console.error('Error POSTING:', err));
  }
  
  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm addOrder={addOrder}/>
      </header>

      <Orders orders={orders}/>
    </main>
  );
}


export default App;
