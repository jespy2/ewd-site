import { useState } from 'react';
import { Box, Link, Typography } from '@mui/material';

import { Footer } from '../../components/footer/Footer';
import { useScreenSize } from '../../config/customHooks';
import styles from './Home.module.scss';


export const Home = () => {
  const [showMore, setShowMore] = useState<boolean>(false)
  
	const screenSize = useScreenSize();
  const screenIsSmall = screenSize.isSmall;

  const buttonBackgroundStyles = {
    backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, .2))'
  };
  
  return (
    <div className={styles.homeContainer} >
      {(!screenIsSmall || showMore) &&
        <Box className={styles.homeInfoContainer} >
          <Box className={styles.homeInfoText}>
            <Typography variant='h6' display="block" >
              Welcome to my site.  I'm a seasoned software engineer with a passion for crafting exceptional user experiences through full-stack development.
            </Typography>
            <br/>
            <Typography variant='body1' display="block" >
              My specialty lies in building captivating front-end applications that not only look great but also function seamlessly because they are built on elegantly designed backends. What sets me apart is my unique blend of technical prowess and a profound understanding of business, communication, and empathetic team building.
            </Typography>
            <br/>
            <Typography variant='body1' display="block" >
              With years of hands-on experience in the software development world, I've honed my skills in creating user-friendly interfaces that leave a lasting impression served by well thought out, reliable backends. But my journey doesn't stop at the code; I've also navigated the complexities of business, from startups to established enterprises, and understand how software can drive growth and innovation.
            </Typography>
            <br/>
            <Typography variant='body1' >
              Communication is at the heart of every successful project, and I excel at bridging the gap between technical and non-technical stakeholders, ensuring everyone's voice is heard. I firmly believe that building great software is a team effort, and I've cultivated a collaborative, empathetic approach to team building that fosters creativity and drives results.
            </Typography>
            <br/>
            <Typography variant='body1' >
              In a rapidly evolving tech landscape, you need someone who can translate your vision into elegant, functional, and scalable solutions while seamlessly integrating with your business objectives. I'm that person, and I'm here to help your team shine. Let's create something incredible together.
            </Typography>
            <br/>
            <br />
            <Box className={styles.homeReadMoreButtonContainer} sx={buttonBackgroundStyles}>
              <Typography variant='button' className={styles.homeReadMoreButton}  onClick={() => setShowMore(!showMore) } >
                show less
              </Typography>
            </Box>  
          </Box>
        </Box>
      }

  {(screenIsSmall && !showMore) &&
        <Box className={styles.homeReadMoreContainer} >
          <Box className={styles.homeInfoText}>
            <Typography variant='h6' display="block" >
              Welcome to my site.  I'm a seasoned software engineer with a passion for crafting exceptional user experiences through full-stack development.
            </Typography>
            <br/>
            <br />
            <Box className={styles.homeReadMoreButtonContainer}>
              <Typography variant='button' className={styles.homeReadMoreButton}  onClick={() => setShowMore(!showMore) } >
                read more
              </Typography>
            </Box> 
          </Box>
        </Box>
      }
      
      <Footer page='home' />
    </div>
  );
};