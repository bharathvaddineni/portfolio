/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Container, Button, Box, Modal } from "@mui/material";
import { styled } from "@mui/system";
import { FaGithub } from "react-icons/fa";
import axios from "axios";

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
  color: "#fff",
  "@media (max-width: 630px)": {
    padding: "8px",
    fontSize: "0.8rem",
  },
  "&.MuiButton-containedPrimary": {
    backgroundColor: "#5a5a5a",
    "&:hover": {
      backgroundColor: "#3a3a3a",
    },
  },
});

const ProjectTitle = styled("h3")({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#fff",
});

const ProjectDescription = styled("p")({
  fontSize: "1.2rem",
  lineHeight: "1.6",
  color: "#ccc",
  marginBottom: "20px",
});

const ProjectSkills = styled("p")({
  fontSize: "1rem",
  color: "#fff",
  textAlign: "center",
  marginBottom: "20px",
  fontWeight: "bold",
  display:"flex",
  flexWrap:"wrap",
  gap:"50px"
});

const ProjectImage = styled("img")({
  width: "100%",
  height: "auto",
  marginBottom: "20px",
});

const SkillLogo = styled("img")({
  width: "30px",
  height: "30px",
  marginRight: "15px",
});

const VideoModal = ({ open, onClose, videoUrl }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          height: "50%",
          bgcolor: "#fff",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          overflow: "auto",
          padding: "1%",
          backgroundColor: "#ddd"
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          title="Demo Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Box>
    </Modal>
  );
};

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/data/project.json");
        setProjects(response.data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleOpenModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedVideo("");
  };

  return (
    <RootContainer>
      <Container>
        <Section>
          <Title>My Projects</Title>
        </Section>
        {projects.map((project, index) => (
          <Box key={index} sx={{ mb: 4, paddingBottom:"5px", borderBottom: "1px solid white"}}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectSkills>
                Skills:{" "}
                {project.skills.map((skill, index) => (
                  <div key={index} className="flex felx-row">
                    <SkillLogo src={skill.logo} alt={skill} /> 
                    {skill.name}{" "}
                  </div>
                ))}
              </ProjectSkills>
            <ButtonGroup>
              <StyledButton
                variant="contained"
                color="primary"
                onClick={() => handleOpenModal(project.video)}
              >
                View Demo
              </StyledButton>

              <Button
                variant="contained"
                color="secondary"
                startIcon={<FaGithub />}
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            </ButtonGroup>
          </Box>
        ))}
        <VideoModal
          open={openModal}
          onClose={handleCloseModal}
          videoUrl={selectedVideo}
        />
      </Container>
    </RootContainer>
  );
};

export default ProjectsPage;
