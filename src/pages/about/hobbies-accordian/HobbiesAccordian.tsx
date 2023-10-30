import React from "react";
import { Box } from "@mui/material";

import { Accordian } from "./Accordian";
import styles from "./HobbiesAccordian.module.scss";

export const HobbiesAccordian = () => {
	return (
		<Box className={styles.hobbiesAccordianContainer}>
			<Accordian />
		</Box>
	);
};
