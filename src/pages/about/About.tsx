import React from "react";
import { Box, Link, Typography } from "@mui/material";

import { HobbiesAccordian } from "./hobbies-accordian/HobbiesAccordian";
import { ReactComponent as EspyLogo } from "../../images/logos/espylogo.svg";
import styles from "./About.module.scss";

export const About = () => {
	return (
    <div className={styles.homeContainer}>
      <HobbiesAccordian />
			<Box className={styles.aboutInfoContainer}>
				<Typography variant='body1' display='block'>
					Welcome to the 'Hobbies' section of my portfolio site! Beyond the
					world of coding, I'm a passionate individual with a diverse set of
					interests that play a significant role in shaping me as a software
					engineer.
				</Typography>
				<br />
				<Typography variant='body1'>
					These hobbies aren't just pastimes; they're a part of who I am, and
					they influence the way I approach software engineering. They teach me
					balance, resilience, and the importance of staying grounded. They
					remind me that the most exceptional solutions come from a well-rounded
					and passionate individual. Thanks for getting to know a bit more about
					me beyond the code!
				</Typography>
			</Box>
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
				<Typography className={styles.navLink} variant='h6' sx={{color: 'yellow'}} >
					ABOUT
				</Typography>
				<Link href='/portfolio' className={styles.navLink} variant='h6' underline='none' >
					PORTFOLIO
				</Link>
				<Link href='/contact' className={styles.navLink} variant='h6' underline='none' >
					CONTACT
				</Link>
			</Box>
		</div>
	);
};
