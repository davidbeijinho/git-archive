import React from 'react';
import styled from 'styled-components';
import About from './About';
import Skills from './Skills';

const StyledCurriculum = styled.section.attrs({
  id: 'curriculum',
})`
padding-top: 6rem;
padding-bottom: 6rem;
`;
const Curriculum = () => (
  <StyledCurriculum>
    <div className="container">
      <About />
      <Skills />
    </div>
  </StyledCurriculum>
);


export default Curriculum;
