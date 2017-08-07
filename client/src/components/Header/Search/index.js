import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchIcon from './SearchIcon';
import './index.css';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = { value: '' };
  }

  componentDidMount(){
    this.initSearchInput()
  }

  initSearchInput(){
    //get q param
    var regx = /\/search\/(.+?)\//,
      str = this.props.location.pathname+'/';

    if (str.match(regx) != null)
      this.setState({value: str.match(regx)[1]})

  }
  
  toSearch(){
    var value = this.state.value.trim();
    if (!value) return;

    //get tabId param
    var regx = /\/(.+?)\//,
        str = this.props.location.pathname+'/',
        scene = str.match(regx)[1];

    this.props.history.replace('/'+scene+'/search/'+value);
  }

  handleSubmit(event){
    event.preventDefault();
    this.toSearch();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="search">
          <span onClick={this.toSearch.bind(this)}><SearchIcon/></span>
          <input type="text" placeholder="Search"
                  value={this.state.value} 
                  onChange={(event) => this.setState({value: event.target.value})}/>
        </div>
      </form>
    )
  }
}

export default withRouter(Search);
