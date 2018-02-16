import React from 'react'

const JobItem = ({job}) => {
  return 
  <div>
    <span>{job.title}</span>
    <span>{job.company}</span>
    <p>{job.desc}</p> {/* limit to some length */}
    <div>
      <a href={job.link}></a>
    </div>
  </div>
}
 
export default JobItem;