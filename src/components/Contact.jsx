/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { FaLinkedin, FaGithub, FaSalesforce } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const RootContainer = styled("div")({
  backgroundColor: "#121212",
  minHeight: "100vh",
  display: "flex",
  padding: "1rem",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "'Open Sans', sans-serif",
});

const Section = styled("section")({
  width: "100%",
  padding: "40px",
  backgroundColor: "#1e1e1e",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.1)",
  textAlign: "justify",
  marginBottom: "40px",
});

const Title = styled("h2")({
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#fff",
});

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const ContactLink = styled("a")({
  display: "flex",
  alignItems: "center",
  color: "#fff",
  textDecoration: "none",
  fontSize: "1.2rem",
  fontWeight: "bold",
  margin: "10px",
  padding: "10px",
  borderRadius: "5px",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#333",
  },
});

const Icon = styled("span")({
  marginRight: "5px",
});

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <RootContainer>
      <Container>
        <Section>
          <Title>Let's Conect</Title>
          <Box textAlign="center" mb={4}>
            <Typography variant="body1" sx={{color:'white'}}>
              🌟 Seeking fresh adventures and opportunities to create magic, I'm
              extending an invitation to journey with me. Let's craft stories of
              innovation and dreams fulfilled together! ✨
            </Typography>
          </Box>
          <Box display="flex" flexWrap={"wrap"} justifyContent="center">
            {" "}
            {/* Center align links */}
            <ContactLink
              href="https://www.linkedin.com/in/bharath-kumar-vaddineni/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <FaLinkedin />
              </Icon>{" "}
              LinkedIn
            </ContactLink>
            <ContactLink
              href="https://github.com/bharathvaddineni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <FaGithub />
              </Icon>{" "}
              GitHub
            </ContactLink>
            <ContactLink href="mailto:vaddineni.bharath@gmail.com">
              <Icon>
                <MdEmail />
              </Icon>{" "}
              Email
            </ContactLink>
            <ContactLink
              href="https://www.salesforce.com/trailblazer/bvaddineni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <FaSalesforce />
              </Icon>{" "}
              Salesforce
            </ContactLink>
          </Box>
        </Section>
        <Section sx={{ backgroundColor: "white" }}>
          <Form onSubmit={handleSubmit}>
            <TextField label="Name" variant="outlined" />
            <TextField label="Email" variant="outlined" type="email" required />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ maxWidth: "200px" }}
            >
              Send Message
            </Button>
          </Form>
        </Section>
      </Container>
    </RootContainer>
  );
};

export default ContactPage;
