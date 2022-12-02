import React, { useState, useEffect,useContext } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Context from '../../utils/Context';
import themes from '../../utils/themes'

type dogResponse= {
  message:string;
  status:string;
}

function App({children}) {

  const [url,setUrl] = useState('')
  const [loading,setLoading] = useState(false)

  const defaultTheme = () => {
    switch(window.location.pathname){
      case '/':
        return 0
      case '/cats':
          return 1
      case '/dogs':
          return 2
    }
  }
  const [theme,setTheme] = useState(defaultTheme)

  const changeTheme = (newTheme) =>{
    setTheme(newTheme);
  }

  return (
    <Context.Provider value={{theme:theme,changeTheme}}>
      <div className={'main '+themes[theme].backgroundClass}>
        <div className='title-container'>
          <p className="sub-top">Welcome to:</p>
          <p className="title">Pets As A Service</p>
          <p className="sub-bottom">(PAAS)</p>
        </div>
          {children}
      </div>
    </Context.Provider>

  );
}

export default App;
