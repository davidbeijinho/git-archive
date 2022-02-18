import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledContactIcons = styled.div`
margin-top: 2rem;
margin-bottom: 4rem;
a:link,
a:visited,
a:hover,
a:active {
  color: black;
  display: contents;
}
svg {
  display: block;
  margin-bottom: 0.5rem;
}
ul {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
li {
  width: 50%;
  padding-top: 1rem;
  display: inline-block;
}
/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/
@media (min-width: 320px) and (max-width: 480px) {
  li {
    display: block;
    width: 100%;
  }
}
`;
// TODO move to json file
const contactsMock = [
  {
    href: 'tel:+34666022114',
    icon: 'phone',
    label: '+34 666 02 21 14',
    id: 0,
    eventLabel: 'phone',
    name: 'phone number',
  },
  {
    href: 'mailto:davidbeijinho@gmail.com',
    icon: 'at',
    label: 'davidbeijinho@gmail.com',
    id: 1,
    eventLabel: 'email',
    name: 'email adress',
  },
  {
    href: 'https://goo.gl/KeMbwK',
    icon: 'map-marker-alt',
    label: 'Current: Barcelona',
    id: 2,
    eventLabel: 'location',
    name: 'current location',
  },
  {
    href: 'David_Beijinho_resume.pdf',
    icon: 'download',
    label: 'Download CV',
    id: 3,
    eventLabel: 'resume',
    name: 'resume download link',
  },
];

const trackClick = (eventLabel) => {
  window.gtag('event', 'click', {
    event_category: 'Contacts',
    event_label: eventLabel,
  });
};

const contactsItems = contactsMock.map(contact => (
  <li key={contact.id}>
    <a aria-label={contact.name} href={contact.href} target="_blank" onClick={() => trackClick(contact.eventLabel)} rel="noopener noreferrer">
      <FontAwesomeIcon icon={contact.icon} size="lg" />
      {contact.label}
    </a>
  </li>));
const ContactIcons = () => (
  <StyledContactIcons>
    <ul>
      {contactsItems}
    </ul>
  </StyledContactIcons>
);

export default ContactIcons;
