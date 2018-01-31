import React from 'react';
import styled from 'styled-components';

const HeaderBar = styled.header`
  height: 70px;
  background-color: #0B557D;
  border-bottom: 1px solid #C0FF00;
  z-index: 500;
`;

const Logo = styled.section`
  float: left;
  height: 70px;
  color: #FFF;
  padding-top:10px;
`;

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar>
          <div className="container">
            <a href="/">
              <Logo>
                <img src="//static.usedcars.com/img/logo/logo.svg" alt="UsedCars.com logo" />
              </Logo>
            </a>
          </div>
        </HeaderBar>
      </div>
    )
  }
}