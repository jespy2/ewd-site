import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

import { Modal } from './modal/Modal';
import { modalConfig } from './modal/Modal.config';

import CityPickerLogo from '../../images/logos/citypickerlogo.svg';
import { Footer } from '../../components/footer/Footer';
import styles from './Portfolio.module.scss';



export const Portfolio = () => {
  const [openResume, setOpenResume] = useState(false);
  const [openCityPicker, setOpenCityPicker] = useState(false);

  return (
    <Box className={styles.homeContainer} >
      {openResume &&
        <Modal modalProps={modalConfig.resume} setModalState={setOpenResume} />
      }
      {openCityPicker &&
        <Modal modalProps={modalConfig.city_picker} setModalState={setOpenCityPicker} />
      }
      <Box className={styles.linksContainer}>
        <Typography
          className={styles.portfolioItem}
          variant='h5'
          color={'white'}
          onClick={() => {
            setOpenResume(true)
            setOpenCityPicker(false)
          }}
        >
          Resume
        </Typography>
        <Box
          className={styles.whiteLogoBkgrd}
          onClick={() => {
            setOpenResume(false)
            setOpenCityPicker(true)
          }}>
          <img src={CityPickerLogo} alt='city picker app' />
        </Box>
      </Box>
      <Footer page='portfolio' />
    </Box>
  );
};