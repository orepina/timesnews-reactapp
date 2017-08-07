import React, { Component } from 'react';

class InfititeScroll extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      page: 0,
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  nextPage(){
    function callback(){
      this.setState({
        isLoading: false,
        page: next_page,
      })
    };

    var next_page = this.state.page + 1;
    this.props.loadMore(next_page, callback.bind(this))
  }

  handleScroll(){
    var body = document.body,
    html = document.documentElement;

    var windowHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight ),
        inHeight = window.innerHeight,
        scrollT = document.body.scrollTop || document.documentElement.scrollTop,
        totalScrolled = scrollT+inHeight;

    if (totalScrolled+100>windowHeight) { 
      if (!this.state.isLoading) { 
        this.setState({ isLoading: true });
        this.nextPage();
      }
    }
  }
  
  render(){
    return (<div>{this.props.children}</div>)
  }
}

export default InfititeScroll;