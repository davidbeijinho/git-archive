import React from 'react';
import styled from 'styled-components';
import SocialIcons from './SocialIcons';

const StyledFooter = styled.footer`
background-color: rgba(0, 0, 0, 0.15);
padding-top: 2rem;
padding-bottom: 2rem;
h1 {
  text-align: center;
  font-size: 1.5rem;
}
p {
  font-size: 0.75rem;
  text-align: center;
}
`;

const Footer = () => (
  <StyledFooter>
    <div className="container">
      <h1>
        David Beijinho
      </h1>
      <SocialIcons />
      <p>
        <b>
          DavidBeijinho.com
        </b>
        &nbsp;2018 Reserved rights design by
        <b>
        &nbsp;me
        </b>
        .
      </p>
      <p>
        {`${process.env.VERSION}v ${process.env.BUILD_DATE}`}
      </p>
    </div>
  </StyledFooter>
);

export default Footer;
