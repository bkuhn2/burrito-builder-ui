export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const sendOrder = (order) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(order)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('bad response')
      }
    })
}