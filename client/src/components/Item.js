import React from 'react';

const Item = ({ item }) => (
  <div>
    <div>
    Name: <b>{ item.name }</b>
    </div> 
    <div>
      Quantity: { item.quantity }
    </div> 
  </div>
)

export default Item