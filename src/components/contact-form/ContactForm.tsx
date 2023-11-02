import React, { useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { sendEmail, contactFields } from "./ContactForm.config";

import styles from "./ContactForm.module.scss";

export const ContactForm = () => {
	const form = useRef(null);
	const _current: string | HTMLFormElement = form.current!;
  const [isSubmitted, setIsSubmitted] = useState(false);

	return (
    <Box className={styles.contactFormContainer}>
      {isSubmitted && 
        <Box className={styles.thankyouMessage}>
          <Typography variant="h4" >Thank you for your message!</Typography>
          <Typography variant="body1" >I will get back to you as soon as possible.</Typography>
        </Box>
      }
      {!isSubmitted &&
        <form
          ref={form}
          onSubmit={
            (e) => {
              sendEmail(e, _current)
              setIsSubmitted(true)
              setTimeout(() => setIsSubmitted(false), 5000)
            }
          }
        >
				<Box className={styles.contactForm}>
					{contactFields}
            <Button type='submit' variant='outlined' sx={{marginTop: "2rem"}} >
						Send
					</Button>
				</Box>
			</form>}
		</Box>
	);
};
