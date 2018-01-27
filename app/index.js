
//import of basic react libraries
import React from 'react';
import ReactDOM from 'react-dom';

//import of css bootstrap
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'; 

//import of main App
import App from './components/App.jsx';

//import of redux store 
import { createStore } from 'redux';

//import of our app reducer
import reducer from './reducers';

//create a redux store using our reducer
let store = createStore(reducer);

//sending the store state and actions as a props store to the children component
function render() {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('app')
    );
}

//subscribe to the store and render on new state
store.subscribe(render);

//render for the first time
render();
