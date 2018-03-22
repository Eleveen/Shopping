import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import routes from './routes';


// 下面两行作用：应用中间件
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore); // 将中间件应用到 createStore
const store = createStoreWithMiddleware(reducers);
// 配置store：把reducer合并成store，并且关联action

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />  
  </Provider>
  , document.getElementById('app'));
