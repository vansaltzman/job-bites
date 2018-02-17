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

  onChange(e, state) {
    let newState = {}
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    newState[state] = value
    this.setState(newState)
  }

  onClick(e) {
    e.preventDefault()
    let comp = this.state
    this.props.searchDb(comp.location, comp.searchIn, comp.isFulltime)
    this.setState({searchIn: '', location: ''})
  }

  render() { 
    return ( 
      <form className="form-inline my-2 my-lg-0">
        <input 
            placeholder="Location" 
            className="form-control mr-sm-2"
            value={this.state.location} 
            onChange={(e)=> this.onChange(e, 'location')} 
            type="text"
          />
          <input 
            placeholder="Keywords" 
            value={this.state.searchIn} 
            onChange={(e)=> this.onChange(e ,'searchIn')} 
            type="text"
            className="form-control mr-sm-2"
        />
        <button 
          onClick={(e)=>this.onClick(e)} 
          className="btn btn-secondary my-2 my-sm-0"
        >Search</button>
       
        <label className="btn btn-primary">
          <input 
            type="checkbox"
            value={this.state.isFulltime} 
            onChange={(e)=> this.onChange(e, 'isFulltime')}
          />   Full Time?
        </label>
   
      </form>

     )
  }
}
 
export default Search;