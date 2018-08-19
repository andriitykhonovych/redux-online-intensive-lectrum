// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';

// Instruments
import { store } from './init/store';
import { history } from './init/middleware/core';
import './theme/init';

// Intro
// import Gallery from './basic-redux';
import App from './navigation/App';

render(
    <Provider store = { store }>
        <Router history={ history }>
            {/*<Gallery />*/}
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);
