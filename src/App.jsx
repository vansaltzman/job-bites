import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './List.jsx'
import Search from './Search.jsx'
import Foods from './FoodsItem.jsx'
import FavList from './FavList.jsx'
import FavListItem from './FavListItem.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      jobs: [],
      favs: [],
      foods: [],
      favView: false
     }
     this.favHandler = this.favHandler.bind(this)
     this.searchDb = this.searchDb.bind(this)
     this.getFavs = this.getFavs.bind(this)
     this.getFoods = this.getFoods.bind(this)
     this.favTabHandler = this.favTabHandler.bind(this)
  }

  componentDidMount() {
    this.getFavs()
      .then((favs)=> this.setState({favs: favs.data}))
  }

  favTabHandler(val) {
    if (val) {
      this.getFavs()
        .then(()=> this.setState({favView: val}))
    }

    else {
      this.setState({favView: val})
    }
  }

  favHandler(job) {
    axios.post('/favs', {job: job})
      .then(() => {
        if(this.state.favView) {
          this.getFavs()
            .then((favs)=> {
              console.log(favs)
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
    return axios.get('/foods', {
      params: {
        job: job
      }
    })
    .then((foods)=> {
      this.setState({foods: foods.data})
    })
  }

  getFavs() {
    return axios.get('/favs') 
  }

  render() { 
    if (!this.state.favView) {
      return ( 
        <div>
          <h1>SEARCH</h1>
          <button onClick={()=> this.favTabHandler(false)}>Search</button>
          <button onClick={()=> this.favTabHandler(true)}>Favs</button>
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
          <h1>FAVS</h1>
          <button onClick={()=> this.favTabHandler(false)}>Search</button>
          <button onClick={()=> this.favTabHandler(true)}>Favs</button>
          <Search searchDb={this.searchDb}/>
          {console.log(this.state.favs.data)}
          <pre>{JSON.stringify(this.state.favs)}</pre>
          <pre>{JSON.stringify(this.state.foods)}</pre>
          <FavList jobs={this.state.favs} favHandler={this.favHandler} getFoods={this.getFoods}/>
        </div>
       )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
 