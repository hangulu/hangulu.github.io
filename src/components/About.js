import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Header } from "semantic-ui-react";
import "./About.css";

export default function About({ mobile }) {
  const aboutClass = mobile ? "about-center-mobile" : "about-center";
  return (
    <Fragment>
      <Container text>
        <div className={aboutClass}>
          <Header as="h1" textAlign="center">
            hello
          </Header>
          <p>
            My name is <strong>Hakeem Olakunle Isa Angulu</strong>. I was born
            and raised in Kingston, Jamaica, and I moved to the United States in
            2014 to finish my education. I am currently based in Brooklyn, NY.
          </p>
          <p>
            In May 2020, I graduated from Harvard College with a Bachelor of
            Arts degree in Computer Science and Statistics, and a secondary
            field of African American Studies. I am now a Software Engineer III
            at Google, on their{" "}
            <a
              href="https://io.google/2022/program/d7b6d22e-59a4-4e6b-a49d-3116ee57dcc3/"
              target="_blank"
              rel="noopener noreferrer">
              Counter-Abuse Technology team
            </a>
            , within the Privacy, Safety and Security organization.
          </p>
          <p>
            I'm an optimistic builder. I translate my ideas — and those from
            others that I believe in and collaborate with — into virtual and
            physical objects people can use and relate to. My usual tools for
            this process are code and art (photography, cinematography, and
            curation). To serve as a proper introduction, this website is also a
            showcase of what I've built with those tools. I document here my own
            artwork (mostly photography) and my own non-Google software
            projects, many of which have the explicit aim to amplify voices,
            facilitate justice and push limits.
          </p>
          <p>
            If you'd like to get in touch with me, please use{" "}
            <Link to="/contact">this page</Link>.
          </p>
        </div>
      </Container>
    </Fragment>
  );
}
