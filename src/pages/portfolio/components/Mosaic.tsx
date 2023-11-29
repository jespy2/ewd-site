import { Dispatch, SetStateAction, ReactNode, PropsWithChildren } from "react";

import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

import { Modal } from "../../../components/modal/Modal";

import { itemData } from "../Portfolio.config";

import styles from "../Portfolio.module.scss";

function srcset(image: string, size: number, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	};
}

export const Mosaic = ({
	setModalIsOpen,
}: {
	setModalIsOpen: Dispatch<
		SetStateAction<{ children?: ReactNode } | undefined>
	>;
}) => {
	return (
		<Box className={styles.portfolioMosaic}>
			<ImageList variant='quilted' gap={20} cols={5}>
				{itemData.map((item) => (
					<ImageListItem
						key={item.img}
						cols={item.cols || 1}
						rows={item.rows || 1}
					>
						<img
							{...srcset(item.img, 121, item.rows, item.cols)}
							alt={item.title}
							loading='lazy'
						/>
						<Box className={styles.mosaicText}>
							<Box
								className={styles.openPortfolioModal}
								onClick={() => {
									setModalIsOpen(item.children as PropsWithChildren);
								}}
							>
								<OpenInFullIcon />
							</Box>
							{item.children}
						</Box>
						<ImageListItemBar
							className={styles.mosaicTitleBar}
							title={item.title}
							subtitle={item.subtitle}
							position='below'
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
};
