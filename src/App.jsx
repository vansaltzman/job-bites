import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import List from ''
import Search from ''

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      jobs: [],
     }
     this.favHandler
     this.searchDb
     this.getFavs
  }

  favHandler(jobId) {
    //post to either delete or add a favorite to db
    //
  }

  searchDb(location, keywords, isFulltime) {
    //get from apis based on three search inputs
    //set jobs state
  }

  getFavs() {
    //get all 
  }

  render() { 
    return ( 
      <div>
        {/* navigation bar */}
        <Search searchDb={this.searchDb}/>
        <List jobs={this.state.jobs} favHandler={this.favHandler}/>
      </div>
     )
  }
}
 
export default App;