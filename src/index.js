import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from './redux/saga';
import reducer from './redux/reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
 );
 sagaMiddleware.run(rootSaga);

ReactDOM.render(
<Provider store={store}>
    <App /> 
</Provider>, document.getElementById('root'));
registerServiceWorker();
