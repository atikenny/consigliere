import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import '../index.html';
import 'styles/main';

import appReducers from '../reducers';
import Consigliere from 'components/consigliere';
import {
    loadState,
    initAutoSave
} from 'services/storage-service';

const init = () => {
    const savedState = loadState();

    const store = createStore(
        appReducers,
        savedState,
        applyMiddleware(thunk)
    );

    initAutoSave(store);

    ReactDOM.render(
        <Provider store={store}>
            <Consigliere />
        </Provider>,
        document.querySelector('#app')
    );
};

export default init;
