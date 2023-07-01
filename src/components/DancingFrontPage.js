import React from 'react';
import RobloxDance from './RobloxDance';
import IntroTextbox from './IntroTextbox';


const DancingFrontPage = (props) => {
  return (
    <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <RobloxDance/>
      <IntroTextbox scrollAboutHandler={props.scrollAboutHandler}/>
      <RobloxDance/>
    </div>
  );
}

export default DancingFrontPage;