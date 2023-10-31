import React, { Dispatch, SetStateAction} from 'react';
import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { IModalProps } from './Modal.config';


import styles from './Modal.module.scss';

interface IProps {
  modalProps: IModalProps,
  setOpenGreeting: Dispatch<SetStateAction<boolean>>
  setModalState?: Dispatch<SetStateAction<boolean>>
}

export const Modal = (props: IProps) => {
  const { modalProps, setOpenGreeting, setModalState } = props;

  return (
    <Box className={styles[String(modalProps.class)]} >
      <Box
        className={styles.closeContainer}
        onClick={() => {
          setModalState && setOpenGreeting(true)
          setModalState && setModalState(false)
        }}
      >
        <CloseIcon />
      </Box>
      {modalProps.children}
    </Box>
  );
};