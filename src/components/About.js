import React from "react";
import Typography from "@mui/material/Typography";
import penguin from "../assets/penguinHug.jpg";

const About = () => {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
        style={{ textAlign: "center", width: "60vw", margin: "5vh 0 10vh 0" }}
      >
        I'm a computer science student at the University of Waterloo. Outside of
        dev, I enjoy rock climbing, playing video games with friends, and taking
        walks with my cat.
      </Typography>
    </div>
  );
};

export default About;
