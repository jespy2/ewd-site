import { PropsWithChildren, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

import { Modal } from "../../components/modal/Modal";
import { HomeInfoText } from "./components/HomeInfoText";
import { HomeInfoTitles } from "./components/HomeInfoTitles";
import { Footer } from "../../components/footer/Footer";
import { useScreenSize } from "../../config/customHooks";
import styles from "./Home.module.scss";

export const Home = () => {
	const [showMore, setShowMore] = useState<boolean>(false);
	const [modalIsOpen, setModalIsOpen] = useState<PropsWithChildren>();

	const closeModal = () => {
		setModalIsOpen(undefined);
	};

	const screenSize = useScreenSize();
	const screenIsSmall = screenSize.isSmall;

	const modalContent = (
		<>
			<HomeInfoTitles />
			<br className={styles.titleLineBreak} />
			<HomeInfoText />
			<Box className={styles.profilePic}></Box>
		</>
	)

	const buttonBackgroundStyles = {
		backgroundImage:
			"linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, .2))",
	};

	return (
		<div className={styles.homeContainer}>
			{modalIsOpen && (
				<Modal
					children={modalIsOpen as PropsWithChildren}
					closeModal={closeModal}
				/>
			)}
			{(!screenIsSmall || showMore) && (
				<Box className={styles.homeInfoModal}>
					<Box className={styles.homeInfoContainer}>
						<HomeInfoTitles />
						<br className={styles.titleLineBreak} />
						<Box className={styles.homeInfoBodyContainer}>
						<Box
								className={styles.openPortfolioModal}
								onClick={() => {setModalIsOpen({modalContent} as PropsWithChildren)}}
							>
								<OpenInFullIcon />
							</Box>
							<HomeInfoText />
              <Box className={styles.profilePic}></Box>
            </Box>
						{screenIsSmall && (
							<>
								<br />
								<br />
							</>
						)}
						{screenIsSmall && (
							<Box
								className={styles.homeReadMoreButtonContainer}
								sx={buttonBackgroundStyles}
							>
								<Typography
									variant='button'
									className={styles.homeReadMoreButton}
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
				<Box className={styles.homeReadMoreContainer}>
					<Box className={styles.homeReadMoreText}>
						<HomeInfoTitles />
						<br />
						<br />
						<Box className={styles.homeReadMoreButtonContainer}>
							<Typography
								variant='button'
								className={styles.homeReadMoreButton}
								onClick={() => setShowMore(!showMore)}
							>
								read more
							</Typography>
						</Box>
					</Box>
				</Box>
			)}

        <Footer page='home' />
		</div>
	);
};
