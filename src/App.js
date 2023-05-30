import React from 'react';
import './App.css';
import '@fontsource/roboto/400.css';
import Header from './components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DancingFrontPage from './components/DancingFrontPage';
import About from './components/About';
import Techstack from './components/Techstack';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Header/>
        <DancingFrontPage/>
        <About/>
        <Techstack/>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
