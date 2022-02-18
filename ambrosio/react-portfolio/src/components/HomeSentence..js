import React from 'react';
import styled from 'styled-components';

const StyledHomeSentence = styled.h2`
  text-align: center;
  margin-top: 1rem;
  font-weight: bold;
`;

// TODO load this from a json file

const sentences = [
  'Web developer',
  'Watermelon lover',
  'DIY enthusiastic',
];

const sentence = sentences[Math.floor(Math.random() * sentences.length)];

// TODO make this sentence update with time
const HomeSentence = () => (
  <StyledHomeSentence>
    {sentence}
  </StyledHomeSentence>
);

export default HomeSentence;
