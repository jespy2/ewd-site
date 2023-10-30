import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Card, CardContent, CardMedia, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { hobbiesAccordianProps } from './HobbiesAccordian.config';

import styles from './HobbiesAccordian.module.scss';

export const Accordian = () => { 

  const accordianItems = hobbiesAccordianProps.map((item) => { 
    return (
      <Accordion className={styles.HobbiesAccordianItem}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'
				>
					<Typography variant='body1' display='block'>
						{item.title}
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Card className={styles.hobbiesCard}>
            <CardMedia
              sx={{ height: 140 }}
              image={item.image}
              title={item.imagetitle}
            />
            <CardContent>
							<Typography variant='body1' display='block'>
								{item.text}
							</Typography>
						</CardContent>
					</Card>
				</AccordionDetails>
			</Accordion>
    )
  });
  return (
    <>{accordianItems}</>
  )
};