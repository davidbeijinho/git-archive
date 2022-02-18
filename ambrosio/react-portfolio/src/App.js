import React from 'react';
import './App.css';
import styled from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faAt,
  faPhone,
  faMapMarkerAlt,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';

import Curriculum from './components/Curriculum';
// import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
// import Services from './components/Services';
// import Works from './components/Works';

library.add(faAt, faPhone, faMapMarkerAlt, faDownload, faGithub, faTwitter, faInstagram);


const StyledApp = styled.div`
`;

const App = () => (
  <StyledApp>
    <Header />
    <Home />
    <Curriculum />
    {/* <Services /> */}
    {/* <Works /> */}
    {/* <Contacts /> */}
    <Footer />
  </StyledApp>
);

export default App;
