import React from 'react';
import moment from 'moment';
import './index.css';

const MetaData = (props) => {
	return (
		<div className='meta'>
          {(props.info.byline.original) ? props.info.byline.original.toLowerCase() : null}
          <span>{moment(props.info.pub_date).format('LT')} ET</span>
        </div>
	)
}

export default MetaData;