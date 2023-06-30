import React from 'react';
import Typography from "@mui/material/Typography";
import javascriptImage from '../assets/stackIcons/javascript.svg';
import htmlImage from '../assets/stackIcons/html.svg';
import cssImage from '../assets/stackIcons/css.svg';
import reactImage from '../assets/stackIcons/react.svg';
import pythonImage from '../assets/stackIcons/python.svg';
import djangoImage from '../assets/stackIcons/django.svg';
import sqlImage from '../assets/stackIcons/sql.svg';

const Techstack = () => {
  return(
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Typography variant='h2' style={{margin: '0 0 3vh 0'}}>My Techstack</Typography>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={htmlImage} alt='HTML'style={{width: '7vw', height: 'auto', margin: '10px'}}/>
        <img src={cssImage} alt='CSS' style={{width: '7vw', height: 'auto', margin: '10px'}}/>
        <img src={javascriptImage} alt='Javascript' style={{width: '7vw', height: 'auto', margin: '10px'}}/>
        <img src={reactImage} alt='React' style={{width: '7vw', height: 'auto', margin: '10px'}}/>
        <img src={pythonImage} alt='Python' style={{width: '7vw', height: 'auto', margin: '10px'}}/>
        <img src={djangoImage} alt='Django' style={{width: '7vw', height: 'auto', margin: '10px'}}/>
        <img src={sqlImage} alt='SQL' style={{width: '7vw', height: 'auto', margin: '10px'}}/>
        
      </div>
    </div>
  );
}

export default Techstack;