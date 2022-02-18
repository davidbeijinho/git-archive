import React from 'react';
import styled from 'styled-components';
import Service from './Service';

const StyledServices = styled.section`
width: 100%;
background brown;
h1 {
  text-align: center;
}
`;

const servicesMock = [1, 2, 3, 4, 5, 6, 7, 8];
const ServiceItems = servicesMock.map(service => <Service key={service} data={service} />);

// TODO improve this list and load it from a json file

const Services = () => (
  <StyledServices>
    <div className="container">
      <h1>
        SERVICES
      </h1>
      {ServiceItems}
    </div>
  </StyledServices>
);

export default Services;
