import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const GithubButton = () => {
  return (
  <div style={{display: 'flex', alignItems: 'center'}}>
    <IconButton href='https://github.com/justin-xing' target='_blank' size='large'>
      <GitHubIcon fontSize='inherit'/>
      <Typography variant='h6' marginLeft='5px'>Github</Typography>
    </IconButton>
  </div>);
}

export default GithubButton;