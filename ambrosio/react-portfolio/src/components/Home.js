import React from 'react';
import styled from 'styled-components';
import HomePhoto from './HomePhoto';
import HomeSentence from './HomeSentence.';

const StyledHome = styled.section.attrs({
  id: 'home',
})`
min-height: 675px;
padding-top: 100px;
height:100vh;
h1 {
  text-align: center;
  margin-top: 1rem;
  font-weight: bold;
}

background-color: rgba(0, 0, 0, 0.15);
background-image: url(/images/home_background.svg);
background-size: cover;
`;

const Home = () => (
  <StyledHome>
    <HomePhoto />
    <h1>
      Hi, Im David Beijinho
    </h1>
    <HomeSentence />
  </StyledHome>
);

export default Home;
