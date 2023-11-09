import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { Modal } from './modal/Modal';
import { modalConfig } from './modal/Modal.config';
import { ButtonPanel } from './button-panel/ButtonPanel';
import { Footer } from '../../components/footer/Footer';

import styles from './Portfolio.module.scss';



export const Portfolio = () => {
  const [openGreeting, setOpenGreeting] = useState(false);
  const [openResume, setOpenResume] = useState(false);
  const [openGoMenu, setOpenGoMenu] = useState(false);
  const [openStorial, setOpenStorial] = useState(false);
  const [openCityPicker, setOpenCityPicker] = useState(false);

  useEffect(() => { setOpenGreeting(true) }, []);  

  return (
    <Box className={styles.homeContainer} >
      <Box className={styles.homeBackgroundFilter} ></Box>
      {openGreeting &&
        <Modal modalProps={modalConfig.greeting} setOpenGreeting={setOpenGreeting} />
      }
      {openResume &&
        <Modal modalProps={modalConfig.resume} setOpenGreeting={setOpenGreeting} setModalState={setOpenResume} />
      }
      {openGoMenu &&
        <Modal modalProps={modalConfig.gomenu} setOpenGreeting={setOpenGreeting} setModalState={setOpenGoMenu} />
      }
      {openStorial &&
        <Modal modalProps={modalConfig.storial} setOpenGreeting={setOpenGreeting} setModalState={setOpenStorial} />
      }
      {openCityPicker &&
        <Modal modalProps={modalConfig.city_picker} setOpenGreeting={setOpenGreeting} setModalState={setOpenCityPicker} />
      }
      <ButtonPanel
        setOpenGreeting={setOpenGreeting}
        setOpenResume={setOpenResume}
        setOpenGoMenu={setOpenGoMenu}
        setOpenStorial={setOpenStorial}
        setOpenCityPicker={setOpenCityPicker}
      />
      <Footer page='portfolio' />
    </Box>
  );
};