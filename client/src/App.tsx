import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './style/theme';
import Home from './components/Home';
import HeaderBar from './components/HeaderBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HeaderBar />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
