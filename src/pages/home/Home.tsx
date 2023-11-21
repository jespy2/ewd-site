import { ReactNode, useState } from "react";
import { Box, Typography } from "@mui/material";

import { Modal } from "../../components/modal/Modal";
import { HomeInfoText } from "./components/HomeInfoText";
import { HomeInfoTitles } from "./components/HomeInfoTitles";
import { HomeShowLess } from "./components/HomeShowLess";
import { HomeShowMore } from "./components/HomeShowMore";
import { Footer } from "../../components/footer/Footer";
import { useScreenSize } from "../../config/customHooks";
import styles from "./Home.module.scss";

export const Home = () => {
	const [showMore, setShowMore] = useState<boolean>(false);
	const [modalIsOpen, setModalIsOpen] = useState<ReactNode>();

	const screenSize = useScreenSize();
	const screenIsSmall = screenSize.isSmall;

	const modalContent = (
		<>
			<HomeInfoTitles />
			<HomeInfoText />
		</>
	) as ReactNode;

	const openModal = () => {
		setModalIsOpen(modalContent);
	};

	const closeModal = () => {
		setModalIsOpen(undefined);
	};

	const handleShowMore = () => {setShowMore(!showMore)};

	const buttonBackgroundStyles = {
		backgroundImage:
			"linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, .2))",
	};

	return (
		<div className={styles.homeContainer}>
			{modalIsOpen && (
				<Modal
					children={modalIsOpen}
					closeModal={closeModal}
				/>
			)}
			{(!screenIsSmall || showMore) && (
				<Box className={styles.homeInfoModal}>
					<Box className={styles.homeInfoContainer}>
						<HomeInfoTitles />
						<br className={styles.titleLineBreak} />
						<Box className={styles.homeInfoBodyContainer}>
							<HomeInfoText openModal={openModal} modalIsOpen={modalIsOpen} />
              <Box className={styles.profilePic}></Box>
            </Box>
						{screenIsSmall && (
							<>
								<br />
								<br />
							</>
						)}
						{screenIsSmall && <HomeShowLess handleShowMore={handleShowMore} />}
					</Box>
				</Box>
			)}

			{(screenIsSmall && !showMore) && 
				<HomeShowMore handleShowMore={handleShowMore} />
			}

        <Footer page='home' />
		</div>
	);
};
