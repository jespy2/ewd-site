
import React from 'react';
import { Box } from '@mui/material';

import LinkedInLogo from '../../images/logos/linkedin.png';
import GithubLogo from '../../images/logos/github-mark-white.png';
import { Footer } from '../../components/footer/Footer';
import styles from './Contact.module.scss';


export const Contact = () => {
  return (
    <Box className={styles.homeContainer} >
      <Box className={styles.linksContainer}>
        <img src={GithubLogo} />
        <img src={LinkedInLogo} />
      </Box>
              
			<Footer page='contact' />
    </Box>
  );
};