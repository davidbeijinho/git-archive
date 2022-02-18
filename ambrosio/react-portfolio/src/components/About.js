import React from 'react';
import styled from 'styled-components';
import SocialIcons from './SocialIcons';
import ContactIcons from './ContactIcons';

const StyledAbout = styled.section`
display: inline-block;
vertical-align: top;
padding-right:2rem;
width: 50%;
h1 {
  margin-bottom: 2rem;
  text-align: center;
}
/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/
@media (min-width: 481px) and (max-width: 767px),
(min-width: 320px) and (max-width: 480px) {
  width: 100%;
  padding-right:0;
}

`;

const DATA = {
  title: 'Hi there im David Beijinho',
  text: [
    'Hello, I am a Web developer, and I like to develop for different media and interactivity experiences. Recently i have been working for  a big company running a lot of AB testing, in an agile  environment, i also have experience developing a lot of API\'s and create Web apps using micro-services, but I also enjoy digital fabrication, especially 3D printing, and I have some small projects for the IOT. using physical computing.',
    'If you want to say something here are my contacts.',
  ],
};

const texts = DATA.text.map(text => (
  <p key={text}>
    {text}
  </p>));

const About = () => (
  <StyledAbout>
    <h1>
      {DATA.title}
    </h1>
    {texts}
    <ContactIcons />
    <SocialIcons />
  </StyledAbout>
);


export default About;
