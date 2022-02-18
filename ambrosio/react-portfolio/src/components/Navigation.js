import React from 'react';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';

const StyledNavigation = styled.div`
float: right;

a:link,
a:visited,
a:hover,
a:active {
  color: black;
  text-decoration: none;
  line-height: 50px;
}

li {
  display: inline;
  margin-left: 1rem;
}
`;

const menuItems = [
  {
    label: 'Home',
    link: '#home',
    id: 0,
  },
  {
    label: 'About',
    link: '#curriculum',
    id: 1,
  },
  // {
  //   label: 'Contacts',
  //   link: '#contacts',
  //   id: 2,
  // },
];
const navItems = menuItems.map(item => (
  <li key={item.id}>
    <Scrollchor to={item.link}>
      {item.label}
    </Scrollchor>
  </li>
));

const Navigation = () => (
  <StyledNavigation>
    <nav>
      <ul>
        {navItems}
      </ul>
    </nav>
  </StyledNavigation>
);

export default Navigation;
