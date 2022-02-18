import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledSocialIcons = styled.footer`
a:link,
a:visited,
a:hover,
a:active {
  color: black;
}

ul {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
li {
  padding: 0.5rem;
  display: inline;
}
`;

// TODO load this from a json file
const SocialIconsMock = [
  {
    href: 'https://github.com/davidbeijinho/',
    icon: ['fab', 'github'],
    id: 0,
    eventLabel: 'github',
    name: 'github account link',
  },
  {
    href: 'mailto:davidbeijinho@gmail.com',
    icon: 'at',
    id: 1,
    eventLabel: 'email',
    name: 'email adress',
  },
  {
    href: 'https://twitter.com/dbeijinho',
    icon: ['fab', 'twitter'],
    id: 2,
    eventLabel: 'twitter',
    name: 'twitter account link',
  },
  {
    href: 'https://www.instagram.com/davidorosario/',
    icon: ['fab', 'instagram'],
    id: 3,
    eventLabel: 'instagram',
    name: 'instagram account link',
  },
];

const trackClick = (eventLabel) => {
  window.gtag('event', 'click', {
    event_category: 'social',
    event_label: eventLabel,
  });
};

const SocialIconsItems = SocialIconsMock.map(socialIcon => (
  <li key={socialIcon.id}>
    <a aria-label={socialIcon.name} href={socialIcon.href} target="_blank" rel="noopener noreferrer" onClick={() => trackClick(socialIcon.eventLabel)}>
      <FontAwesomeIcon icon={socialIcon.icon} size="lg" />
    </a>
  </li>));
const SocialIcons = () => (
  <StyledSocialIcons>
    <ul>
      {SocialIconsItems}
    </ul>
  </StyledSocialIcons>
);

export default SocialIcons;
