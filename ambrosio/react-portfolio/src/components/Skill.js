import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSkill = styled.div`
display: block;
`;

const SkillLine = styled.div`
margin-top: 0.25rem;
margin-bottom: 2rem;
border-bottom: 4px solid green;
width:   ${({ percentage }) => percentage}%;
`;

const Skill = ({ name, value }) => (
  <StyledSkill>
    <p>
      {name}
    </p>
    <SkillLine percentage={value} />
  </StyledSkill>
);

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Skill;
