import React from 'react'
import JobItem from './JobItem.jsx'

const List = ({jobs, favHandler, getFoods}) => {
  return (
  <div class="col">
  <ul>
      {jobs.map((job, i)=> {
      return <JobItem 
        favHandler={favHandler} 
        getFoods={getFoods} 
        job={job} 
        key={job.id}
      />})}
  </ul>
  </div>
  )
}
 
export default List;