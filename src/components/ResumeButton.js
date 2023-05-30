import React from "react";
import ArticleIcon from '@mui/icons-material/Article';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


const ResumeButton = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconButton href="https://github.com/justin-xing" size="large">
        <ArticleIcon fontSize="inherit" />
        <Typography variant="h6" marginLeft="5px">
          Resume
        </Typography>
      </IconButton>
    </div>
  );
};

export default ResumeButton;
