import React, { useRef } from 'react';
import './App.css';
import '@fontsource/roboto/400.css';
import Header from './components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DancingFrontPage from './components/DancingFrontPage';
import About from './components/About';
import Techstack from './components/Techstack';
import Projects from './components/Projects';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {

  const scrollAboutHandler = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const scrollStackHandler = () => {
    stackRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const aboutRef = useRef(null);
  const stackRef = useRef(null)

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Header/>
        <DancingFrontPage scrollAboutHandler={scrollAboutHandler}/>
        <div ref={aboutRef}>
          <About scrollStackHandler={scrollStackHandler}/>
        </div>
        <div ref={stackRef}>
          <Techstack/>
        </div>
        <Projects />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
