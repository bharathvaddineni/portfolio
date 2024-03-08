/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Button } from "@mui/material";
import { styled } from "@mui/system";
import resume from "../assets/resume.pdf";
import { FaLinkedin, FaGithub, FaSalesforce } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.css';

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

const Content = styled("p")({
  fontSize: "1.2rem",
  lineHeight: "1.6",
  color: "#ccc",
  marginBottom: "20px",
});

const ButtonGroup = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "20px",
});

const StyledButton = styled(Button)({
  fontSize: "1rem",
  fontWeight: "bold",
  borderRadius: "20px",
  border: "1px solid gray",
  padding: "10px 20px",
  color: "#fff",

  "@media (max-width: 630px)": {
    padding: "8px",
    fontSize: "0.8rem",
  },
  "&.MuiButton-containedPrimary": {
    backgroundColor: "#3a3a3a",
    "&:hover": {
      backgroundColor: "#000",
    },
  },
});

const ContactSection = styled("section")({
  width: "100%",
  padding: "40px",
  backgroundColor: "#101010",
  borderRadius: "10px",
  textAlign: "center",
  marginBottom: "40px",
  display: "flex",
  justifyContent: "space-around",
  fontFamily: "Arial, sans-serif",
});

const ContactLink = styled(Link)({
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

const AboutPage = () => {
  const [projects, setProjects] = useState([]);
  console.log("projects: ", projects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("data/project.json");
        console.log("REs: ", response.data.projects);
        setProjects(response.data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <RootContainer>
      <Container>
        <Section>
          <Title>About Me</Title>
          <Content>
            Hi there! I'm Bharath Kumar, a passionate web developer. With a
            background in web development, I bring 5 years of experience to the
            table. My journey in web development started when I discovered my
            love for coding during my college days.
          </Content>
          <Content>
            Throughout my career, I've had the opportunity to work on various
            projects ranging from e-commerce websites to web applications. My
            approach to work is focused on delivering high-quality solutions
            that meet the client's needs.
          </Content>
          <Content>
            When I'm not working, you can find me exploring new technologies,
            playing guitar, or spending time with my family. I'm always eager to
            learn and grow in my field.
          </Content>
          <Content>
            Let's connect and create something amazing together!
          </Content>
          <ButtonGroup>
            <Link to="/projects" style={{ textDecoration: "none" }}>
              <StyledButton variant="contained" color="primary">
                Projects
              </StyledButton>
            </Link>
            <StyledButton variant="contained" color="primary">
              <a href={resume} download>
                My Resume
              </a>
            </StyledButton>
            <Link to="/skills" style={{ textDecoration: "none" }}>
              <StyledButton variant="contained" color="primary">
                Skills
              </StyledButton>
            </Link>
          </ButtonGroup>
        </Section>
        <Section>
          <Title>Projects</Title>
          <Carousel controls={true} touch={true}>
            {projects.length > 0 &&
              projects.map((project, index) => (
                <Carousel.Item key={index}>
                  <h1 className="text-white mb-4">{project.title}</h1>
                  <img src={project.image} alt="" />
                </Carousel.Item>
              ))}
          </Carousel>
        </Section>
        <ContactSection>
          <ContactLink
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <FaLinkedin />
            </Icon>{" "}
            LinkedIn
          </ContactLink>
          <ContactLink
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <FaGithub />
            </Icon>{" "}
            GitHub
          </ContactLink>
          <ContactLink href="mailto:example@example.com">
            <Icon>
              <MdEmail />
            </Icon>{" "}
            Email
          </ContactLink>
          <ContactLink href="https://www.salesforce.com/trailblazer/bvaddineni">
            <Icon>
              <FaSalesforce />
            </Icon>{" "}
            Salesforce
          </ContactLink>
        </ContactSection>
      </Container>
    </RootContainer>
  );
};

export default AboutPage;
