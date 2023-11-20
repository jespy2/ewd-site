import { Box } from '@mui/material';

import { SideBar } from './components/SideBar';
import { Mosaic } from './components/Mosaic';
import { Footer } from '../../components/footer/Footer';

import styles from './Portfolio.module.scss';

export const Portfolio = () => {

  return (
    <Box className={styles.portfolioContainer} >
      <Box className={styles.portfolioBackgroundFilter} ></Box>
      <SideBar />
      <Mosaic />      
      <Footer page='portfolio' />
    </Box>
  );
};