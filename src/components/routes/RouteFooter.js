import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../about/About";
import Contact from "../contact/Contact";
import Dataprotection from "../dataprotection/DataProtection";
import Impressum from "../impressum/Impressum";

function RouteFooter() {
	return (
		<Switch>
			<Route exact path="/about" component={About} />
			<Route path="/contact" component={Contact} />
			<Route path="/dataprotection" component={Dataprotection} />
			<Route path="/impressum" component={Impressum} />
		</Switch>
	);
}
export default RouteFooter;
