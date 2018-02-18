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
      favView: true
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
        .then((favs)=> this.setState({favView: val, favs: favs.data}))
    }

    else {
      this.setState({favView: val})
    }
  }

  favHandler(job) {
    if (this.state.favView) {
      console.log('delete request')
      axios.delete('/favs', {
        params: {
          id: job.id
        }
      })
      .then(() => {
        if(this.state.favView) {
          this.getFavs()
            .then((favs)=> {
              this.setState({favs: favs.data})
            })
          }
      })
    } else {
      console.log('post request')
      axios.post('/favs', {job: job})
        .then(() => {
          if(this.state.favView) {
            this.getFavs()
              .then((favs)=> {
                this.setState({favs: favs.data})
              })
            }
        })
    }
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
      this.setState({jobs: data.data, favView: false},
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
<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
<a className="navbar-brand">JOB BITES</a>
<button 
  className="navbar-toggler" 
  type="button" 
  data-toggle="collapse" 
  data-target="#navbarColor01" 
  aria-controls="navbarColor01" 
  aria-expanded="false" 
  aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarColor01">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <a 
        className="nav-link"
        onClick={()=> this.favTabHandler(false)}
      >Search</a>
    </li>
    <li className="nav-item">
      <a 
        className="nav-link"
        onClick={()=> this.favTabHandler(true)}
      >Favs</a>
    </li>
  </ul>
  <Search searchDb={this.searchDb}/>
</div>
</nav>
<div class="container" style={{paddingTop: '75px'}}>
 <List 
  jobs={this.state.jobs} 
  favHandler={this.favHandler} 
  getFoods={this.getFoods}
/>
{/* <div class="col-7">
 {this.state.jobs.length > 0 ? <Foods foods={this.state.foods}/> : <div></div>}
</div> */}
</div>
</div>
       )

    } else if (this.state.favView) {
      return ( 
<div>
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand">JOB BITES</a>
  <button 
    className="navbar-toggler" 
    type="button" 
    data-toggle="collapse" 
    data-target="#navbarColor01" 
    aria-controls="navbarColor01" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
  <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a 
          className="nav-link"
          onClick={()=> this.favTabHandler(false)}
        >Search</a>
      </li>
      <li className="nav-item">
        <a 
          className="nav-link"
          onClick={()=> this.favTabHandler(true)}
        >Favs</a>
      </li>
    </ul>
    <Search searchDb={this.searchDb}/>
  </div>
  </nav>

  <div style={{paddingTop: '75px'}}>
    <FavList 
      jobs={this.state.favs} 
      favHandler={this.favHandler} 
      getFoods={this.getFoods}
    />
  </div>
</div>
       )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
 