import { useState, ReactNode } from "react";
import { Box, Typography } from "@mui/material";

import { HobbiesAccordian } from "./components/hobbies-accordian/HobbiesAccordian";
import { Footer } from "../../components/footer/Footer";
import { Modal } from "../../components/modal/Modal";
import { useScreenSize } from "../../config/customHooks";
import { IAccordianItemProps } from "./components/hobbies-accordian/HobbiesAccordian.config";

import styles from "./About.module.scss";

export const About = () => {
	const [infoHidden, setInfoHidden] = useState<boolean>(false);
	const [showMore, setShowMore] = useState<boolean>(false);
	const [modalIsOpen, setModalIsOpen] = useState<ReactNode>();

	const screenSize = useScreenSize();
	const screenIsSmall = screenSize.isSmall;

	const openModal = (modalContent: IAccordianItemProps) => {
		const { title, image, text } = modalContent;
		const modalContentNode = () => (
			<>
				<div className={styles.hobbiesModalCard}>
					<Typography variant='h2' display='block'>{title}</Typography>
					<div
						className={styles.hobbiesModalCardHero}
						style={{
							backgroundImage: `url(${image})`,
							height: title === 'Martial Arts' ? "60vh" : "50vh",
							width: title === 'Martial Arts' ? "60vw" : "90vh",
							backgroundPosition: title === 'Martial Arts' ? "unset" : "center"
						}}
					/>
					<div className={styles.hobbiesModalContent}>
						<Typography variant='body1' display='block'>{text}</Typography>
					</div>
				</div>
			</>
		);
		setModalIsOpen(modalContentNode);
	};

	const closeModal = () => {
		setModalIsOpen(undefined);
		setInfoHidden(false);
	};

	return (
		<div className={styles.aboutContainer}>
					
			{modalIsOpen && <Modal children={modalIsOpen} closeModal={closeModal} />}
			<Box className={styles.aboutSubContainer}>
				<HobbiesAccordian setInfoHidden={setInfoHidden} openModal={openModal} />
				{(!screenIsSmall || showMore) && (
					<Box
						className={styles.aboutInfoContainer}
						sx={{ display: infoHidden ? "none" : "block" }}
					>
						<Box className={styles.aboutInfoText}>
							<Typography variant='h5' display='block'>
								Beyond the world of coding, I'm a passionate individual with a
								diverse set of interests that play a significant role in shaping
								me as a software engineer.
							</Typography>
							<br className={styles.aboutInfoTextbreak} />
							<Typography variant='body1'>
								These hobbies aren't just pastimes; they're a part of who I am,
								and they influence the way I approach software engineering. They
								teach me balance, resilience, how to plan, adaptability and the
								importance of staying grounded. They remind me that the most
								exceptional solutions come from a well-rounded and passionate
								individual. Thanks for getting to know a bit more about me
								beyond the code!
							</Typography>
							{screenIsSmall && (
								<>
									<br />
									<br />
								</>
							)}
							{screenIsSmall && (
								<Box className={styles.aboutReadMoreButtonContainer}>
									<Typography
										variant='button'
										className={styles.aboutReadMoreButton}
										onClick={() => setShowMore(!showMore)}
									>
										show less
									</Typography>
								</Box>
							)}
						</Box>
					</Box>
				)}

				{screenIsSmall && !showMore && (
					<Box
						className={styles.aboutReadMoreContainer}
						sx={{ display: infoHidden && screenIsSmall ? "none" : "block" }}
					>
						<Box className={styles.aboutInfoText}>
							<Typography variant='h6' display='block'>
								Beyond the world of coding, I'm a passionate individual with a
								diverse set of interests that play a significant role in shaping
								me as a software engineer.
							</Typography>
							<br />
							<br />
							<Box className={styles.aboutReadMoreButtonContainer}>
								<Typography
									variant='button'
									className={styles.aboutReadMoreButton}
									onClick={() => setShowMore(!showMore)}
								>
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
