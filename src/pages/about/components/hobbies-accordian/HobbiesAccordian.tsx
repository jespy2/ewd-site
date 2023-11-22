import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import { Accordian } from "./Accordian";
import { IAccordianProps } from "./HobbiesAccordian.config";

import styles from "./HobbiesAccordian.module.scss";

export const HobbiesAccordian = (props: IAccordianProps) => {
	const { setInfoHidden, openModal } = props;

	return (
		<>	
			<Box className={styles.hobbiesAccordianContainer}>
				<Accordian setInfoHidden={setInfoHidden} openModal={openModal} />
			</Box>
		</>
	);
};
