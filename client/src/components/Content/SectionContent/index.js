import React, { Component } from 'react';

import Article from './Article';
import ArticleTopLeft from './ArticleTopLeft';
import ArticleTopRight from './ArticleTopRight';

import './index.css';


const SectionContent = (props) => (
  <div>
  
    <div className="top-stories">Top Stories</div>
    <div className="wrap-articles">
      {
        props.articles.map((article, index) => {
          return (index == 0) ?
            (<ArticleTopLeft info={article} key={article._id} tabId={props.match.params.tabId}/>) :
            (index == 1 || index == 2) ?
              (<ArticleTopRight info={article} key={article._id} tabId={props.match.params.tabId}/>) :
              (<Article info={article} key={article._id} tabId={props.match.params.tabId}/>)
        })
      }
    </div>
  </div>
)


export default SectionContent;

