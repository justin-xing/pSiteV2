import Typography from "@mui/material/Typography";
import pSiteV1 from "../assets/projectImages/pSiteV1.png";
import fidgetFixr from "../assets/projectImages/fidgetFixr.png";
import todo from "../assets/projectImages/todo.png";
import Project from './Project';

const projects = [
  {
    name: "Bash Themed Website",
    description:
      "My first personal website, built using HTML, JS, and CSS. Themed to emulate a Linux Bash terminal with command input.",
    image: pSiteV1,
    github: 'https://github.com/justin-xing/justin-xing.github.io',
  },
  {
    name: "FidgetFixr 2.0",
    description:
      "Built for DeltaHacks IX in a team of 4 using HTML, JS, and CSS. FidgetFixr 2.0 converts pdf notes into flashcards for easy review after lectures.",
    image: fidgetFixr, 
    github: 'https://github.com/justin-xing/FidgetFixr-2.0',
  },
  {
    name: "TaskFlask",
    description:
      "Currently in development. Using React and Django with Firebase to craft a todo app complete with authentication and sharing. Collaborating with and teaching younger dev.",
    image: todo, 
    github: 'https://github.com/justin-xing/todo',
  },
];

const Projects = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" style={{ margin: "6vh 0 0 0" }}>
        Projects
      </Typography>
      {projects.map((project) => <Project name={project.name} description={project.description} image={project.image} github={project.github}/>)}
    </div>
  );
};

export default Projects;
