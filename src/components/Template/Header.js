import React from 'react';
import logoImage from 'Images/logo.svg';
import {HeaderBar , Container, Logo } from 'Components/Template/Style.js';

export default class Header extends React.Component {
  render() {
    return (
        <HeaderBar>
          <Container>
            <a href="/">
              <Logo>
                <img src={logoImage} alt="UsedCars.com logo"/>
              </Logo>
            </a>
          </Container>
        </HeaderBar>
    )
  }
}