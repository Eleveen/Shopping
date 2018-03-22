import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App, UserListApp, Header, Fault } from '../components';
// import App from '../components/App';
// import UserListApp1 from '../components/UserListApp';

const routes = (
    <Router history={browserHistory}>
        
        <Route path="/" component={App} >
            <IndexRoute component={UserListApp} />
            <Route path="/users" component={UserListApp} />
        </Route>
        <Route path="*" component={Fault} />
        
     </Router>
     
);

export default routes;