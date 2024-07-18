import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';

import logo from './assets/oruj_logo.jpeg';
import dari_icon from './assets/dari_icon.png';

const Header = ({ switchLanguage, language }) => {
  const navigate = useNavigate();

  const handleSwitchLanguage = () => {
    switchLanguage();
    if (language === 'en') {
      navigate('/da'); // Navigate to Dari version
    } else {
      navigate('/'); // Navigate to English version
    }
  };

  const languageIcon = language === 'en' ? dari_icon : dari_icon;
  const languageText = language === 'en' ? 'دری پښتو' : 'English';

  return (
    <header className="App-header">
      <Container className="Header-top">
        <a className="logo" href="/SEG3125_project2_final">
          <img src={logo} className="App-logo" alt="logo" />
        </a>

        <div className="d-flex">
          <div className='help-buttons'>
            {/* <Nav.Link className="switch-lang" href="#home">درى پښتو
              <img className="switch-lang-icon" src={dari_icon} alt="Change language" />
            </Nav.Link> */}


<div className="switch-lang">
        <button onClick={handleSwitchLanguage} className={language === 'en' ? 'active' : ''}>
          {languageText}
          <img className="switch-lang-icon" src={languageIcon} alt={`Change language to ${languageText}`} />
        </button>
      </div>



            <NavLink to="/contact">
              <Button variant="primary">Contact Us</Button>
            </NavLink>
            <NavLink to="/donate">
              <Button variant="primary">Donate</Button>
            </NavLink>
          </div>
        </div>
      </Container>

      <Navbar className="bg-body-tertiary">
        <Container style={{ backgroundColor: '#007bff' }}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/about">About Oruj</NavLink>
              <NavLink className="nav-link" to="/WhatWeDo">What We Do</NavLink>
              <NavLink className="nav-link" to="/takeAction">Take Action</NavLink>
              <NavLink className="nav-link" to="/FAQ">FAQ</NavLink>
              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
