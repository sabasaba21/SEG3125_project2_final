import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


import './App.css';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import AboutOruj from './AboutOruj';
import WhatWeDo from './WhatWeDo';
import TakeAction from './TakeAction';
import Contact from './Contact';
import Donate from './Donate';
import FAQ from './FAQ';
import NotFound from "./NotFound";


import React, { useState } from 'react';

// Pages in dari
import HomeDA from './HomeDA';


import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [language, setLanguage] = useState('en'); // Default language is English

  const switchLanguage = () => {
    setLanguage(language === 'en' ? 'da' : 'en'); // Toggle between English ('en') and Dari ('da')
  };
  
  return (
    <Router basename="/SEG3125_project2_final">
    <div className="App">
      {/* <Header /> */}

      <Header switchLanguage={switchLanguage} language={language} />


      <main className="content">
          <Routes>
            {/* Route for English homepage */}
            <Route path="/" element={<Home language={language} />} />
            {/* Route for Dari homepage */}
            <Route path="/da" element={<HomeDA language={language} />} />
            <Route path="/about" element={<AboutOruj language={language} />} />
            <Route path="/WhatWeDo" element={<WhatWeDo language={language} />} />
            <Route path="/takeAction" element={<TakeAction language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
            <Route path="/donate" element={<Donate language={language} />} />
            <Route path="/FAQ" element={<FAQ language={language} />} />

            <Route path="*" element={<NotFound language={language} />} />
          </Routes>
        </main>

      <Footer />
    </div>
  </Router>

    


  );

}
export default App;