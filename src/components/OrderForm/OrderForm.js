import React, { useState } from 'react';

const OrderForm = () => {

  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);

  // constructor(props) {
  //   super();
  //   this.props = props;
  //   this.state = {
  //     name: '',
  //     ingredients: []
  //   };
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    clearInputs();
  }

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.clearInputs();
  // }

  const clearInputs = () => {
    setName('');
    setIngredients([]);
    // this.setState({name: '', ingredients: []});
  }

  
  const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
  const ingredientButtons = possibleIngredients.map(ingredient => {
    return (
      <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}> 
        {ingredient}
      </button>
    )
    });

//NOTE: hand ingredient change and name change not written yet

  return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={e => this.handleNameChange(e)} 
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
