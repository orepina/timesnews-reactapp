import React from 'react';
import { Link } from 'react-router-dom';
import AngleRight from './../AngleRight';
import './index.css';

const Breadcrumbs = (props) => {
  return (
    <div className="breadcrumbs">
      { 
        props.path.map((p) => {
          return (
            <span key={p.id}>
              <span className="link">
                <Link to={p.link}>{p.id}</Link>
              </span> 
              <span><AngleRight/></span>
            </span>
          ) 
        })
      }
      {props.title}
    </div>
  )
}

export default Breadcrumbs;


