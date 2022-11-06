import React, { Fragment } from "react";
import { Container, Header, Image } from "semantic-ui-react";
import headshot from "../images/headshot.png";
import "./Sidebar.css";

export default function Sidebar({ mobile }) {
  const sidebarClass = mobile ? "center-mobile" : "vert-center";
  return (
    <Fragment>
      <div className={sidebarClass}>
        <Container>
          <Image src={headshot} circular size="small" centered />
          <Header as="h2" textAlign="center">
            Hakeem Olakunle Isa Angulu
            <Container textAlign="center" className="pronouns">
              <a
                href="https://www.mypronouns.org/what-and-why"
                target="_blank"
                rel="noopener noreferrer">
                he/him/his
              </a>
            </Container>
          </Header>
          <Header as="h4" textAlign="center">
            software engineer and photographer
          </Header>
          <Container textAlign="center" className="social">
            <a
              href="https://github.com/hangulu"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
          </Container>
          <br />
          <Container textAlign="center" className="social">
            <a
              href="https://www.linkedin.com/in/hangulu/"
              target="_blank"
              rel="noopener noreferrer">
              LinkedIn
            </a>
          </Container>
          <br />
          <Container textAlign="center" className="social">
            <a
              href="https://medium.com/@hakeemangulu"
              target="_blank"
              rel="noopener noreferrer">
              Medium
            </a>
          </Container>
          <br />
          <Container textAlign="center" className="social">
            <a
              href="https://twitter.com/hakeemangulu"
              target="_blank"
              rel="noopener noreferrer">
              Twitter
            </a>
          </Container>
        </Container>
      </div>
    </Fragment>
  );
}
