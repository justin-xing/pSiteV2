import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const GithubButton = (props) => {
  return (
  <div style={{display: 'flex', alignItems: 'center'}}>
    <IconButton href={props.link} target='_blank' size='large'>
      <GitHubIcon fontSize='inherit'/>
      <Typography variant='h6' marginLeft='5px'>{props.text}</Typography>
    </IconButton>
  </div>);
}

export default GithubButton;