import { Dispatch, SetStateAction} from "react";
import { Box } from "@mui/material";

import { Accordian } from "./Accordian";
import styles from "./HobbiesAccordian.module.scss";

export const HobbiesAccordian = ({setInfoHidden}: {setInfoHidden: Dispatch<SetStateAction<boolean>>}) => {
	return (
		<Box className={styles.hobbiesAccordianContainer}>
			<Accordian setInfoHidden={setInfoHidden} />
		</Box>
	);
};
