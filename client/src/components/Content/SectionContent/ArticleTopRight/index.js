import React from 'react';
import { Link } from 'react-router-dom';
import MetaData from '../../components/MetaData';
import './index.css';

const ArticleTopRight = (props) => (
  <div className='article-box article-top-right'>
    <div className='body'>
      <div className='title three-line'>
        <Link to={'/'+props.tabId+'/article/'+props.info._id}>
            {props.info.headline.main}
        </Link>
      </div>
      <MetaData info={props.info}/>
    </div>
  </div>
)

export default ArticleTopRight;