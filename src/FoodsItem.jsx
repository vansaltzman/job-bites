import React from 'react'

const FoodsItem = ({foods}) => {
  return 
  <div>
    <ul>
    {foods.map((food)=> {
      <li>
        <span>{food.type}</span> 
        {food.name} 
        <span>{food.distance}</span>
      </li>
      })}
      </ul>
  </div>
}
 
export default FoodsItem;