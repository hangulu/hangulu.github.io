import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Header } from "semantic-ui-react";

export default function Commissions({ mobile }) {
  const aboutClass = mobile ? "about-center-mobile" : "about-center";
  return (
    <Fragment>
      <Container text>
        <div className={aboutClass}>
          <Header as="h1" textAlign="center">
            commissions
          </Header>
          <p>
            I am a seasoned full-stack software engineer with extensive
            experience in delivering robust, scalable software solutions for a
            wide range of industries. I have worked in and with companies big
            and small, delivering trustworthy digital products quickly.
          </p>
          <p>
            Services offered:
            <ul>
              <li>Web development</li>
              <li>Mobile application development</li>
              <li>API development</li>
              <li>Machine learning model training and implementation</li>
              <li>UX design</li>
              <li>Data analysis and visualization</li>
            </ul>
          </p>
          <p>
            Need something built quickly and well?{" "}
            <Link to="/contact">Contact me</Link> today for a quote and other
            details.
          </p>
        </div>
      </Container>
    </Fragment>
  );
}
