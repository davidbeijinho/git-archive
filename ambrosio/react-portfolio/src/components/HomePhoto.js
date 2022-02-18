import React from 'react';
import styled from 'styled-components';

const StyledHomePhoto = styled.div`
 margin-top: 15vh;
 background: url('/images/david_square_size-min.jpg');
 width: 300px;
 height: 300px;
 border-radius: 50%;
 background-size: cover;
 margin-right: auto;
 margin-left: auto;
 transition: transform 0.75s;
 /* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/
@media (min-width: 481px) and (max-width: 767px),
(min-width: 320px) and (max-width: 480px) {
    margin-top: -40px
}

&.active {
    transform: rotateY(-720deg);
}      
`;

class HomePhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  handleClick() {
    this.setState(prevState => ({ active: !prevState.active }));
    window.gtag('event', 'click', {
      event_category: 'Home',
      event_label: 'photo',
    });
  }

  render() {
    const { active } = this.state;
    return (
      <StyledHomePhoto
        onClick={() => this.handleClick()}
        className={active ? 'active' : ''}
      />
    );
  }
}

export default HomePhoto;
