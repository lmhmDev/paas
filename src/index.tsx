import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import MainMenuComponent from './components/MainMenuComponent';
import CatsComponent from './components/CatsComponent';
import DogsComponent from './components/DogsComponent';
import FavoritesComponent from './components/FavoritesComponent';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <App>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainMenuComponent/>}/>
          <Route path='/cats' element={<CatsComponent/>}/>
          <Route path='/dogs' element={<DogsComponent/> }/>
          <Route path='/favorites' element={<FavoritesComponent/> }/>
        </Routes>
        </BrowserRouter>
      </App>
  </React.StrictMode>
);

reportWebVitals();
