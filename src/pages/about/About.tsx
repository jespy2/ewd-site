import { useState } from "react";
import { Box, Typography } from "@mui/material";

import { HobbiesAccordian } from "./hobbies-accordian/HobbiesAccordian";
import { Footer } from "../../components/footer/Footer";
import { useScreenSize } from "../../config/customHooks";
import styles from "./About.module.scss";

export const About = () => {
	const [infoHidden, setInfoHidden] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false)

	const screenSize = useScreenSize();
	const screenIsSmall = screenSize.isSmall;

	return (
		<div className={styles.aboutContainer}>
			<Box className={styles.aboutSubContainer} >
			<HobbiesAccordian setInfoHidden={setInfoHidden} />
			{(!screenIsSmall || showMore) && 
				<Box
					className={styles.aboutInfoContainer}
					sx={{ display: infoHidden ? "none" : "block" }}
				>
					<Box className={styles.aboutInfoText}>
						<Typography variant='h5' display='block'>
							Beyond the
							world of coding, I'm a passionate individual with a diverse set of
							interests that play a significant role in shaping me as a software
							engineer.
						</Typography>
						<br className={styles.aboutInfoTextbreak} />
						<Typography variant='body1'>
							These hobbies aren't just pastimes; they're a part of who I am,
							and they influence the way I approach software engineering. They
							teach me balance, resilience, how to plan, adaptability and the
							importance of staying grounded. They remind me that the most
							exceptional solutions come from a well-rounded and passionate
							individual. Thanks for getting to know a bit more about me beyond
							the code!
						</Typography>
            {screenIsSmall && <><br/><br /></>}
						{screenIsSmall &&
							<Box className={styles.aboutReadMoreButtonContainer} >
								<Typography variant='button' className={styles.aboutReadMoreButton} onClick={() => setShowMore(!showMore)} >
									show less
								</Typography>
							</Box>
						}
					</Box>
				</Box>
			}

			{(screenIsSmall && !showMore) && (
				<Box
					className={styles.aboutReadMoreContainer}
					sx={{ display: infoHidden && screenIsSmall ? "none" : "block" }}
				>
					<Box className={styles.aboutInfoText}>
						<Typography variant='h6' display='block'>
							Welcome to the 'Hobbies' section of my portfolio site! Beyond the
							world of coding, I'm a passionate individual with a diverse set of
							interests that play a significant role in shaping me as a software
							engineer.
						</Typography>
						<br />
						<br />
            <Box className={styles.aboutReadMoreButtonContainer} >
							<Typography variant='button' className={styles.aboutReadMoreButton} onClick={() => setShowMore(!showMore)} >
								read more
							</Typography>
						</Box>
					</Box>
				</Box>
				)}
				</Box>
			<Footer page='about' />
		</div>
	);
};
