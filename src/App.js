import React, { useEffect } from 'react';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import About from './Pages/About/About';
import Gallery from './Pages/Gallery/Gallery';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import LiveEvents from './Pages/LiveEvents/LiveEvents';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import { Routes, Route, useLocation } from 'react-router-dom';

const App = () => {

  // ****** Pages Title Setup ******

  let location = useLocation();
  
  // Function to make Captialize Words.
  const makeWordCaptialize = (word) => {
    let wordBreakage = word.split('');
    wordBreakage[0] = wordBreakage[0].toLocaleUpperCase();
    return wordBreakage.join('');
  }

  useEffect(() => {
    let currentPageName = location.pathname.replace('/', '');
    document.title = currentPageName ? `Surapanam | ${makeWordCaptialize(currentPageName)}` : 'Surapanam | Bar & Kitchen';
  }, [location]);

  // ****** Pages Title Setup ******


  return (
    <div className="app">
      <Navbar/>
      <div className="app__main">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/menu" element={<Menu/>}/>
          <Route exact path="/aboutus" element={<About/>}/>
          <Route exact path="/events" element={<LiveEvents/>}/>
          <Route exact path="/gallery" element={<Gallery/>}/>
          <Route exact path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App