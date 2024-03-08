import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Box, Typography, LinearProgress, Tooltip, Grid, Divider } from "@mui/material";
import { styled } from "@mui/system";

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

const CategoryTitle = styled("h3")({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#fff",
});

const CategoryDescription = styled("p")({
  marginTop: "10px",
  marginBottom: "10px",
  color: "#aaa",
});

const SkillTitle = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#fff",
});

const SkillContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  position: "relative",
  "&:hover $ProficiencyTooltip": {
    opacity: 1,
  },
});

const RangeBar = styled(LinearProgress)({
  width: "200px",
  marginLeft: "20px",
  height: "12px",
});

const Skills = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    const fetchSkills = async () => {
      try {
        const response = await axios.get("/data/project.json");
        setCategories(response.data.skills);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchSkills();
  }, []);

  const proficiencyRange = {
    Beginner: 25,
    Intermediate: 50,
    Advanced: 75,
    Expert: 100,
  };

  return (
    <RootContainer>
      <Container>
        <Section>
          <Title>My Skills</Title>
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <CategoryTitle>{category.name}</CategoryTitle>
              <CategoryDescription>{category.description}</CategoryDescription>
              <Grid container spacing={2}>
                {category.skills.map((skill, skillIndex) => (
                  <Grid item xs={12} sm={6} key={skillIndex}>
                    <SkillContainer>
                      <SkillTitle>{skill.name}</SkillTitle>
                      <Tooltip title={skill.level} placement="top">
                        <RangeBar variant="determinate" value={proficiencyRange[skill.level]} />
                      </Tooltip>
                    </SkillContainer>
                  </Grid>
                ))}
              </Grid>
              <Divider style={{ margin: "20px 0", border: "1px solid #fff" }} />
            </React.Fragment>
          ))}
        </Section>
      </Container>
    </RootContainer>
  );
};

export default Skills;
