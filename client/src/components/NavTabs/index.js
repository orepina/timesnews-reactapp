import React, { Component } from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';
import './index.css';

class NavTabs extends Component {
  constructor(props){
    super(props);
    this.tabs = ['Home', 'World', 'U.S.', 'Politics', 'N.Y.', 'More'];
    this.state = {
      active: null,
      tabs: this.tabs
    }
  }

  componentDidMount(){
    this.initActive();
  }

  initActive(){
    //get tabId param
    var regx = /\/(.+?)\//,
        str = this.props.location.pathname+'/',
        tab = "";

    if (str.match(regx) == null){
      tab = this.tabs[0];
      this.props.history.replace('/'+tab);
    }
    else {
      tab = str.match(regx)[1];
    }
    this.setActive(tab);
  }

  setActive(tab_id){
    this.setState({active: tab_id});
  }

  render(){
    return (
      <div className="nav-tabs-container">
        <div className="nav-tabs">
        {
          this.state.tabs.map((tab) =>  
            <Link to={'/'+tab} key={tab}>
              <div className={['tab', (this.state.active == tab) ? 'active' : ''].join(' ')} onClick={this.setActive.bind(this, tab)}>
                {tab}
              </div>
            </Link>
          )
        }
        </div>
      </div>
    )
  }
}

export default withRouter(NavTabs);