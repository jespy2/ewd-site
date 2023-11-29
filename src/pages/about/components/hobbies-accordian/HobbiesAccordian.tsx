import { Box } from "@mui/material";

import { Accordian } from "./Accordian";
import { IAccordianProps } from "./HobbiesAccordian.config";

import styles from "./HobbiesAccordian.module.scss";

export const HobbiesAccordian = (props: IAccordianProps) => {
	const { setInfoHidden, openModal, infoHidden } = props;

	return (
		<>	
			<Box className={infoHidden ? styles.hobbiesAccordianContainerInfoHidden : styles.hobbiesAccordianContainer}>
				<Accordian setInfoHidden={setInfoHidden} openModal={openModal} infoHidden={infoHidden} />
			</Box>
		</>
	);
};
