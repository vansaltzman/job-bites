import React from 'react'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchIn: '',
      location: '',
      isFulltime: false,
     }
  }

  onChange(e, state) { //might need to change for checkbox
    let newState = {}
    newState[state] = e.target.value
    this.setState(newState)
  }

  render() { 
    return ( 
      <div>
        <form action="submit">
          <input value={this.state.location} onChange={(e)=> onChange('location')} type="text"/>
          <input value={this.state.searchIn} onChange={(e)=> onChange('searchIn')} type="text"/>
          <input value={this.state.isFulltime} onChange={(e)=> onChange('isFulltime')} type="checkbox" name="Full Time?" id="fullTime"/>
          <button>Search</button>
        </form>
      </div>
     )
  }
}
 
export default Search;