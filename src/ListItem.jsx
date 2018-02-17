import React from 'react'
import JobItem from './JobItem.jsx'
import FoodItem from './FoodsItem.jsx'

const ListItem = ({job, foods, favHandler}) => {
  return
  <div>
    {/* favorite component */}
    <JobItem job={job}/>
    <FoodItem foods={foods}/>
  </div>
}
 
export default ListItem;