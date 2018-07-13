import React from 'react';
import Bundle from './bundle';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// import Home from '../pages/Home/Home';
// import Page1 from '../pages/Page1/Page1';
// import Counter from '../pages/Counter/counter';
// import UserInfo from '../pages/UserInfo/UserInfo';
const Home = (props) => (
    <Bundle load={() => import('../pages/Home/Home')}>
        {(Home) => <Home {...props}/>}
    </Bundle>
);
const Page1 = (props) => (
    <Bundle load={() => import('../pages/Page1/Page1')}>
        {(Page1) => <Page1 {...props}/>}
    </Bundle>
);
const Counter = (props) => (
    <Bundle load={() => import('../pages/Counter/Counter')}>
        {(Counter) => <Counter {...props}/>}
    </Bundle>
);
const UserInfo = (props) => (
    <Bundle load={() => import('../pages/UserInfo/UserInfo')}>
        {(UserInfo) => <UserInfo {...props}/>}
    </Bundle>
);
const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/home">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">counter</Link></li>
                <li><Link to="/userinof">userinfo</Link></li>
            </ul>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/counter" component={Counter}/>
                <Route path="/userinof" component={UserInfo}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;