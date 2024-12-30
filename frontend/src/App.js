import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./styles.css";

const App = () => {
  const [projectDetails, setProjectDetails] = useState({
    Project: "",
    Duration: "",
    Resources: "",
    Challenges: "",
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [response, setResponse] = useState("");
  const [dropdownData] = useState({
    projects: ["Proj A", "Proj B", "Proj C"],
    durations: [30, 60, 90, 120, 150],
    resources: [1, 2, 3, 4, 5],
    challenges: ["Budget constraints", "Resource shortage", "Scope creep"],
  });

  const handleChange = (e) => {
    setProjectDetails({ ...projectDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (endpoint) => {
    try {
      const res = await axios.post(`http://127.0.0.1:5000/${endpoint}`, {
        project_details: projectDetails,
      });
      setResponse(res.data);
      setDialogOpen(true);
    } catch (error) {
      console.error(error);
      setResponse("An error occurred while processing your request.");
      setDialogOpen(true);
    }
  };

  const RenderResponse = ({ response }) => {
    if (!response) return <Typography>No response yet.</Typography>;

    const formatResponse = (responseText) => {
      const cleanedText = responseText.replace(/[#*]/g, "");
      const projectLines = cleanedText.split("\n\n").filter((line) => line.trim());
      return projectLines.map((line, index) => {
        const [title, details] = line.split(":");
        return { title: title.trim(), details: details?.trim() || "" };
      });
    };

    const projects = formatResponse(response.prediction || response.optimization || response.risk_assessment);

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Results
        </Typography>
        {projects.map((project, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" fontWeight="bold" color="primary">
                {project.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="textPrimary">
                {project.details}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    );
  };

  return (
    <Box sx={{ p: 4, fontFamily: "Arial, sans-serif", maxWidth: 600, margin: "auto", boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        ERP LLM Integration
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              select
              name="Project"
              label="Project Name"
              value={projectDetails.Project}
              onChange={handleChange}
              fullWidth
            >
              {dropdownData.projects.map((project, idx) => (
                <MenuItem key={idx} value={project}>
                  {project}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              name="Duration"
              label="Duration (days)"
              value={projectDetails.Duration}
              onChange={handleChange}
              fullWidth
            >
              {dropdownData.durations.map((duration, idx) => (
                <MenuItem key={idx} value={duration}>
                  {duration}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              name="Resources"
              label="Resources Count"
              value={projectDetails.Resources}
              onChange={handleChange}
              fullWidth
            >
              {dropdownData.resources.map((resource, idx) => (
                <MenuItem key={idx} value={resource}>
                  {resource}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              name="Challenges"
              label="Challenges"
              value={projectDetails.Challenges}
              onChange={handleChange}
              fullWidth
            >
              {dropdownData.challenges.map((challenge, idx) => (
                <MenuItem key={idx} value={challenge}>
                  {challenge}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={() => handleSubmit("predict-scheduling")}>
              Predict Scheduling
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={() => handleSubmit("resource-optimization")}>
              Resource Optimization
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="success" onClick={() => handleSubmit("risk-assessment")}>
              Risk Assessment
            </Button>
          </Grid>
        </Grid>
      </form>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Response</DialogTitle>
        <DialogContent>
          <RenderResponse response={response} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default App;
