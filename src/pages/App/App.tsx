import React, { useState } from 'react';
import logo from '../../logo.svg';
import './App.css';

type dogResponse= {
  message:string;
  status:string;
}

function App({children}) {

  const [url,setUrl] = useState('')
  const [loading,setLoading] = useState(false)


  return (
    <div className="main">
      
      <div className='title-container'>
        <p className="sub-top">Welcome to:</p>
        <p className="title">Pets As A Service</p>
        <p className="sub-bottom">(PAAS)</p>
      </div>
        {children}
    </div>

  );
}

export default App;
