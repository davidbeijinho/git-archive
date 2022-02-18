import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledService = styled.div`
display: inline-block;
width: 23%;
padding: 2rem;
border: 1px solid black;
margin: 1%;
`;
const Service = ({ data }) => (
  <StyledService>
    { `SERVICE ${data}` }
  </StyledService>
);

Service.propTypes = {
  data: PropTypes.number.isRequired,
};

export default Service;
