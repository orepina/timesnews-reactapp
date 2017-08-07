import React from 'react';

import Image from '../components/Image';
import MetaData from '../components/MetaData';
import Breadcrumbs from '../components/Breadcrumbs';
import './index.css';

const ArticleContent = (props) => {
	return (
		<div className="full-article">
	        <Breadcrumbs title={'Article'} path={props.path}/>
	        {
	          (props.info) ? 
	            (<div>
	              <div className="full-title">{props.info.headline.main}</div>
	              <MetaData info={props.info}/>
	              <div className="body">
	                <div className="image">
	                  <Image arr={props.info.multimedia} width="158" height="158"/>
	                </div>
	                <div className="full-text-wrapper">
	                  <div className="full-text">
	                  	<div dangerouslySetInnerHTML={{ __html: props.info.articleText }}/>
	                  </div>
	                </div>
	              </div> 
	            </div>) : null
	        }

      	</div>  
	)
}

export default ArticleContent;
