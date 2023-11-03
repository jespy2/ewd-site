import { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

import { HobbiesAccordian } from "./hobbies-accordian/HobbiesAccordian";
import { Footer } from "../../components/footer/Footer";
import styles from "./About.module.scss";

export const About = () => {
	const [infoHidden, setInfoHidden] = useState<boolean>(false)

	const screenIsSmall = useMediaQuery('(max-width:600px)');
	return (
    <div className={styles.homeContainer}>
      <HobbiesAccordian setInfoHidden={setInfoHidden} />
			<Box className={styles.aboutInfoContainer} sx={{ display: infoHidden && screenIsSmall ? 'none' : 'block' }}>
				<Box className={styles.aboutInfoText}>
				<Typography variant='body1' display='block'>
					Welcome to the 'Hobbies' section of my portfolio site! Beyond the world of coding, I'm a passionate individual with a diverse set of interests that play a significant role in shaping me as a software engineer.
				</Typography>
				<br />
				<Typography variant='body1'>
					These hobbies aren't just pastimes; they're a part of who I am, and they influence the way I approach software engineering. They teach me balance, resilience, how to plan, adaptability and the importance of staying grounded. They remind me that the most exceptional solutions come from a well-rounded and passionate individual. Thanks for getting to know a bit more about me beyond the code!
					</Typography>
					</Box>
			</Box>
			<Footer page='about' />
		</div>
	);
};
