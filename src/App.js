import React from 'react';
import './App.css';
import Home from './Pages/Home'
import {ThemeProvider} from "@material-ui/core/styles"
import Theme from "./Theme/Theme"

function App() {
  return (
    <ThemeProvider theme={Theme}>
        <div className="App">
          <Home />
        </div>
    </ThemeProvider>
  );
}

export default App;
