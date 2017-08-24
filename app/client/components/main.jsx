import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import '../index.html';
import 'styles/main';

import appReducers from '../reducers';
import Consigliere from 'components/consigliere';
import { loadState } from 'services/storage-service';

const init = () => {
    const savedState = loadState();

    const store = createStore(
        appReducers,
        savedState
    );

    ReactDOM.render(
        <Provider store={store}>
            <Consigliere />
        </Provider>,
        document.querySelector('#app')
    );
};

export default init;
