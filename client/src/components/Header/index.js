import React from 'react';
import Search from './Search';
import { withRouter } from 'react-router-dom';
import './index.css';


const Header = () => (
	<div className="header">
      <a href="/">The Times </a>
      <Search/>
    </div>
);

export default withRouter(Header);