import React from 'react';
import { Box } from '@mui/material';

import { Footer } from '../../components/footer/Footer';
import styles from './Portfolio.module.scss';


export const Portfolio = () => {
  return (
    <Box className={styles.homeContainer} >
      
      <Footer page='portfolio' />
    </Box>
  );
};