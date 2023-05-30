import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'

const IntroTextbox = () => {

  return (
    <div style={{flexDirection: 'column', alignItems: 'center'}}>
      <Typography variant='h4' style={{textAlign: 'center'}}>Hi! I'm</Typography> 
      <Typography variant='h1'>Justin Xing</Typography>
      <Typography variant='h6' style={{textAlign: 'center'}}>I love working with <b>code</b> and <b>people</b>.</Typography>
      <Box textAlign='center'>
        <Button variant='outlined' style={{color: 'white', borderColor: 'white', marginTop: '3vh'}}>Learn More</Button>
      </Box>
    </div>
  );
}

export default IntroTextbox;