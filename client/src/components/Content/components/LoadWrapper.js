import React, { Component } from 'react';

import InfititeScroll from './InfititeScroll';
import Api from '../../../services/Api';

class LoadWrapper extends Component {
  constructor(props){
    super(props);
    console.log('this.props.children  ', this.props.match.params.tabId)
    this.state = {
      articles: []
    }
  }

  componentWillMount () {
    this._loadArticles([], this.props.match.params.tabId, this.props.match.params.q, 0)
  }

  componentWillReceiveProps (nextProps) {
  	this._loadArticles([], nextProps.match.params.tabId, nextProps.match.params.q, 0)
  }

  loadMore(page, callback){
    this._loadArticles(this.state.articles, this.props.match.params.tabId, this.props.match.params.q, page, callback)
  }

  _loadArticles(articles, tabId, q, page, callback){
    Api.getArticles(tabId, q, page, function(data){
      this.setState({ articles: articles.concat(data.response.docs)})
      if (callback)
        callback();
    }.bind(this));
  }

  render(){
    return (
      <InfititeScroll loadMore={this.loadMore.bind(this)}>
        <div>{React.cloneElement(this.props.children, { articles: this.state.articles, ...this.props })}</div>
      </InfititeScroll>
    )
  }
}


export default LoadWrapper;

