import React, { Fragment, useState } from "react";
import {
  Button,
  Container,
  Form,
  Header,
  Message,
  Popup,
} from "semantic-ui-react";
import "./Contact.css";

export default function Contact({ mobile }) {
  document.title = "Hakeem Angulu • Contact";
  const currentTime = () => {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time = today.getHours() + ":" + today.getMinutes();
    return date + " " + time;
  };

  const defaultFormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
    timestamp: currentTime(),
  };

  const [formValues, setFormValues] = useState(defaultFormValues);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (_event, { name, value }) => {
    setFormValues((prevFormValues) => {
      return {
        ...prevFormValues,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    setFormSuccess(true);
    // send email
    fetch("https://wh.automate.io/webhook/5eeee4f924af350f5a21496a", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    // record in spreadsheet
    fetch("https://wh.automate.io/webhook/5eeee6a624af350f5a214980", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
  };

  const { name, email, subject, message } = formValues;

  const emailRe = /\S+@\S+\.\S+/;

  const wordCount = (str) => {
    return str.trim().split(/\s+/).filter(Boolean).length;
  };

  const withinWordCount = (str, limit) => {
    return wordCount(str) > 0 && wordCount(str) <= limit;
  };

  const fieldsFilled = () =>
    name.length > 0 &&
    emailRe.test(email) &&
    withinWordCount(subject, 15) &&
    withinWordCount(message, 150);

  const contactClass = mobile ? "contact-center-mobile" : "contact-center";
  return (
    <Fragment>
      <Container text>
        <div className={contactClass}>
          <Header as="h1">contact</Header>
          <br />
          <p>
            If you'd like to get in touch with me, please use the form below.
            I'll do my best to respond promptly.
          </p>
          <br />
          <Form success={formSuccess} onSubmit={handleSubmit}>
            <Form.Input
              label="name"
              value={name}
              name="name"
              placeholder="name"
              onChange={handleChange}
            />
            <Form.Input
              label="email address"
              value={email}
              name="email"
              placeholder="email address"
              onChange={handleChange}
            />
            <Form.Input
              label="subject"
              value={subject}
              name="subject"
              placeholder="subject"
              onChange={handleChange}
            />
            <p className="word-count">{wordCount(subject)}/15 words</p>
            <Form.TextArea
              label="message"
              value={message}
              name="message"
              placeholder="message"
              onChange={handleChange}
              style={{ width: "420px" }}
            />
            <p className="word-count">{wordCount(message)}/150 words</p>
            <Popup
              trigger={
                <span>
                  <Button type="submit" disabled={!fieldsFilled()}>
                    send
                  </Button>
                </span>
              }
              content="Please fill out every field. Be sure to stay below the word limits and provide a valid email address."
              size="small"
              position="bottom center"
              disabled={fieldsFilled()}
            />
            <Message
              success
              header="message sent"
              content="Thank you for reaching out. I'll get back to you as soon as I can."
            />
          </Form>
        </div>
      </Container>
    </Fragment>
  );
}
