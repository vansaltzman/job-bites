import React from 'react'
import FoodsItem from './FoodsItem.jsx';
import FoodFocus from './FoodFocus.jsx';
import axios from 'axios';

class JobItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      foods: [],
      focus: {}
     }
     this.getFoods = this.getFoods.bind(this)
     this.focusHandler = this.focusHandler.bind(this)
  }

  getFoods(job) {
    console.log(job)
    return axios.get('/foods', {
      params: {
        job: job
      }
    })
    .then((foods)=> {
      this.setState({foods: foods.data})
    })
  }

  focusHandler(food) {
    console.log(food)
    this.setState({focus: food})
  }

  render() { 
    return ( 
    <div class="row">
    <div class="card border-secondary mb-3" style={{minHeight: '305px', width: '33%'}}>
      <div class="card-header">{this.props.job.company} 
      <button 
        style={{'float': 'right'}} 
        onClick={(e)=>this.props.favHandler(this.props.job)} 
        type="button" 
        class="btn btn-primary"
      >Favorite</button>
    </div>
      <div class="card-body">
    <h6 class="card-title">{this.props.job.location}</h6>
    <h4 class="card-title">{this.props.job.title}</h4>
    <p class="card-text"><a href={this.props.job.url}>Go To GitHub Jobs</a></p>
  </div>
  </div>

  <div class="col-4">
    {this.state.foods.length > 0 ? <FoodsItem focusHandler={this.focusHandler} foods={this.state.foods}/> : 
    <button 
      class="btn btn-info" 
      onClick={(e)=> this.getFoods(this.props.job)}
    >Nearby Bites</button> }
  </div>
      <FoodFocus food={this.state.focus}/>
  </div>
     )
  }
}
 
export default JobItem;