import React from 'react'
import Foods from './FoodsItem.jsx'

const FavListItem = ({job, favHandler, getFoods}) => {
  return (
  <li>
    <div onClick={(e)=>favHandler(job)}>
      Fav
    </div>
    <span>{job.title}</span>
    <span>{job.company}</span>
    <div>
      <a href={job.url}></a>
    </div>
    <button onClick={(e)=> getFoods(job)}>Nearby Bites</button>
    {/* <Foods foods={this.state.job.foods}/> */}
  </li>
  )
}
 
export default FavListItem;