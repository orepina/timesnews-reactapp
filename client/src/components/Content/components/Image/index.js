import React from 'react';
import './index.css';

const Image = (props) => {
	
	const getImageOfSize = (arr, size) => {
		return arr.filter((m) => m.subtype == size);
	}

	const getUrl = (arr) => {
		if (arr.length == 1)
			return arr[0];
		if (getImageOfSize(arr, 'xlarge').length>0)
			return getImageOfSize(arr, 'xlarge')[0];
		if (getImageOfSize(arr, 'wide').length>0)
			return getImageOfSize(arr, 'wide')[0];
		if (getImageOfSize(arr, 'thumbnail').length>0)
			return getImageOfSize(arr, 'thumbnail')[0];
	}

	const imageUrl = (arr) => {
		if (arr.length > 0)
			return 'http://www.nytimes.com/' + getUrl(arr).url;
		return null;
	}

	return (
		(imageUrl(props.arr)) ? 
			(<img src={imageUrl(props.arr)} height={props.height} alt=""/>) : 
			(<div className="no-image"><span className="no-image">Image</span></div>)
	)
}

export default Image;
