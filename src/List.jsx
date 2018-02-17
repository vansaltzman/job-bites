import React from 'react'
import JobItem from './JobItem.jsx'

const List = ({jobs, favHandler, getFoods}) => {
  return (
  <div style={{width: '33%'}}>
      {jobs.map((job, i)=> {
      return <JobItem 
        favHandler={favHandler} 
        getFoods={getFoods} 
        job={job} 
        key={job.id}
      />})}
  </div>
  )
}
 
export default List;