import React from 'react'

const FoodsItem = ({foods, focusHandler}) => 

  {
  if (foods.length > 1) {
    return  (
      <table class="table table-hover">
      {/* <thead> */}
          {/* <tr> */}
            {/* <th scope="col">Name</th> */}
            {/* <th scope="col">Rating</th> */}
            {/* <th scope="col">Dist</th> */}
            {/* <th scope="col">Price</th> */}
            {/* <th scope="col">Link</th> */}
          {/* </tr> */}
          {/* </thead> */}
          <tbody>
          {foods.map((food, i)=> {
            return <tr key={i} onClick={()=> focusHandler(food)} style={{cursor: 'pointer'}}>
                      <th scope="row" style={{width: '200px'}}>{food.name}</th>
                      {/* <td scope="row">{food.rating}</td> */}
                      <td scope="row">{Math.round(food.distance) + 'm'}</td>
                      {/* <td scope="row">{food.price}</td> */}
                      {/* <td scope="row"> <a href={food.url}>Url</a> </td> */}
                    </tr>})}
          </tbody>
      </table> 
      
      )
  } else{
    return (
      <div class="alert alert-dismissible alert-light">
        <strong>Nothing Nearby</strong>
      </div>
      )
  }
}
 
export default FoodsItem;