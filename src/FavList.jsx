import React from 'react'
import FavListItem from './FavListItem.jsx'

const FavList = ({jobs, favHandler, getFoods}) => {
  return (
    <div class="container">
        {jobs.map((job, i)=> {
        return <FavListItem 
          favHandler={favHandler} 
          getFoods={getFoods} 
          job={job} 
          key={job.id}
        />})
      }
    </div>
  )
}
 
export default FavList;