import React from 'react';

const GroceryList = (list) => (
  <ul>
      list.map(item => <Item item="item" key={ item.id } />)
  </ul>
)

export default GroceryList