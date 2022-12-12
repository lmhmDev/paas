import React, { useState, useEffect,useContext } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Context from '../../utils/Context';
import themes from '../../utils/themes'
import { getImages } from '../../utils/storage';


function App({children}) {

  const [favImages,setFavImages] = useState([])

  const defaultTheme = () => {
    switch(window.location.pathname){
      case '/':
        return 0
      case '/cats':
          return 1
      case '/dogs':
          return 2
      default:
        return 0
    }
  }
  const [theme,setTheme] = useState(defaultTheme)

  const changeTheme = (newTheme) =>{
    setTheme(newTheme);
  }

  // cheats

  const getImagesFromStorage = async() =>{
    const images = await getImages();
    setFavImages(images)
  }

  useEffect(() => {
    getImagesFromStorage()

  },[])

  return (
    <Context.Provider value={{theme,changeTheme,favImages,setFavImages}}>
      <div className={'bg-color '+themes[theme].backgroundClass}></div>
      <div className='paws-bg'></div>
      <div></div>
      <div className='main'>
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
