import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Route, Redirect, IndexRoute, browserHistory, RouterState, RedirectFunction } from "react-router";
import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
const reduxDevtoolsExtension = require("redux-devtools-extension");

import App from "./containers/App";
import Home from "./containers/Home";
import Me from "./containers/Me";
import MyFiles from "./containers/MyFiles";
import SendFile from "./containers/SendFile";

import reducers from "./redux";

const store = createStore(
    reducers,
    reduxDevtoolsExtension.composeWithDevTools(applyMiddleware(
        thunkMiddleware
    ))
);

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="me">
                    <IndexRoute component={Me}/>
                    <Route path="send-file" component={SendFile}/>
                </Route>
            </Route>
        </Router>
    </Provider>

), document.getElementById("app"));