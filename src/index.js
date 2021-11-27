import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import Header from './components/Header';
import Home from './pages/Home';
import CuratorItem from './components/Curator';
import Places from './components/Places';
import Footer from './components/Footer';
import Routes from './router';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <BrowserRouter>
        <Routes />
        <Places/>
        <CuratorItem/>
      </BrowserRouter>
    </div>
    <Footer/>
    
  </div>
  ,
  document.getElementById('root')
);

