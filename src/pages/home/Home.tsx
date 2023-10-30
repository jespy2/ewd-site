import React from 'react';
import { Box, Link, Typography } from '@mui/material';

import { ReactComponent as EspyLogo } from '../../images/logos/espylogo.svg';
import styles from './Home.module.scss';


export const Home = () => {
  return (
    <div className={styles.homeContainer} >
      <Box className={styles.homeInfoContainer} >
        <Typography variant='body1' display="block" >
          Welcome to my site.  I'm a seasoned software engineer with a passion for crafting exceptional user experiences through full-stack development. My specialty lies in building captivating front-end applications that not only look great but also function seamlessly. What sets me apart is my unique blend of technical prowess and a profound understanding of business, communication, and empathetic team building.
        </Typography>
        <br/>
        <Typography variant='body1' display="block" >
          With years of hands-on experience in the software development world, I've honed my skills in creating user-friendly interfaces that leave a lasting impression. But my journey doesn't stop at the code; I've also navigated the complexities of business, from startups to established enterprises, and understand how software can drive growth and innovation.
        </Typography>
        <br/>
        <Typography variant='body1' >
          Communication is at the heart of every successful project, and I excel at bridging the gap between technical and non-technical stakeholders, ensuring everyone's voice is heard. I firmly believe that building great software is a team effort, and I've cultivated a collaborative, empathetic approach to team building that fosters creativity and drives results.
        </Typography>
        <br/>
        <Typography variant='body1' >
          In a rapidly evolving tech landscape, you need someone who can translate your vision into elegant, functional, and scalable front-end solutions while seamlessly integrating with your business objectives. I'm that person, and I'm here to help your team shine. Let's create something incredible together.
        </Typography>
      </Box>
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
        <Link href="/portfolio"  className={styles.navLink} variant='h6' underline='none' >PORTFOLIO</Link>
        <Link href="/contact" className={styles.navLink} variant='h6' underline='none' >CONTACT</Link>
      </Box>
    </div>
  );
};