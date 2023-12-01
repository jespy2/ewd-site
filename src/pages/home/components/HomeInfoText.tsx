import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

import styles from "../Home.module.scss";

interface IHomeInfoTextProps { 
  openModal?: () => void;
  modalIsOpen?: ReactNode;
}

export const HomeInfoText = (props: IHomeInfoTextProps) => {
  const { openModal, modalIsOpen } = props;

	return (
		<>
      <Box className={styles.homeInfoBodyText} tabIndex={0} >
        {(!modalIsOpen && openModal) && 
          <>
            <Box
              className={styles.openHomeModal}
              onClick={() => openModal()}
              aria-label="Open the modal"
              role="button"
              tabIndex={0}
            >
              <OpenInFullIcon />
            </Box>
            <br />
          </>
        }
        <Typography variant='body1' display='block'>
          I build captivating front-end applications
          that not only look great but also function seamlessly because they
          are built on elegantly designed backends. What sets me apart is my
          unique blend of technical prowess and a profound understanding of
          business, communication, and empathetic team building.
        </Typography>
        <br />
        <Typography variant='body1' display='block'>
          With years of hands-on experience in the software development
          world, I've honed my skills in creating user-friendly interfaces
          that leave a lasting impression served by well thought out,
          reliable backends. But my journey doesn't stop at the code; I've
          also navigated the complexities of business, from startups to
          established enterprises, and understand how software can drive
          growth and innovation.
        </Typography>
        <br />
        <Typography variant='body1'>
          Communication is at the heart of every successful project, and I
          excel at bridging the gap between technical and non-technical
          stakeholders, ensuring everyone's voice is heard. I firmly believe
          that building great software is a team effort, and I've cultivated
          a collaborative, empathetic approach to team building that fosters
          creativity and drives results.
        </Typography>
        <br />
        <Typography variant='body1'>
          In a rapidly evolving tech landscape, you need someone who can
          translate your vision into elegant, functional, and scalable
          solutions while seamlessly integrating with your business
          objectives. I'm that person, and I'm here to help your team shine.
          Let's create something incredible together.
        </Typography>
      </Box>
		</>
	);
};
