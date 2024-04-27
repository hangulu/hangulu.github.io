import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Grid, Menu, Sticky } from "semantic-ui-react";
import "./NavigationBar.css";

export default function NavigationBar() {
  const location = useLocation();

  return (
    <Grid>
      <Grid.Column textAlign="center">
        <Sticky>
          <div className="sticky-push">
            <Menu compact pointing secondary>
              <Menu.Item
                as={Link}
                content="about"
                to="/"
                active={location.pathname === "/"}
              />
              <Menu.Item
                as={Link}
                content="commissions"
                to="/commissions"
                active={location.pathname === "/commissions"}
              />
              <Menu.Item
                as={Link}
                content="software"
                to="/software"
                active={location.pathname === "/software"}
              />
              <Menu.Item
                as={Link}
                content="art"
                to="/art"
                active={location.pathname === "/art"}
              />
              <Menu.Item
                as={Link}
                content="contact"
                to="/contact"
                active={location.pathname === "/contact"}
              />
            </Menu>
          </div>
        </Sticky>
      </Grid.Column>
    </Grid>
  );
}
