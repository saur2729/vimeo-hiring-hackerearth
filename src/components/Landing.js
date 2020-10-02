import React from 'react';

import TopNav from './navbar/TopNav';
import Main from './dashboard/Main';

import './Landing.css';

export default function Landing() {
  return (
    <div className="body">
      <div className="topnav">
       <TopNav />
      </div>
      <div className="main-content">
        <Main />
      </div>
    </div>
  )
}