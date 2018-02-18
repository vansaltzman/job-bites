import React from 'react'
import FoodItem from './FoodsItem.jsx'
import FoodFocus from './FoodFocus.jsx';

class FavListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      focus: {}
     }
     this.focusHandler = this.focusHandler.bind(this)
  }

  focusHandler(food) {
    console.log(food)
    this.setState({focus: food})
  }

  render() {

    return (
      <div class="row">
      <div class="card border-secondary mb-3" style={{width: '33%'}}>
        <div class="card-header">
          <button 
            style={{'float': 'right'}} 
            onClick={(e)=>favHandler(this.props.job)} 
            type="button" 
            class="btn btn-secondary"
          >Remove</button>
          {this.props.job.company}
        </div>
        <div class="card-body">
          <h6 class="card-title">{this.props.job.location}</h6>
          <h4 class="card-title">{this.props.job.title}</h4>
          <p class="card-text"><a href={this.props.job.url}>Go To GitHub Jobs</a></p>
      </div>
      </div>
      <div class="col-4">
        <FoodItem focusHandler={this.focusHandler} foods={this.props.job.foods}/>
      </div>
        <FoodFocus food={this.state.focus}/>
      </div>
  )

  }
}

export default FavListItem;