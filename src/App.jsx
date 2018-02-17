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
      foods: [],
      favView: false
     }
     this.favHandler = this.favHandler.bind(this)
     this.searchDb = this.searchDb.bind(this)
     this.getFavs = this.getFavs.bind(this)
     this.getFoods = this.getFoods.bind(this)
  }

  favTabHandler() {
    this.setState({favView: true},
    this.getFavs())
  }

  favHandler(job) {
    axios.post('/favs', {job: job})
      .then(() => {
        if(this.state.favView) {
          getFavs()
            .then((favs)=> {
              this.setState({jobs: favs.data})
            })
          }
      })
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
      this.setState({foods: foods.data})
    })
  }

  getFavs() {
    axios.get('/favs') 
  }

  render() { 
    if (!this.state.favView) {
      return ( 
        <div>
          <button onClick={this.favHandler}>Search</button>
          <button onClick={this.favHandler}>Favs</button>
          <Search searchDb={this.searchDb}/>
          <pre>{JSON.stringify(this.state.jobs)}</pre>
          <pre>{JSON.stringify(this.state.foods)}</pre>
          <List jobs={this.state.jobs} favHandler={this.favHandler} getFoods={this.getFoods}/>
          <Foods foods={this.state.foods}/>
        </div>
       )
    } else if (this.state.favView) {
      return ( 
        <div>
          {/* navigation bar */}
          <Search searchDb={this.searchDb}/>
          <pre>{JSON.stringify(this.state.jobs)}</pre>
          <pre>{JSON.stringify(this.state.foods)}</pre>
          <List jobs={this.state.jobs} favHandler={this.favHandler} getFoods={this.getFoods}/>
        </div>
       )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
 