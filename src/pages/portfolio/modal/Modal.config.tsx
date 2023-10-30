import React, { ReactNode } from 'react';
import { Box, Link, Typography } from '@mui/material';

import GithubLogo from '../../../images/logos/github.png';
import CityPickerLogo from '../../../images/logos/citypickerlogo.svg';
import Resume from '../../../assets/resume.png'

export interface IModalProps {
  modal: string,
  class: string,
  children: ReactNode
}

interface IModalConfig {
  resume: IModalProps;
  city_picker: IModalProps;
}

export const modalConfig: IModalConfig = {
  resume: {
    modal: 'resume',
    class: 'resumeModal',
    children: <img src={Resume} alt="resume" />
  },
  city_picker: {
    modal: 'city_picker',
    class: 'cityPickerModal',
    children: 
      <>
        <Typography variant='h4' >City Picker</Typography>
        <Typography variant='body1' >This app was built mobile-first. I engage with web content primarily through my laptop I realize that can influence my layout planning. So for this project, I started with mobile and then scaled it to larger screens. This led to using a more card-based approach.</Typography><br />

        <Typography variant='body1' >My intention with this project was to highlight my front-end skills. There was some interesting challenges with the data (collection, processing and algorithm development), but didn"’"t want to make that too central to this addition to my portfolio.</Typography><br />

        <Typography variant='body1' >So, I went with a small data set and only four variables with which the user can interact with the data. I could see at some point coming back to this app, adding a backend, expanding the dataset to encompass most US cities (including towns under 50,000) and increasing the variable choices to include things like cost of living, religiosity, commute times, etc. This is a very scalable project.</Typography><br />

        <Typography variant='body1' >The UI was built with React.js. This was my first project using Affinity products instead of Adobe Creative. I built the wireframes using Publisher and the images (logos and icons) with Photo and Designer. I did the webscrapping and data processing in Node.js.</Typography><br />

        <Typography variant='body1' >A quick note on UX: In designing the sliders for selecting variable ranges, I intentionally left out quantifying feedback like tick markers or popups on the handles that gave a specific number or party range. I wanted it to be more a "feel" experience than a "think" experience.</Typography><br />
        <Box>

          <Link href='https://github.com/jespy2' variant='h6' target='_blank' underline='none'>
            <img src={GithubLogo} alt='github' /> Review the code
          </Link>
          <Link href='https://github.com/jespy2' variant='h6' target='_blank' underline='none'>
            <Box sx={{
              backgroundColor: 'white',
              borderRadius: '4px',
              width: '1rem',
              height: '1rem',
              }}>
              <img
                src={CityPickerLogo}
                alt='launch city picker app'
                style={{ width: '100%', height: '100%', margin: '0 auto' }}
              />
            </Box>
            Try out the app            
          </Link>
        </Box>
      </>
  }
}