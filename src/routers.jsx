/**
 * Created by Moudi on 2017/3/23.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './app';
import Homepage from './components/Homepage.jsx';
import Sexdata from './components/Sexdata.jsx';
import Attentiondata from './components/Attentiondata.jsx';
// import Fansdata from './components/Fansdata.jsx';
import NotFind from './components/NotFind.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage}/>
      <Route path="sex" component={Sexdata}/>
      <Route path="attention" component={Attentiondata}/>
      {/*<Route path="fans" component={Fansdata}/>*/}
      {/*<Route path="friends" component={Friendsdata}/>*/}
      <Route path="*" component={NotFind} />
    </Route>
  </Router>
  , document.getElementById('app')
);