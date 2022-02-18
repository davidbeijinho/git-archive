import React from 'react';
import styled from 'styled-components';
// import ContactIcons from './ContactIcons';

const StyledContacts = styled.section.attrs({
  id: 'contacts',
})`
padding-top: 6rem;
padding-bottom: 12rem;
h1 {
  text-align: center;
}
textarea, input {
  font-size: 1.5rem;
  padding: 0.5rem 0.25rem;
  margin-top: 2rem;
  width:100%;
  font-family: 'Montserrat', sans-serif;
  resize: none;
  border: 1px solid rgba(0, 0, 0, 0.5);
}
.input-box {
  width: 50%;
  display: inline-block;
}
.form-button {
  margin-top: 2rem;
  text-align: center;
  button {
    font-size: 1.5rem;
    padding: 0.5rem 1.5rem;
    background-color: rgba(0, 0, 0, 0.9);
    border: 0;
    color: white;
  }
}
.space-right {
  padding-right:2rem;
}
.space-left {
  padding-left:2rem;
}
/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px

  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/
@media (min-width: 481px) and (max-width: 767px),
(min-width: 320px) and (max-width: 480px) {
  .input-box {
    width: 100%;
  }
  .space-right {
    padding-right:0;
  }
  .space-left {
    padding-left:0;
  }
}
`;

// TODO make form send email
// TODO make field mandatory, validate in javascript ?
// TODO show info on submit Error or Succes

const Contacts = () => (
  <StyledContacts>
    <div className="container">
      <h1>
        Contact Me:
      </h1>
      {/* <ContactIcons /> */}
      <form>
        <div className="input-box space-right">
          <input type="text" placeholder="Name" required />
        </div>
        <div className="input-box space-left">
          <input type="text" placeholder="Email" required />
        </div>
        <div>
          <textarea placeholder="Message" rows="7" required />
        </div>
        <div className="form-button">
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </StyledContacts>
);

export default Contacts;
