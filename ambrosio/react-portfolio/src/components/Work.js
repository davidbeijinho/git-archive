import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWork = styled.div`
display: inline-block;
width: 23%;
padding: 2rem;
border: 1px solid black;
margin: 1%;
`;
const Work = ({ data }) => (
  <StyledWork>
    { `WORK ${data}` }
  </StyledWork>
);

Work.propTypes = {
  data: PropTypes.number.isRequired,
};

export default Work;
