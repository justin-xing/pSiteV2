import React from "react";
import Typography from "@mui/material/Typography";
import penguin from "../assets/penguinHug.jpg";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const About = (props) => {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: '10vh 0 0 0',
      }}
    >
      <Typography variant="h2" style={{ margin: "0 0 3vh 0" }}>
        About Me
      </Typography>
      <div style={{ overflow: "hidden", height: "60vh", borderRadius: "10vh" }}>
        <img
          src={penguin}
          alt="Me hugging a penguin"
          style={{
            height: "70vh",
            width: "auto",
            margin: "-110px 0 -40px -40px",
          }}
        ></img>
      </div>
      <Typography
        variant="h5"
        style={{ textAlign: "center", width: "50%", margin: "5vh 0 0 0" }}
      >
        I'm a computer science co-op student at the University of Waterloo. Outside of
        dev, I enjoy rock climbing, playing video games with friends, taking
        walks with my cat, and travelling. Above is me at Gwangali Beach in Busan, South Korea!
      </Typography>
      <Box textAlign='center'>
        <Button onClick={props.scrollStackHandler} variant='outlined' style={{color: 'white', borderColor: 'white', marginTop: '3vh'}}>Coding Experience</Button>
      </Box>
    </div>
  );
};

export default About;
