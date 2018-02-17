import React from 'react'

const JobItem = ({job, favHandler, getFoods}) => {
  return (
  <li>
    <div onClick={(e)=>favHandler(job)}>
      Fav
    </div>
    <span>{job.title}</span>
    <span>{job.company}</span>
    <p>{job.description.slice(0,200)}</p> {/* limit to some length */}
    <div>
      <a href={job.url}></a>
    </div>
    <button onClick={(e)=> getFoods(job)}>Nearby Bites</button>
  </li>
  )
}
 
export default JobItem;