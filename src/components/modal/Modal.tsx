import { PropsWithChildren, ReactNode } from "react";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FocusTrap from "focus-trap-react";

import styles from './Modal.module.scss'

interface IModalProps {
	children: PropsWithChildren | ReactNode | ReactNode[];
	closeModal: () => void;
}

export const Modal = (props: IModalProps ) => {
	const { children, closeModal } = props;

	return (
		<FocusTrap>
			<Box className={styles.modal}>
				<Box className={styles.modalContent}>
					<Box
						className={styles.closeContainer}
						onClick={() => closeModal()}

						onKeyDown={e => e.key === 'Enter' ? closeModal() : ''}
						tabIndex={0}
					>
						<CloseIcon
							aria-label="Close the modal"
							role="link"
							focusable={true}
							aria-hidden={false}
						/>
					</Box>
					{children as ReactNode}
				</Box>
			</Box>
			</FocusTrap>
	);
};
