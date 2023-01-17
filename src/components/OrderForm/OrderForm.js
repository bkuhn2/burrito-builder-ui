import React, { useState } from 'react';

const OrderForm = ({addOrder}) => {

  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name && ingredients.length > 0) {
      // console.log('conditional if name, inglegth');
      const newOrder = {
        name: name,
        ingredients: ingredients
      }
      addOrder(newOrder);
      clearInputs();
    }
  }

  const clearInputs = () => {
    setName('');
    setIngredients([]);
  }

  const handleNameChange = (name) => {
    setName(name);
  }

  const handleIngredientChange = (event) => {
    event.preventDefault();
    setIngredients([...ingredients, event.target.name]);
  }
  
  const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
  const ingredientButtons = possibleIngredients.map(ingredient => {
    return (
      <button key={ingredient} name={ingredient} onClick={event => handleIngredientChange(event)}> 
        {ingredient}
      </button>
    )
    });

  return (
    <form>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={event => handleNameChange(event.target.value)} 
      />

      { ingredientButtons }

      <p>Order: { ingredients.join(', ') || 'Nothing selected' }</p>

      <button onClick={event => handleSubmit(event)}>
        Submit Order
      </button>
    </form>
  )
  
}

export default OrderForm;
