import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import App from './components/App.jsx';
import { createStore } from 'redux';
import myStore from './reducers';

let store = createStore(myStore);

function render() {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('app')
    );
}

store.subscribe(render);
render();
