import React, { Component } from 'react';
import Api from '../../../services/Api';
import ArticleContent from './ArticleContent';

class FullArticle extends Component {
  constructor(props){
    super(props);
    this.state = {
      info: null,
      path: this.getPath(this.props.match.params)
    };
  }

  getPath(params){
    var path = [{id: params.tabId, link: '/'+params.tabId}];
    if (params.q)
      path.push({id: params.q, link: '/'+params.tabId+'/search/'+params.q});
    return path;
  }

  componentDidMount() {
    var articleId = this.props.match.params.articleId;
    Api.getArticle(articleId, function(data){
      this.setState({info: data})
    }.bind(this));
  }

  render(){
    
    return (
      <ArticleContent info={this.state.info} path={this.state.path}/>
    )
  }
}


export default FullArticle;

