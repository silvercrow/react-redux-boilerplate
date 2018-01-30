import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from 'Store'
import App from 'Scenes/Root'
import 'bootstrap/dist/css/bootstrap.css';

import DevTools from 'DevTools';


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
        <DevTools />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app')
)


if (process.env.NODE_ENV !== 'production') {
  const showDevTools = require('DevTools/showDevTools');
  showDevTools(store);
}
