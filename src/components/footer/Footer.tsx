import React from 'react';
import { Box, Link, Typography } from "@mui/material";

import { ReactComponent as EspyLogo } from "../../images/logos/espylogo.svg";

import styles from './Footer.module.scss';

export const Footer = ({ page }: {page: string}) => {
  return (
    <>
      <Box className={styles.espylogo}>
				<Link href='/'>
					<EspyLogo />
				</Link>
				<Box className={styles.nameContainer}>
					<Typography variant='h2'>james espy</Typography>
					<Typography variant='h5'>SOFTWARE ENGINEER</Typography>
				</Box>
			</Box>
			<Box className={styles.navContainer}>
        {page === 'about'
          ? < Typography className={styles.navLink} variant='h6' sx={{ color: 'yellow' }} >
              ABOUT
            </Typography>
          : <Link href='/about' className={styles.navLink} variant='h6' underline='none' >
              ABOUT
            </Link>
        }

        {page === 'portfolio'
          ? < Typography className={styles.navLink} variant='h6' sx={{ color: 'yellow' }} >
              PORTFOLIO
            </Typography>
          : <Link href='/portfolio' className={styles.navLink} variant='h6' underline='none' >
              PORTFOLIO
            </Link>
        }

        {page === 'contact'
          ? < Typography className={styles.navLink} variant='h6' sx={{ color: 'yellow' }} >
              CONTACT
            </Typography>
          : <Link href='/contact' className={styles.navLink} variant='h6' underline='none' >
              CONTACT
            </Link>
        }
			</Box>
    </>
  )
}