import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchIn: '',
      location: '',
      isFulltime: false,
     }
     this.onChange = this.onChange.bind(this)
     this.onClick = this.onClick.bind(this)
  }

  onChange(e, state) { //might need to change for checkbox
    let newState = {}
    newState[state] = e.target.value
    this.setState(newState)
  }

  onClick() {
    let comp = this.state
    this.props.searchDb(comp.location, comp.searchIn, comp.isFulltime)
    this.setState({searchIn: '', location: ''})
  }

  render() { 
    return ( 
      <div>
          <input placeholder="Location" value={this.state.location} onChange={(e)=> this.onChange(e, 'location')} type="text"/>
          <input placeholder="Keywords" value={this.state.searchIn} onChange={(e)=> this.onChange(e ,'searchIn')} type="text"/>
          <input value={this.state.isFulltime} onChange={(e)=> this.onChange(e, 'isFulltime')} type="checkbox" name="Full Time?" id="fullTime"/>
          <button onClick={this.onClick}>Search</button>
      </div>
     )
  }
}
 
export default Search;