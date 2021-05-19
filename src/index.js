import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "../src/assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Main from "components/Main/Main"

var hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<Switch>
			<Route path="/" component={Main} />
		</Switch>
	</Router>,
	document.getElementById("root")
);
