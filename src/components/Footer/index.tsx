import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    FOOTER
  </FooterContainer>
)

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1em 0;
  font-size: 1em;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 2px solid black;
  background: white;
`;

export default Footer;
