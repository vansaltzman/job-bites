import React from 'react'

const FoodsItem = ({foods}) => (
  <div>
    <ul>
    {foods.map((food)=> {
      return <li key={food.id}>
        <span>{food.rating}</span> 
        {food.name} 
        <span>{food.distance}</span>
      </li>
      })}
    </ul>
  </div>
)
 
export default FoodsItem;