import React from 'react';
import Item from './Item';
import AddItem from './AddItem';


const GroceryList = ({ list, createItem }) => (
  <div>
    <AddItem createItem={ createItem } />
    <ul>
      { list.map((item) => (<Item item={item} key={ item.id } />)) }
    </ul>
  </div>

)

export default GroceryList