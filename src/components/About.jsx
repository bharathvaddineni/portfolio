import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
// import pic1 from "../assets/pic1.png";
// import pic2 from "../assets/pic2.png";
import resume from "../assets/resume.pdf";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const RootContainer = styled("div")({
  backgroundColor: "#121212", // dark background color
  minHeight: "100vh",
  display: "flex",
  padding: "1rem",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "cursive", // cursive font
});

const Section = styled("section")({
  width: "100%",
  padding: "40px",
  backgroundColor: "#1e1e1e", // slightly lighter background color
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.1)", // lighter shadow
  textAlign: "justify", // justify content
  marginBottom: "40px",
});

const Title = styled("h2")({
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#fff", // white text color
});

const Content = styled("p")({
  fontSize: "1.2rem",
  lineHeight: "1.6",
  color: "#ccc", // light text color
  marginBottom: "20px", // Add padding to content
});

const ButtonGroup = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
});

const StyledButton = styled(Button)({
  fontSize: "1rem",
  fontWeight: "bold",
  borderRadius: "20px",
  padding: "10px 20px",
  color: "#fff", // white text color
  "@media (max-width: 630px)": {
    padding: "8px", // Adjust padding for smaller screens
    fontSize: "0.8rem", // Adjust font size for smaller screens
  },
  "&.MuiButton-containedPrimary": {
    backgroundColor: "#5a5a5a", // dark grey button color
    "&:hover": {
      backgroundColor: "#3a3a3a", // darker shade on hover
    },
  },
  "&.MuiButton-containedSecondary": {
    backgroundColor: "#696969", // dark grey button color
    "&:hover": {
      backgroundColor: "#4a4a4a", // darker shade on hover
    },
  },
});

const ProjectTitle = styled("h3")({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#fff", // white text color
});

const ProjectDescription = styled("p")({
  fontSize: "1.2rem",
  lineHeight: "1.6",
  color: "#ccc", // light text color
  marginBottom: "20px", // Add some gap between description and image
});

const ProjectSkills = styled("p")({
  fontSize: "1rem",
  color: "#fff", // light text color
  textAlign: "center", // Align skills to the center
  marginBottom: "20px", // Add margin for spacing
  fontWeight: "bold",
  display:"flex",
  direction:"row",
  gap:"10px"
});

const ProjectImage = styled("img")({
  width: "100%", // Ensure image takes full width
  height: "auto", // Maintain aspect ratio
  marginBottom: "20px", // Add gap between image and skills
});

const Carousel = styled("div")({
  overflow: "hidden",
  position: "relative",
  width: "100%",
  height: "auto",
  marginBottom: "20px", // Add margin-bottom for gap between carousel and buttons
});

const CarouselTrack = styled("div")({
  display: "flex",
  transition: "transform 0.5s ease",
});

const CarouselItem = styled("div")({
  flex: "0 0 100%",
});

const CarouselButton = styled(Box)({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  margin: "0 5px",
  cursor: "pointer",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#ccc",
  },
});

const ActiveCarouselButton = styled(CarouselButton)({
  backgroundColor: "#ff0000", // Change background color to red for active button
});

// Contact section styling
const ContactSection = styled("section")({
  width: "100%",
  padding: "40px",
  backgroundColor: "#101010", // slightly lighter background color
  borderRadius: "10px",
  //boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.1)', // lighter shadow
  textAlign: "center", // center content
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
  const [currentSlide, setCurrentSlide] = React.useState(0);

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

  const handleClick = (index) => {
    setCurrentSlide(index);
  };

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
              <StyledButton variant="contained" color="secondary">
                Skills
              </StyledButton>
            </Link>
          </ButtonGroup>
        </Section>
        <Section>
          <Carousel>
            <CarouselTrack
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.length > 0 &&
                projects.map((project, index) => (
                  <CarouselItem key={index}>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>
                    <ProjectImage src={project.image} alt={project.title} />
                    <div className="flex flex-row justify-center space-x-4">
                    <p className="text-white font-bold">Skills: </p>
                    <ProjectSkills>
                {project.skills.map((skill, index) => (
                  <div key={index}> 
                    {skill.name}{" "}
                  </div>
                ))}
              </ProjectSkills>
                    </div>
                    
                  </CarouselItem>
                ))}
              {/* <CarouselItem>
                <ProjectTitle>Movie Data Visualization</ProjectTitle>
                <ProjectDescription>
                  This project is a movie data visualization web application
                  built with React.js. It utilizes data fetched from MongoDB to
                  display various charts and information about movies, including
                  genre popularity, movies released in each decade, and more.
                </ProjectDescription>
                <ProjectImage src={pic2} alt="Movie Data Visualization" />
                <ProjectSkills>
                  Skills: React.js · Express.js · Node.js · Tailwind CSS ·
                  MongoDB
                </ProjectSkills>
              </CarouselItem>
              <CarouselItem>
                <ProjectTitle>Project Management App</ProjectTitle>
                <ProjectDescription>
                  The project is a web-based project management application
                  built using Vue.js. It allows users to create, manage, and
                  track tasks and projects, facilitating efficient project
                  management and collaboration among team members. The
                  application features include task creation and task updates.
                  It also provides a visual representation of project progress
                  and task completion status.
                </ProjectDescription>
                <ProjectImage src={pic1} alt="Project Management App" />
                <ProjectSkills>
                  Skills: Vue.js · Vuex · Tailwind CSS
                </ProjectSkills>
              </CarouselItem> */}
            </CarouselTrack>
          </Carousel>
          <Box display="flex" justifyContent="center">
            {[0, 1].map((index) => (
              <React.Fragment key={index}>
                {index === currentSlide ? (
                  <ActiveCarouselButton onClick={() => handleClick(index)} />
                ) : (
                  <CarouselButton onClick={() => handleClick(index)} />
                )}
              </React.Fragment>
            ))}
          </Box>
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
        </ContactSection>
      </Container>
    </RootContainer>
  );
};

export default AboutPage;
