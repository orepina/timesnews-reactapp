import React from 'react';
import SectionContent from './SectionContent';
import SearchContent from './SearchContent';
import FullArticle from './ArticleContent';
import LoadWrapper from './components/LoadWrapper';

import { Route } from 'react-router-dom';

import './index.css';

const Content = () => (

  <div className="content">
    <Route exact path="/:tabId" component={(props) => <LoadWrapper {...props}><SectionContent/></LoadWrapper>}/>
    <Route exact path="/:tabId/search/:q" component={(props) => <LoadWrapper {...props}><SearchContent/></LoadWrapper>}/>
    <Route path="/:tabId/article/:articleId" component={FullArticle}/>  
    <Route path="/:tabId/search/:q/article/:articleId" component={FullArticle}/>   
  </div>
  
)

export default Content;