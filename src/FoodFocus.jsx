import React from 'react'

const FoodsItem = ({food}) => 

{
  if (!food.id) {
    return (
      <div></div>
    )
  } else {
    return  (
      <div className="col-4">
        <div class="card border-secondary mb-3" style={{ minHeight: '305px'}}>
          <div class="card-header">{food.name} <span>{food.rating}</span> <span>{food.is_closed ? 'Open' : 'Closed'}</span> </div>
          <div class="card-body">
            <h6 class="card-title">{food.location.display_address}</h6>
            <h4 class="card-title">{food.rating}</h4>
          </div>
      </div>
    </div>
      )
  }
}
 
export default FoodsItem;