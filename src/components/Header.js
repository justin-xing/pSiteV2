import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../assets/Stare.png';
import GithubButton from './GithubButton';
import ResumeButton from './ResumeButton';
import Button from '@mui/material/Button';

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo(0,0);
  }

  return (
      <AppBar>
        <Toolbar style={{display:'flex', justifyContent:"space-between", width:'100%'}}>
          <Button variant='text' style={{display:'flex', alignItems: 'center', color: 'white'}} onClick={scrollToTop}>
            <img src={logo} alt='logo' style={{ height: '60px', marginTop: '10px'}}></img>
            <Typography variant='h4'>Justin Xing</Typography>
          </Button>
          <div style={{display:'flex', alignItems: 'center'}}>
            <ResumeButton/>
            <GithubButton link='https://github.com/justin-xing' text='Github'/>
          </div>
        </Toolbar>
      </AppBar>
  );
}

export default Header;