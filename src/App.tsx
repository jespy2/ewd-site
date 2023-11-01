import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Portfolio } from './pages/portfolio/Portfolio';
import { Contact } from './pages/contact/Contact';

import styles from './App.module.scss';

declare module '@mui/material/styles' {
	interface Theme {
	palette: {
		primary: {
			light: string;
			main: string;
			dark: string;
			contrastText: string;
		},
		secondary: {
			light: string;
			main: string;
			dark: string;
			contrastText: string;
		},
	},
}
}

const theme = createTheme({
	components: {
		MuiContainer: {
			styleOverrides: {
				root: {
					padding: '0',
					margin: '0',
					height: '100%'
				}
			}
		}
	},
  palette: {
    primary: {
      light: '#bdebf0',
      main: '#ffff',
      dark: '#495f5f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#edc5be',
      main: '#00000',
      dark: '#4b1d20',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className={styles.app}>
      <Router>
						<section>
							<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route path='/portfolio' element={<Portfolio />} />
							<Route path='/contact' element={<Contact />} />
            </Routes>
        </section>
      </Router>      
      </div>
    </ThemeProvider>
  );
}

export default App;
