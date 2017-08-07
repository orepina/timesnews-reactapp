import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../components/Image';
import './index.css';

const SearchArticle = (props) => (
  <div className='search-article clearfix'>
    <div className='image'>
      <Image arr={props.info.multimedia} width="100" height="100"/>
    </div>
    <div className='body-wrapper'>
      <div className='body'>
        <div className='title'>
        	<Link to={'/'+props.tabId+'/search/'+props.q+'/article/'+props.info._id}>
            {props.info.headline.main}
          </Link>
        </div>
        <div className='text'>{props.info.snippet}</div>
      </div>
    </div>
  </div>
)


export default SearchArticle;