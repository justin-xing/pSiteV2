import React from 'react';
import RobloxDance from './RobloxDance';
import IntroTextbox from './IntroTextbox';


const DancingFrontPage = () => {
  return (
    <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <RobloxDance/>
      <IntroTextbox/>
      <RobloxDance/>
    </div>
  );
}

export default DancingFrontPage;