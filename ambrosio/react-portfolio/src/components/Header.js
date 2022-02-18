import React from 'react';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';
// import Navigation from './Navigation';

const StyledHeader = styled.header`
width: 100%;
background-color: #8bc34a;
position: fixed;
top: 0;
right: 0;
left: 0;
height 50px;
z-index:1;

h1 {
  display: inline;
  line-height: 50px;
}

a:link,
a:visited,
a:hover,
a:active {
  color: black;
  text-decoration: none;
  line-height: 50px;
}
`;
const Header = () => (
  <StyledHeader>
    <div className="container">
      <h1>
        <Scrollchor to="#home">
          David Beijinho
        </Scrollchor>
      </h1>
      {/* <Navigation /> */}
    </div>
  </StyledHeader>
);

export default Header;
