import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

import logo from './assets/oruj_logo.jpeg';
import langIcon from './assets/afghan_flag.png';

import Home from './Home';
import AboutOruj from './AboutOruj';
import WhatWeDo from './WhatWeDo';
import TakeAction from './TakeAction';
import Contact from './Contact';
import Donate from './Donate';

function Header() {
  return (
    <header className="App-header">
      <Container className="Header-top">
        <a className="logo" href="/SEG3125_project2">
          <img src={logo} className="App-logo" alt="logo" />
        </a>

        <div className="d-flex">
          <div className='help-buttons'>
            <Nav.Link className="switch-lang" href="#home">درى پښتو
              <img className="switch-lang-icon" src={langIcon} alt="Change language" />
            </Nav.Link>
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
