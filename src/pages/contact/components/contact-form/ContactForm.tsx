import { MutableRefObject, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";

import { ContactFields } from "./ContactForm.config";

import styles from "./ContactForm.module.scss";

export const ContactForm = () => {
	const form = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_03qu7ep",
        "template_r6tuo6d",
        form.current!,
        "KCCdjOFh_vB4JGzBC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
              sendEmail(e)
              setIsSubmitted(true)
              setTimeout(() => setIsSubmitted(false), 5000)
            }
          }
        >
				<Box className={styles.contactForm}>
					<ContactFields form={form as JSX.IntrinsicAttributes & MutableRefObject<null>} />
            <Button type='submit' variant='outlined' sx={{marginTop: "2rem"}} >
						Send
					</Button>
				</Box>
			</form>}
		</Box>
	);
};
