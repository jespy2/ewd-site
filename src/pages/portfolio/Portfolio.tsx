import React, { useEffect, useState } from 'react';
import { Box, ImageList, ImageListItem, ImageListItemBar, Link, Typography } from '@mui/material';

import { Modal } from './modal/Modal';
import { modalConfig } from './modal/Modal.config';
import { ButtonPanel } from './button-panel/ButtonPanel';
import { Footer } from '../../components/footer/Footer';

import GomenuScreen from "../../images/pics/gomenu-screen.png";
import StorialScreen from "../../images/pics/storial-screen.png";
import CityPickerScreen from "../../images/pics/city-picker-screen.png";
import ResumeScreen from "../../images/pics/resume.png";


import ProfilePic from "../../images/pics/profile.jpg";
import Resume from '../../assets/resume.pdf'
import { itemData } from './Portfolio.config';

import styles from './Portfolio.module.scss';


function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

// const itemData = [
//   {
//     img: GomenuScreen,
//     title: 'GoMenu',
//     rows: 2,
//     cols: 4,
//   },
//   {
//     img: StorialScreen,
//     title: 'Storial',
//     rows: 2,
//     cols: 2,
  
//   },
//   // {
//   //   img: ResumeScreen,
//   //   title: 'Resume',
//   //   rows: 3,
//   //   cols: 2,
//   // },
//   {
//     img: CityPickerScreen,
//     title: 'CityPicker',
//     rows: 2,
//     cols: 2,
//   },
// ]


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
      {/* {openGreeting &&
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
      } */}

      <Box className={styles.portfolioSidebar} >
      <Box className={styles.techStack}>
        <Typography variant="h3" >Tech Stack</Typography>
        <Typography variant="h5" >Frontend:</Typography>
        <Typography variant="body1" >React, Typescript, JavaScript, HTML, CSS and style frameworks (SASS/SCSS, Tailwind.css), Next JS, Redux, Wireframing/UX design, TDD (Jest, React Testing Library), Component Libraries (AntD, Bootstrap, Material UI, Semantic-UI)</Typography>
        <br/>
        <Typography variant="h5" >Backend:</Typography>
        <Typography variant="body1" >Node.js, Express, Redis, Postgres, NoSQL, </Typography>
        <br/>
        <Typography variant="h5" >Other:</Typography>
        <Typography variant="body1" >Docker, Agile, Version Control (Git/Github)</Typography>
      </Box>

      <Box className={styles.resumeLink}>
        <Link href={Resume} target='_blank'>
          {/* <Box className={styles.profilePicFrame} ><img src={ProfilePic} /></Box> */}
          <Typography variant="h5" >Check out my resume!</Typography>
        </Link>
      </Box>
      </Box>

      <Box className={styles.portfolioMosaic} >
      <ImageList
          // sx={{ width: "100%", height: "100%" }}
          variant="quilted"
          gap={20}
          cols={5}
          // rowHeight={200}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
                <Box className={styles.mosaicText} >
                  {item.children}
                </Box>
                <ImageListItemBar title={item.title} subtitle={item.subtitle} position="below"  />
              </ImageListItem>
            ))}
      </ImageList>
      </Box>
      
      {/* <ButtonPanel
        setOpenGreeting={setOpenGreeting}
        setOpenResume={setOpenResume}
        setOpenGoMenu={setOpenGoMenu}
        setOpenStorial={setOpenStorial}
        setOpenCityPicker={setOpenCityPicker}
      /> */}
      <Footer page='portfolio' />
    </Box>
  );
};