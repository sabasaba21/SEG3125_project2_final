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




import 'bootstrap/dist/css/bootstrap.min.css';
// import { Footer } from './footer';


function App() {

  return (
    <Router basename="/SEG3125_project2">
    <div className="App">
      <Header />

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutOruj />} />
          <Route path="/WhatWeDo" element={<WhatWeDo />} />
          <Route path="/takeAction" element={<TakeAction />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>

      <Footer />
    </div>
  </Router>

    


  );

}
export default App;