import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import About from "./About.js";
import Contact from "./Contact.js";
import Film from "./Film.js";
import NavigationBar from "./NavigationBar.js";
import Photography from "./Photography.js";
import Projects from "./Projects.js";
import Sidebar from "./Sidebar.js";

function Pages({ mobile }) {
  return (
    <Fragment>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <About mobile={mobile} />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/photo">
          <Photography />
        </Route>
        <Route exact path="/film">
          <Film />
        </Route>
        <Route exact path="/contact">
          <Contact mobile={mobile} />
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
