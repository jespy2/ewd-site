import { Box, ImageList, ImageListItem, ImageListItemBar, Link, Typography } from '@mui/material';
import { Footer } from '../../components/footer/Footer';
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

export const Portfolio = () => {

  return (
    <Box className={styles.portfolioContainer} >
      <Box className={styles.portfolioBackgroundFilter} ></Box>
      <Box className={styles.portfolioSidebar} >
      <Box className={styles.techStack}>
        <Typography variant="h3" >Tech Stack</Typography>
        <Box className={styles.techStackSection} >
          <Typography variant="h5" >Frontend:</Typography>
          <Typography variant="body1" >React, Typescript, JavaScript, HTML, CSS and style frameworks (SASS/SCSS, Tailwind.css), Next JS, Redux, Wireframing/UX design, TDD (Jest, React Testing Library), Component Libraries (AntD, Bootstrap, Material UI, Semantic-UI)</Typography>
        </Box>
        <Box className={styles.techStackSection} >
          <Typography variant="h5" >Backend:</Typography>
          <Typography variant="body1" >Node.js, Express, Redis, Postgres, NoSQL, </Typography>
        </Box>
        <Box className={styles.techStackSection} >
          <Typography variant="h5" >Other:</Typography>
          <Typography variant="body1" >Docker, Agile, Version Control (Git/Github)</Typography>
        </Box>
      </Box>

      <Box className={styles.resumeLink}>
        <Link href={Resume} target='_blank'>
          <Typography variant="h5" >Check out my resume!</Typography>
        </Link>
      </Box>
      </Box>

      <Box className={styles.portfolioMosaic} >
      <ImageList
          variant="quilted"
          gap={20}
          cols={5}
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
      <Footer page='portfolio' />
    </Box>
  );
};