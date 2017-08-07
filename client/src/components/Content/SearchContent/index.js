import React from 'react';
import SearchArticle from './SearchArticle';
import Breadcrumbs from '../components/Breadcrumbs';


const SearchContent = (props) => (
  <div>
    <Breadcrumbs title={'Search'} path={[{id: props.match.params.tabId, link: '/'+props.match.params.tabId}]}/>
    {
      props.articles.map((article) => 
        <SearchArticle 
          info={article} key={article._id} 
          tabId={props.match.params.tabId}
          q={props.match.params.q}
        />
      )
    }
  </div>
)


export default SearchContent;

