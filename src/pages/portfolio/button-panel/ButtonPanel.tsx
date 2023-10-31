import React, { Dispatch, SetStateAction } from "react";
import { Box, Typography } from "@mui/material";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";

import GomenuLogo from "../../../images/logos/gomenulogo.svg";
import StorialLogo from "../../../images/logos/storiallogo.png";
import CityPickerLogo from "../../../images/logos/citypickerlogo.svg";
import styles from "../Portfolio.module.scss";

interface IProps {
  setOpenResume: Dispatch<SetStateAction<boolean>>
  setOpenGoMenu: Dispatch<SetStateAction<boolean>>
  setOpenStorial: Dispatch<SetStateAction<boolean>>
  setOpenCityPicker: Dispatch<SetStateAction<boolean>>
}

export const ButtonPanel = (props: IProps) => {
  const { setOpenResume, setOpenGoMenu, setOpenStorial, setOpenCityPicker } = props;
	return (
		<Box className={styles.linksContainer}>
			<Box
				className={styles.whiteLogoBkgrd}
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
				onClick={() => {
					setOpenResume(true);
					setOpenGoMenu(false);
					setOpenStorial(false);
					setOpenCityPicker(false);
				}}
			>
				<DescriptionTwoToneIcon
					sx={{
						height: "4rem",
						width: "4rem",
						color: "black",
					}}
				/>
				<Typography variant='body2' color={"black"} fontSize={10}>
					RESUME
				</Typography>
			</Box>

			<Box
				className={styles.whiteLogoBkgrd}
				onClick={() => {
					setOpenResume(false);
					setOpenGoMenu(true);
					setOpenStorial(false);
					setOpenCityPicker(false);
				}}
			>
				<img
					src={GomenuLogo}
					alt='gomenu app'
					style={{ width: "90%", height: "90%", margin: "5px auto" }}
				/>
			</Box>
			<Box
				className={styles.whiteLogoBkgrd}
				onClick={() => {
					setOpenResume(false);
					setOpenGoMenu(false);
					setOpenStorial(true);
					setOpenCityPicker(false);
				}}
			>
				<img
					src={StorialLogo}
					alt='storial app'
					style={{ width: "90%", height: "90%", margin: "5px auto" }}
				/>
			</Box>
			<Box
				className={styles.whiteLogoBkgrd}
				onClick={() => {
					setOpenResume(false);
					setOpenGoMenu(false);
					setOpenStorial(false);
					setOpenCityPicker(true);
				}}
			>
				<img
					src={CityPickerLogo}
					alt='city picker app'
					style={{ width: "90%", height: "90%", margin: "5px auto" }}
				/>
			</Box>
		</Box>
	);
};
