import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Header } from "semantic-ui-react";
import "./About.css";

export default function About({ mobile }) {
  document.title = "Hakeem Angulu";
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
            I am a Senior Software Engineer at Google, in the{" "}
            <a
              href="https://blog.google/threat-analysis-group/"
              target="_blank"
              rel="noopener noreferrer">
              Threat Analysis Group
            </a>
            , within the User Protection and Privacy, Safety and Security
            organizations. In May 2020, I graduated from Harvard College with a
            Bachelor of Arts degree in Computer Science and Statistics, and a
            secondary field of African American Studies.
          </p>
          <p>
            I'm an optimistic builder. I translate my ideas — and those from
            others that I believe in and collaborate with — into virtual and
            physical objects people can use and relate to. My usual tools for
            this process are code and art (photography, cinematography, and
            curation).
          </p>
          <p>
            This website is also a showcase of what I've built with those tools.
            I document here my own artwork (mostly photography) and my own
            personal software projects, many of which have the explicit aim to
            amplify voices, facilitate justice and push limits.
          </p>
          <p>
            I offer <Link to="/commissions">commissions</Link> for software
            projects. Otherwise, if you'd like to get in touch with me, please
            use <Link to="/contact">this page</Link>.
          </p>
        </div>
      </Container>
    </Fragment>
  );
}
