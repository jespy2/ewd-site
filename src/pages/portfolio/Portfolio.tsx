import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';

import { Modal } from './modal/Modal';
import { modalConfig } from './modal/Modal.config';
import { ButtonPanel } from './button-panel/ButtonPanel';
import { Footer } from '../../components/footer/Footer';

import GomenuLogo from '../../images/logos/gomenulogo.svg';
import StorialLogo from '../../images/logos/storiallogo.png';
import CityPickerLogo from '../../images/logos/citypickerlogo.svg';

import styles from './Portfolio.module.scss';



export const Portfolio = () => {
  const [openResume, setOpenResume] = useState(false);
  const [openGoMenu, setOpenGoMenu] = useState(false);
  const [openStorial, setOpenStorial] = useState(false);
  const [openCityPicker, setOpenCityPicker] = useState(false);

  return (
    <Box className={styles.homeContainer} >
      {openResume &&
        <Modal modalProps={modalConfig.resume} setModalState={setOpenResume} />
      }
      {openGoMenu &&
        <Modal modalProps={modalConfig.gomenu} setModalState={setOpenGoMenu} />
      }
      {openStorial &&
        <Modal modalProps={modalConfig.storial} setModalState={setOpenStorial} />
      }
      {openCityPicker &&
        <Modal modalProps={modalConfig.city_picker} setModalState={setOpenCityPicker} />
      }
      <ButtonPanel
        setOpenResume={setOpenResume}
        setOpenGoMenu={setOpenGoMenu}
        setOpenStorial={setOpenStorial}
        setOpenCityPicker={setOpenCityPicker}
      />
      <Footer page='portfolio' />
    </Box>
  );
};