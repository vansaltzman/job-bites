import React from 'react'
import ListItem from './ListItem'

const List = ({jobs}) => {
  return 
  <div>
      {jobs.map((job, i)=> <ListItem job={job} foods={job.foods}/>)}
  </div>
}
 
export default List;