import React, { Fragment } from "react";
import { Container, Divider, Header, Image } from "semantic-ui-react";
import actionableExample from "../images/actionable_example.png";
import dvmExample from "../images/dvm_example.png";
import expandHarvardExample from "../images/expandharvard_example.png";
import oakLogo from "../images/oak_logo.png";
import pinwheelLogo from "../images/pinwheel_logo.png";
import popImgExample from "../images/popimg_example.gif";
import "./Software.css";

export default function Software() {
  return (
    <Fragment>
      <Container text>
        <div className="project-center">
          <Header as="h1">software projects</Header>

          <Header as="h3" id="oak">
            oak
          </Header>
          <p>
            <a
              href="https://myoaksystem.com/"
              target="_blank"
              rel="noopener noreferrer">
              https://myoaksystem.com/
            </a>
          </p>
          <p>
            I served as the Chief Technology Officer of{" "}
            <a
              href="https://myoaksystem.com/"
              target="_blank"
              rel="noopener noreferrer">
              oak
            </a>
            , a startup committed to uplifting Black-owned hair businesses and
            making natural hair accessible using science and technology. I
            co-designed and built software that recommended hair products with
            ingredients that matched users' hair, goals, and lifestyle — all
            from Black-owned businesses. oak had several web applications and a
            Chrome extension that showed which products on popular online
            storefronts (Walmart, Target, and Amazon) were Black-owned, and
            recommended similar ones from Black-owned businesses we partnered
            with. We're incredibly proud of what we built, and after three years
            of building, oak's co-founders and I turned down the company in July
            2022 to focus on other projects.
          </p>
          <Image src={oakLogo} size="small" centered />

          <Divider horizontal>-</Divider>

          <Header as="h3" id="oak">
            Pinwheel Productions
          </Header>
          <p>
            <a
              href="https://pinwheelprods.com/"
              target="_blank"
              rel="noopener noreferrer">
              https://pinwheelprods.com/
            </a>
          </p>
          <p>
            I developed the prototypical software for{" "}
            <a
              href="https://pinwheelprods.com/"
              target="_blank"
              rel="noopener noreferrer">
              Pinwheel Productions
            </a>
            , an artist-led and collectively-owned production company for
            underrepresented creators. I did the system design and created the
            MVP for Pinwheel Exchange, their proprietary rental and artist
            engagement platform. I then helped them recruit their first Director
            of Technology, and served as an interim technology advisor for the
            company as it hired more people and took on funding.
          </p>
          <Image src={pinwheelLogo} size="small" centered />

          <Divider horizontal>-</Divider>

          <Header as="h3" id="dvm">
            The Discrete Voter Model
          </Header>
          <p>
            <a
              href="https://github.com/hangulu/dvm"
              target="_blank"
              rel="noopener noreferrer">
              https://github.com/hangulu/dvm
            </a>
          </p>
          <p>
            The Discrete Voter Model is a method of ecological inference that
            grew out of my{" "}
            <a
              href="https://github.com/hangulu/thesis"
              target="_blank"
              rel="noopener noreferrer">
              undergraduate senior thesis
            </a>{" "}
            for the departments of Computer Science and Statistics at Harvard
            College. It can be found on PyPI{" "}
            <a
              href="https://pypi.org/project/dvm/"
              target="_blank"
              rel="noopener noreferrer">
              here
            </a>
            .
          </p>
          <Image src={dvmExample} size="big" centered />

          <Divider horizontal>-</Divider>

          <Header as="h3">expandharvard</Header>
          <p>
            <a
              href="https://github.com/hangulu/expandharvard"
              target="_blank"
              rel="noopener noreferrer">
              https://github.com/hangulu/expandharvard
            </a>
          </p>
          <p>
            The project analyzes the data available about the Harvard endowment
            and general economic information about Cambridge and Boston to see
            the effect of Harvard's expansion as a University on the cities. The
            final product is{" "}
            <a
              href="https://harvardpolitics.com/harvard/expansion-and-gentrification/"
              target="_blank"
              rel="noopener noreferrer">
              this article in the Harvard Political Review
            </a>{" "}
            that explains the methodology of analysis, as well as the
            conclusions.
          </p>
          <Image src={expandHarvardExample} size="big" centered />

          <Divider horizontal>-</Divider>

          <Header as="h3">PopImg</Header>
          <p>
            <a
              href="https://github.com/hangulu/popimg"
              target="_blank"
              rel="noopener noreferrer">
              https://github.com/hangulu/popimg
            </a>
          </p>
          <p>
            PopImg was a web application that found the most popular image on a
            Twitter user's timeline. It used computer vision to compare all the
            images a user interacted with at given points in time.
          </p>
          <Image src={popImgExample} size="big" centered />

          <Divider horizontal>-</Divider>

          <Header as="h3">actionable</Header>
          <p>
            <a
              href="https://github.com/hangulu/actionable"
              target="_blank"
              rel="noopener noreferrer">
              https://github.com/hangulu/actionable
            </a>
          </p>
          <p>
            actionable was a web application that allowed you to find the
            nearest protest to you, in a specified time frame, that dealt with
            an issue that you care about.
          </p>
          <Image src={actionableExample} size="big" centered />

          <Divider horizontal>-</Divider>

          <p className="bottom">this is the bottom</p>
        </div>
      </Container>
    </Fragment>
  );
}
