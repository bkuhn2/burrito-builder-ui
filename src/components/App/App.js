import React, { useEffect, useState } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
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
  }, [])

  // componentDidMount() {
  //   getOrders()
  //     .catch(err => console.error('Error fetching:', err));
  // }

  
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm />
        </header>

        <Orders orders={orders}/>
      </main>
    );
}


export default App;
