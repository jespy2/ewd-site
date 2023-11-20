import { PropsWithChildren, useState } from 'react';
import { Box } from '@mui/material';

import { SideBar } from './components/SideBar';
import { Mosaic } from './components/Mosaic';
import { Modal } from './components/modal/Modal';
import { Footer } from '../../components/footer/Footer';

import { itemData } from './Portfolio.config';

import styles from './Portfolio.module.scss';

export const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState<PropsWithChildren>();

  const closeModal = () => {
    setModalIsOpen(undefined)
  }

  return (
    <Box className={styles.portfolioContainer} >
      <Box className={styles.portfolioBackgroundFilter} ></Box>
      <SideBar />
      <Mosaic setModalIsOpen={setModalIsOpen} />  
      {modalIsOpen && 
        < Modal children={modalIsOpen as PropsWithChildren} closeModal={closeModal} />
      }    
      <Footer page='portfolio' />
    </Box>
  );
};