import React from 'react';
import logoImage from 'Images/logo.svg';
import { Foot,  CopyRight} from 'Components/Template/Style.js';

export default class Footer extends React.Component {
  render() {
    return (
        <Foot>
          <CopyRight>
            <p>© 2018 AutoWeb, Inc.</p>
          </CopyRight>
        </Foot>
    )
  }
}