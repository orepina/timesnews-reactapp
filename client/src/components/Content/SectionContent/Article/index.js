import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../components/Image';
import MetaData from '../../components/MetaData';
import './index.css';

const Article = (props) => (
  <div className='article-box article clearfix'>
    <div className='image'>
      <Image arr={props.info.multimedia} width="206" height="206"/>
    </div>
    <div className='body-wrapper'>
      <div className='body'>
        <div className='title one-line'>
          <Link to={'/'+props.tabId+'/article/'+props.info._id}>
              {props.info.headline.main}
          </Link>
        </div>
        <div className='text two-line'>
          {props.info.snippet}
        </div>
        <MetaData info={props.info}/>
      </div>
    </div>
  </div>
)

export default Article;