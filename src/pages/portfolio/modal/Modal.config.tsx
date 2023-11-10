import React, { ReactNode } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';

import GithubLogo from '../../../images/logos/github.png';
import GoMenuLogo from '../../../images/logos/gomenulogo.svg';
import StorialLogo from '../../../images/logos/storiallogo.png';
import CityPickerLogo from '../../../images/logos/citypickerlogo.svg';
import Resume from '../../../assets/resume.pdf'

import styles from '../Portfolio.module.scss'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

export interface IModalProps {
  modal: string,
  class: string,
  children: ReactNode
}

interface IModalConfig {
  greeting: IModalProps;
  resume: IModalProps;
  gomenu: IModalProps;
  storial: IModalProps;
  city_picker: IModalProps;
}

export const modalConfig: IModalConfig = {
  greeting: {
    modal: 'greeting',
    class: 'greetingModal',
    children:
      <>
        <Typography variant='h2' >Check out my work</Typography>
        <Typography variant='body1' >Use the buttons <span className={styles.smallScreenPrompt} >above</span> <span className={styles.largerScreenPrompt} >on the right</span> to see some of my work and review my resume.</Typography><br />
     
      </>
  },
  resume: {
    modal: 'resume',
    class: 'resumeModal',
    children:
      <Document
        file={Resume} 
        renderMode="canvas"
        className="w-full relative"
      >
        <Page
          pageNumber={1}
          scale={1.0}            
          renderAnnotationLayer={false} 
          renderTextLayer={false}
        />
      </Document>   
  },
  gomenu: {
    modal: 'gomenu',
    class: 'goMenuModal',
    children: 
      <>
        <Typography variant='h4' >GoMenu</Typography>
        <Typography variant='body1' >After spending the past two years as a frontend dev, this project is me getting back to my roots in fullstack engineering, as well as flexing some of my skills that have matured in recent years.  I wanted something that had some interesting challenges in designing the UI and in the service layer, so I had the idea for an app that would take a URL for a recipe, scrape the page and enter the data into a form for the user to submit as a recipe card that gets added to the "cookbook".  A user is then able to add comments and ratings to their recipes, as well as find them easily through search and filtering.</Typography><br />
        <Typography variant='body1' >I used Figma for wireframing, Inkskape for icons and logos, and built a Jira board to track tasks and progress, along with managing deadlines. The frontend is built in React/Typescript and styled with SCSS and Material UI.  I built the server using Node/Express, which handles the CRUD functionality and webscraping.  I applied cloudbased MongoDB for the database.  Search and filtering is handled by Atlas search and server-side middleware.</Typography><br />
        <Typography variant='body1' >This project should be ready for MVP release very soon, and I have a roadmap for adding features and quality of life updates soon after.</Typography><br />
        <Box >
          <Link href='https://github.com/jespy2/gomenu' variant='body2' target='_blank' underline='none' color='yellow'>
            <img src={GithubLogo} alt='github' style={{marginRight: '1rem', width: '1.5rem', height: '1.5rem'}} />
            Review the code
          </Link>
          <Link
            href='https://github.com/jespy2'
            variant='body2'
            target='_blank'
            underline='none'
            color='yellow'
            sx={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '1rem'
            }}
          >
            <Box sx={{
              backgroundColor: 'white',
              borderRadius: '4px',
              width: '1.5rem',
              height: '1.5rem',
              marginRight: '1rem'
              }}>
              <img
                src={GoMenuLogo}
                alt='launch storial app'
                style={{ width: '100%', height: '100%', margin: '0 auto' }}
              />
            </Box>
            Check back--you will be able to try out the app in your browser upon release        
          </Link>
        </Box>
      </>
  },
  storial: {
    modal: 'storial',
    class: 'storialModal',
    children: 
      <>
        <Typography variant='h4' >Storial</Typography>
        
        <Typography variant='body1' >This was for an assessment I did in 2021 for a role I ended up taking.  The prompt was the following:</Typography>
        <Typography variant='body2' sx={{ fontStyle: 'italic' }} >Using the UI framework of your choice, build a UI around a hypothetical RESTful library API. Assume this API returns a list of books in a library, and allows for CRUD operations on a single book. The application should support those endpoints.</Typography><br />
        <Typography variant='body1' >Because this was a frontend-only role, I was only tasked with building the UI, but decided to build a fullstack app so that the reviewing team could punch through the final product.  I started with a using Adobe products to build the branding package, including name, logo, color palate and wireframing.  The frontend was in React, and I took the opportunity to try out Tailwind.css (which I enjoyed and ended up using quite a bit in my new role).  The backend was built with Node/Express and MongoDB. </Typography><br />
        <Typography variant='body1' >Since this was a takehome assessment, I had only a few days to go from design to prod.</Typography><br />
        <Box >
          <Link href='https://github.com/jespy2/storial' variant='body2' target='_blank' underline='none' color='yellow'>
            <img src={GithubLogo} alt='github' style={{marginRight: '1rem', width: '1.5rem', height: '1.5rem'}} />
            Review the code and run the app on your machine (documentation and quick start guide in the README)
          </Link>
          {/* <Link
            href='https://github.com/jespy2'
            variant='body2'
            target='_blank'
            underline='none'
            color='yellow'
            sx={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '1rem'
            }}
          >
            <Box sx={{
              backgroundColor: 'white',
              borderRadius: '4px',
              width: '1.5rem',
              height: '1.5rem',
              marginRight: '1rem'
              }}>
              <img
                src={StorialLogo}
                alt='launch storial app'
                style={{ width: '100%', height: '100%', margin: '0 auto' }}
              />
            </Box>
            Try out the app in your browser          
          </Link> */}
        </Box>
      </>
  },
  city_picker: {
    modal: 'city_picker',
    class: 'cityPickerModal',
    children: 
      <>
        <Typography variant='h4' >City Picker</Typography>
        <Typography variant='body1' >This was one of my first app projects in React (as opposed to "static" websites, which I'd been building for a few years).  The concept was to guide user through various data to determine what city would be the best fit for them.  The code is a bit rough, as I was tackling a bunch of new tech and concepts.  This is a relatively simple project in retrospect, but it was an important step for me in bringing together much of what I'd learned on my path to becoming an enterprise-level engineer (transitioning from freelance website design).</Typography><br />

        <Typography variant='body1' >My intention with this project was to highlight my front-end skills. There was some interesting challenges with the data (collection, processing and algorithm development), but didn't want to make that too central to this addition to my portfolio.</Typography><br />

        <Typography variant='body1' >So, I went with a small data set and only four variables with which the user can interact with the data. I could see at some point coming back to this app, adding a backend, expanding the dataset to encompass most US cities (including towns under 50,000) and increasing the variable choices to include things like cost of living, religiosity, commute times, etc. This is a very scalable project, though I would need to do some major refactors first to incorporate more advanced design principles and integrate tech that I wasn't familiar with at the time (such as Typescript)</Typography><br />

        <Typography variant='body1' >The UI was built with vanilla React.js. I built a branding package with wireframes, images (logos and icons) and color palate. I did the webscrapping and data processing in Node.js.</Typography><br />

        <Typography variant='body1' >A quick note on UX: In designing the sliders for selecting variable ranges, I intentionally left out quantifying feedback like tick markers or popups on the handles that gave a specific number or party range. I wanted it to be more a "feel" experience than a "think" experience.</Typography><br />
        <Box>
          <Box >
          <Link href='https://github.com/jespy2/CityPicker' variant='body2' target='_blank' underline='none' color='yellow'>
            <img src={GithubLogo} alt='github' style={{marginRight: '1rem', width: '1.5rem', height: '1.5rem'}} />
            Review the code and run the app on your machine (documentation README)
          </Link>
          <Link
            href='https://espywebdesign.com/reactApps/citypicker/index.html'
            variant='body2'
            target='_blank'
            underline='none'
            color='yellow'
            sx={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '1rem'
            }}
          >
            <Box sx={{
              backgroundColor: 'white',
              borderRadius: '4px',
              width: '1.5rem',
              height: '1.5rem',
              marginRight: '1rem',
              }}>
              <img
                src={CityPickerLogo}
                alt='launch city picker app'
                style={{ width: '100%', height: '100%', margin: '0 auto' }}
              />
            </Box>
            Try out the app in your browser          
          </Link>
        </Box>
        </Box>
      </>
  }
}