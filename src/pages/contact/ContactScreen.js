import React from "react";
import "./contactElement.js";
import {
  Container,
  Form,
  Input,
  Label,
  StyledButton,
  StyledTitle,
  Textarea,
  WrapperGrid,
} from "./contactElement.js";

function ContactScreen(props) {
  return (
    <Container wrapper>
      <StyledTitle>Email Us</StyledTitle>
      <Form>
        <WrapperGrid>
          <Label>First Name</Label>
          <Input type="text" name="name" />
        </WrapperGrid>
        <WrapperGrid>
          <Label>Last Name</Label>
          <Input type="text" name="company" />
        </WrapperGrid>
        <WrapperGrid>
          <Label>Email Address</Label>
          <Input type="email" name="email" />
        </WrapperGrid>
        <WrapperGrid>
          <Label>Phone Number</Label>
          <Input type="text" name="phone" />
        </WrapperGrid>
        <WrapperGrid full>
          <Label>Message</Label>
          <Textarea name="message" rows="5"></Textarea>
        </WrapperGrid>
        <WrapperGrid full>
          <StyledButton>Submit</StyledButton>
        </WrapperGrid>
      </Form>
    </Container>
  );
}

export default ContactScreen;
