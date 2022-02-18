import React from 'react';
import styled from 'styled-components';
import Work from './Work';

const StyledWorks = styled.section`
width: 100%;
background red;
h1 {
  text-align: center;
}
`;

const worksMock = [1, 2, 3, 4, 5, 6, 7, 8];
const workItems = worksMock.map(work => <Work key={work} data={work} />);

// TODO imrpove this objects and load it from a json file

const Works = () => (
  <StyledWorks>
    <div className="container">
      <h1>
        WORKS
      </h1>
      {workItems}
    </div>
  </StyledWorks>
);

export default Works;
