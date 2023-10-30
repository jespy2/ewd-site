
import React from 'react';
import { Box, Link,  Typography } from '@mui/material';

import { ReactComponent as EspyLogo } from '../../images/logos/espylogo.svg';
import styles from './Contact.module.scss';


export const Contact = () => {
  return (
    <div className={styles.homeContainer} >
      <Box className={styles.espylogo} >
        <Link href="/" >
          <EspyLogo />
        </Link>
        <Box className={styles.nameContainer}>
          <Typography variant='h2' >james espy</Typography>
          <Typography variant='h5' >SOFTWARE ENGINEER</Typography>
        </Box>
      </Box>
      <Box className={styles.navContainer}>
        <Link href="/about" className={styles.navLink} variant='h6' underline='none' >ABOUT</Link>
        <Link href="/portfolio" className={styles.navLink} variant='h6' underline='none' >PORTFOLIO</Link>
        <Typography className={styles.navLink} variant='h6' sx={{color: 'yellow'}} >CONTACT</Typography>
      </Box>
    </div>
  );
};