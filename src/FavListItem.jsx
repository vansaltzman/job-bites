import React from 'react'
import Foods from './FoodsItem.jsx'

const FavListItem = ({job, favHandler, getFoods}) => {
  return (
      <div class="row">
      <div class="card border-secondary mb-3" style={{width: '33%'}}>
        <div class="card-header">
          <button 
            style={{'float': 'right'}} 
            onClick={(e)=>favHandler(job)} 
            type="button" 
            class="btn btn-secondary"
          >Remove</button>
          {job.company}
        </div>
        <div class="card-body">
          <h6 class="card-title">{job.location}</h6>
          <h4 class="card-title">{job.title}</h4>
          <p class="card-text"><a href={job.url}>Go To GitHub Jobs</a></p>
      </div>
      </div>
      <div class="col-7">
        <Foods foods={job.foods}/>
      </div>
      </div>
  )
}
 
export default FavListItem;