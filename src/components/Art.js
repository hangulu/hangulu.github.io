import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import { Container, Divider, Grid, Header, Image } from "semantic-ui-react";
import eleganza1 from "../images/eleganza1.jpg";
import eleganza2 from "../images/eleganza2.jpg";
import graduation from "../images/graduation.jpg";
import twice from "../images/twice.jpg";
import "./Art.css";

export default function Art() {
  document.title = "Hakeem Angulu • Art";
  return (
    <Fragment>
      <Container text>
        <div className="photo-center">
          <Header as="h1">photography</Header>
          <br />
          <Grid stackable columns={16}>
            <Grid.Row centered>
              <Grid.Column width={16}>
                <Image src={twice} size="massive" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={8}>
                <Image src={eleganza1} size="large" />
              </Grid.Column>
              <Grid.Column width={8}>
                <Image src={eleganza2} size="large" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16}>
                <Image src={graduation} size="massive" />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Divider horizontal>-</Divider>

          <Header as="h1">cinematography</Header>

          <Header as="h3">BURN (2020)</Header>
          <Container text textAlign="center">
            written by{" "}
            <a
              href="https://najyawilliams.com/"
              target="_blank"
              rel="noopener noreferrer">
              Najya Williams
            </a>
            <br />
            directed by Hakeem Angulu
            <br />
            director of photography: Hakeem Angulu
            <br />
            <br />
          </Container>
          <ReactPlayer url="https://vimeo.com/392639653" controls={true} />
          <Divider horizontal>-</Divider>

          <Header as="h3">MORE LIFE (2020)</Header>
          <Container text textAlign="center">
            written by{" "}
            <a
              href="https://najyawilliams.com/"
              target="_blank"
              rel="noopener noreferrer">
              Najya Williams
            </a>
            <br />
            directed by Von Pitts
            <br />
            director of photography: Hakeem Angulu
            <br />
            <br />
          </Container>
          <ReactPlayer url="https://vimeo.com/392636542" controls={true} />
          <Divider horizontal>-</Divider>

          <Header as="h3">ALL GRAY (2020)</Header>
          <Container text textAlign="center">
            written by{" "}
            <a
              href="https://najyawilliams.com/"
              target="_blank"
              rel="noopener noreferrer">
              Najya Williams
            </a>
            <br />
            directed by Kelcee Everette
            <br />
            director of photography: Hakeem Angulu
            <br />
            <br />
          </Container>
          <ReactPlayer url="https://vimeo.com/392645894" controls={true} />

          <p className="bottom">this is the bottom</p>
        </div>
      </Container>
    </Fragment>
  );
}
