import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import getRouter from './router/router';
import {Provider} from 'react-redux';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';
renderWithHotReload(getRouter());
function renderWithHotReload(RootElement) {
    ReactDOM.render(
            <Provider store={store}>
                {RootElement}
            </Provider>,
        document.getElementById('root')
    )
}
registerServiceWorker();
