import React from 'react';
import Header from './Header'
import Footer from './Footer'
import { Body, Wrapper, Content } from 'Components/Template/Style.js';

export default class Template extends React.Component {
  render() {
    return (
      <Body>
        <Wrapper>
          <Header />
          <Content>
            {this.props.children}
          </Content>
        </Wrapper>
        <Footer />
      </Body>
    )
  }
}