import React from 'react'

const JobItem = ({job, favHandler, getFoods}) => {
  return (
  <div class="card border-secondary mb-3">
    <div class="card-header">{job.company} 
    <button style={{'float': 'right'}} onClick={(e)=>favHandler(job)} type="button" class="btn btn-primary">Save</button>
  </div>
    <div class="card-body">
  <h6 class="card-title">{job.location}</h6>
  <h4 class="card-title">{job.title}</h4>
  <p class="card-text"><a href={job.url}>Go To GitHub Jobs</a></p>
  <button class="btn btn-info" onClick={(e)=> getFoods(job)}>Nearby Bites</button>
</div>
</div>
  )

}
 
export default JobItem;