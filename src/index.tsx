// Activate polyfills
require("babel-polyfill");

/* Setup locales before importing anything else */

import "moment/locale/pt-br";

import * as numeral from "numeral";
require("numeral/locales/pt-br.js");
numeral.locale("pt-br");

/* Application setup */

import * as React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import {} from "react-router";
import App from "./containers/App";
import { Router } from "react-router-dom";
import { useStrict } from "mobx";

import * as store from "./models";
import { history } from "./models/routing";

useStrict(true);

render(
    (
        <Provider {...store}>
            <Router history={history}>
                <App/>
            </Router>
        </Provider>
    ),
    document.getElementById("app"),
);
