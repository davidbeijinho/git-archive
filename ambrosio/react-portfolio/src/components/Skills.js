import React from 'react';
import styled from 'styled-components';
import Skill from './Skill';

const StyledSkills = styled.section`
display: inline-block;
vertical-align: top;
width: 50%;
padding-left:2rem;
h1 {
  margin-bottom: 2rem;
  text-align: center;
}
/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px

  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/
@media (min-width: 481px) and (max-width: 767px),
(min-width: 320px) and (max-width: 480px) {
  width: 100%;
  padding-left: 0;
  padding-top: 6rem;
}
`;

// TODO load this from a config file json

const skillsMock = [
  {
    name: 'Javascript',
    value: 75,
    id: 0,
  },
  {
    name: 'NodeJs',
    value: 65,
    id: 1,
  },
  {
    name: 'React',
    value: 60,
    id: 2,
  },
  {
    name: 'Arduino',
    value: 75,
    id: 3,
  },
  {
    name: 'IOT',
    value: 50,
    id: 4,
  },
  {
    name: 'Sass',
    value: 75,
    id: 5,
  },
  {
    name: 'Processing',
    value: 75,
    id: 6,
  },
  {
    name: '3d Printing',
    value: 40,
    id: 7,
  },
];
const skillItems = skillsMock.map(skill => (
  <Skill key={skill.id} name={skill.name} value={skill.value} />));

const Skills = () => (
  <StyledSkills>
    <h1>
      Skills/Interests
    </h1>
    {skillItems}
  </StyledSkills>
);

export default Skills;
