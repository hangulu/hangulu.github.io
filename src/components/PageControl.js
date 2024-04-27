import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import About from "./About.js";
import Art from "./Art.js";
import Commissions from "./Commissions.js";
import Contact from "./Contact.js";
import NavigationBar from "./NavigationBar.js";
import Sidebar from "./Sidebar.js";
import Software from "./Software.js";

function Pages({ mobile }) {
  return (
    <Fragment>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <About mobile={mobile} />
        </Route>
        <Route exact path="/commissions">
          <Commissions mobile={mobile} />
        </Route>
        <Route exact path="/software">
          <Software />
        </Route>
        <Route exact path="/art">
          <Art />
        </Route>
        <Route exact path="/contact">
          <Contact mobile={mobile} />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default function PageControl() {
  return (
    <Grid columns="equal" padded stackable divided>
      <Grid.Row only="tablet mobile">
        <Grid.Column>
          <Sidebar mobile={true} />
          <Pages mobile={true} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only="computer">
        <Grid.Column width={4}>
          <Sidebar />
        </Grid.Column>
        <Grid.Column width={12}>
          <Pages />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
