import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './List.jsx'
import Search from './Search.jsx'
import Foods from './FoodsItem.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      jobs: [],
      foods: []
     }
     this.favHandler = this.favHandler.bind(this)
     this.searchDb = this.searchDb.bind(this)
     this.getFavs = this.getFavs.bind(this)
     this.getFoods = this.getFoods.bind(this)
  }

  favHandler(jobId) {
    //post to either delete or add a favorite to db
    //
  }

  searchDb(location, keywords, isFulltime) {
    axios.get('/search', {
      params: {
        location: location,
        keywords: keywords,
        isFulltime: isFulltime
      }
    })
    .then((data)=> {
      this.setState({jobs: data.data},
      console.log(this.state.jobs))
    })
  }

  getFoods(job) {
    axios.get('/foods', {
      params: {
        job: job
      }
    })
    .then((foods)=> {
      console.log(foods.data)
      this.setState({foods: foods.data})
    })
  }

  getFavs() {
    //get all 
  }

  render() { 
    return ( 
      <div>
        {/* navigation bar */}
        <Search searchDb={this.searchDb}/>
        <pre>{JSON.stringify(this.state.jobs)}</pre>
        <pre>{JSON.stringify(this.state.foods)}</pre>
        <List jobs={this.state.jobs} favHandler={this.favHandler} getFoods={this.getFoods}/>
        <Foods foods={this.state.foods}/>
      </div>
     )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
 