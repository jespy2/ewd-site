import { useState, Dispatch, SetStateAction } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Card, CardContent, CardMedia, ClickAwayListener, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { hobbiesAccordianProps } from './HobbiesAccordian.config';

import styles from './HobbiesAccordian.module.scss';

export const Accordian = ({setInfoHidden}: {setInfoHidden: Dispatch<SetStateAction<boolean>>}) => { 
	const [expanded, setExpanded] = useState({
		'Martial Arts': false,
		Motorcycles: false,
		Camping: false,
		Family: false,
	});

	const handleClickAway = (accordianName: string) => { 
		setExpanded({ ...expanded, [accordianName]: false });
	}

  const accordianItems = hobbiesAccordianProps.map((item) => { 
		return (
			<ClickAwayListener onClickAway={() => handleClickAway(item.title)}>
				<Accordion
					className={styles.HobbiesAccordianItem}
					expanded={expanded[item.title as keyof typeof expanded]}
					onChange={() => {
						setExpanded({ ...expanded, [item.title]: !expanded[item.title as keyof typeof expanded] })
						setInfoHidden(!expanded[item.title as keyof typeof expanded] ? true : false)
					}
					}
				>
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
								sx={{
									height: item.title === 'Martial Arts' ? "30vh" : "30vh",
									backgroundPosition: item.title === 'Martial Arts' ? "unset" : "center"
								}}
              image={item.image}
              title={item.imagetitle}
            />
            <CardContent className={styles.accordianItemContent}>
							<Typography variant='body1' display='block'>
								{item.text}
							</Typography>
						</CardContent>
					</Card>
				</AccordionDetails>
				</Accordion>
			</ClickAwayListener>
    )
  });
  return (
    <>{accordianItems}</>
  )
};