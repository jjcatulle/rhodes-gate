import React from "react";

import { Box, Container, Row, Column, FooterLink, Heading } from "./styles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#dd1155", textAlign: "center", marginTop: "-50px" }}>
        Rhodes Gate: A Launchpad for everyone
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Advicing</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">help@rhodesgate.com</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        {/* <Row> */}
        <div
          style={{
            color: "#eee",
            textAlign: "center",
            width: "100%",
            // background: "red",
            margin: "auto",
            paddingTop:'5rem'
          }}
        >
          All Rights Reserved- &copy; 2022 Rhodes Gates
        </div>
        {/* </Row> */}
      </Container>
    </Box>
  );
};
export default Footer;
