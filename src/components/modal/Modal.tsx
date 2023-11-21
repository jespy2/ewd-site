import { PropsWithChildren, ReactNode } from "react";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import styles from './Modal.module.scss'

interface IModalProps {
	children: PropsWithChildren | ReactNode | ReactNode[];
	closeModal: () => void;
}

export const Modal = (props: IModalProps ) => {
	const { children, closeModal } = props;

	return (
		<Box className={styles.modal}>
			<Box className={styles.modalContent}>
				<Box
					className={styles.closeContainer}
					onClick={() => closeModal()}
				>
					<CloseIcon />
				</Box>
				{children as ReactNode}
			</Box>
		</Box>
	);
};
