import React from 'react';
import { Box, Link, Typography } from "@mui/material";

import { ReactComponent as EspyLogo } from "../../images/logos/espylogo.svg";

import styles from './Footer.module.scss';

export const Footer = ({ page }: {page: string}) => {
  return (
    <>
    <Link className={styles.homeLink} href='/' aria-label="Visit the Home page to be introduced to James" >
      <Box className={styles.espylogo}>
					<EspyLogo />
				<Box className={styles.nameContainer}>
					<Typography variant='h2'>james espy</Typography>
					<Typography variant='h5'>SOFTWARE ENGINEER</Typography>
				</Box>
			</Box>
				</Link>
			<Box className={styles.navContainer}>
        {page === 'about'
          ? < Typography className={styles.navLink} variant='h6' sx={{ color: 'yellow' }} >
              ABOUT
            </Typography>
          : <Link href='/about' className={styles.navLink} variant='h6' underline='none' aria-label="Visit the About page to learn more about James" >
              ABOUT
            </Link>
        }

        {page === 'portfolio'
          ? < Typography className={styles.navLink} variant='h6' sx={{ color: 'yellow' }} >
              PORTFOLIO
            </Typography>
          : <Link href='/portfolio' className={styles.navLink} variant='h6' underline='none' aria-label="Visit the Portfolio page to learn more about James work and experience" >
              PORTFOLIO
            </Link>
        }

        {page === 'contact'
          ? < Typography className={styles.navLink} variant='h6' sx={{ color: 'yellow' }} >
              CONTACT
            </Typography>
          : <Link href='/contact' className={styles.navLink} variant='h6' underline='none' aria-label="Visit the Contact page to get in touch with James" >
              CONTACT
            </Link>
        }
			</Box>
    </>
  )
}