import React from 'react';
import styled from 'styled-components';

const footer = styled.footer`
  padding-top: 25px;
  background-color: #0B557D;
`;

const container = styled.div`
  text-align: center;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer>
          <container>
            <div>
              <img src="//static.usedcars.com/img/logo/logo.svg" />
            </div>
          </container>
          <div>
            <p>© 2018 AutoWeb, Inc.</p>
          </div>
        </footer>
      </div>
    )
  }
}