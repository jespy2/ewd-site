
import React from 'react';
import { Box, Link } from '@mui/material';

import { ContactForm } from '../../components/contact-form/ContactForm';

import LinkedInLogo from '../../images/logos/linkedin.png';
import GithubLogo from '../../images/logos/github.png';
import { Footer } from '../../components/footer/Footer';
import styles from './Contact.module.scss';


export const Contact = () => {
  return (
    <Box className={styles.homeContainer} >
      <Box className={styles.contactContainer} >
        <ContactForm />
      </Box>

      <Box className={styles.linksContainer}>
        <Link href='https://github.com/jespy2' target='_blank' ><img src={GithubLogo} /></Link>
        <Link href='https://www.linkedin.com/in/jamesespy/' target='_blank' ><img src={LinkedInLogo} /></Link>        
      </Box>
              
			<Footer page='contact' />
    </Box>
  );
};