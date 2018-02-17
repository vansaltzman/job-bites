import React from 'react'
import FavListItem from './FavListItem.jsx'

const FavList = ({jobs, favHandler, getFoods}) => {
  return (
    <ul>
        {jobs.map((job, i)=> {
        return <FavListItem 
          favHandler={favHandler} 
          getFoods={getFoods} 
          job={job} 
          key={job.id}
        />})
      }
    </ul>
  )
}
 
export default FavList;