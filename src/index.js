import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from 'Store'
import App from 'Scenes'
import 'bootstrap/dist/css/bootstrap.css';
import DevToolsBox from "DevTools/DevToolsBox"

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <DevToolsBox>
        <App />
      </DevToolsBox>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app')
)



