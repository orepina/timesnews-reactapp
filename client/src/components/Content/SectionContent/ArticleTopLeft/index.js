import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../components/Image';
import MetaData from '../../components/MetaData';
import './index.css';

const ArticleTopLeft = (props) => (
  <div className='article-box article-top-left'>
    <div className='top-part'>
      <div className='image top-left'>
        <Image arr={props.info.multimedia} width="158" height="158"/>
      </div>
      <div className='body top-left'>
        <div className='title three-line'>
          <Link to={'/'+props.tabId+'/article/'+props.info._id}>
            {props.info.headline.main}
          </Link>
        </div>
        <MetaData info={props.info}/>
      </div>
      
    </div>

    <div className='bottom-part'>
      <div className='body'>
         <div className='text top-left five-line'>
          {props.info.snippet}
         </div>
      </div>
    </div>
  </div>
)

export default ArticleTopLeft;