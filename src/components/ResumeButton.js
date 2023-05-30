import React from "react";
import ArticleIcon from '@mui/icons-material/Article';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import resume from '../assets/Resume.pdf'


const ResumeButton = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconButton href={resume} target='_blank' size="large">
        <ArticleIcon fontSize="inherit" />
        <Typography variant="h6" marginLeft="5px">
          Resume
        </Typography>
      </IconButton>
    </div>
  );
};

export default ResumeButton;
