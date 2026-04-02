import { MutableRefObject, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { ContactFields } from "./ContactForm.config";

import styles from "./ContactForm.module.scss";

const WORKER_URL = "https://contact-form-handler.jespy2.workers.dev/";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    const formData = new FormData(form.current!);

    try {
      const response = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("from_name"),
          email: formData.get("from_email"),
          phone: formData.get("from_phone"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box className={styles.contactFormContainer}>
      {isSubmitted && (
        <Box className={styles.thankyouMessage}>
          <Typography variant="h4">Thank you for your message!</Typography>
          <Typography variant="body1">I will get back to you as soon as possible.</Typography>
        </Box>
      )}
      {!isSubmitted && (
        <form ref={form} onSubmit={sendEmail}>
          <Box className={styles.contactForm}>
            <ContactFields form={form as JSX.IntrinsicAttributes & MutableRefObject<null>} />
            {isError && (
              <Typography color="error" sx={{ marginTop: "1rem" }}>
                Something went wrong. Please try again.
              </Typography>
            )}
            <Button
              type="submit"
              variant="outlined"
              sx={{ marginTop: "2rem" }}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send"}
            </Button>
          </Box>
        </form>
      )}
    </Box>
  );
};