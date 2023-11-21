import { Box, Typography } from "@mui/material";
import styles from "../Home.module.scss";

export const HomeShowLess = ({ handleShowMore }: { handleShowMore: () => void }) => {
  

	const buttonBackgroundStyles = {
		backgroundImage:
			"linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, .2))",
	};

	return (
    <Box
      className={styles.homeReadMoreButtonContainer}
      sx={buttonBackgroundStyles}
    >
      <Typography
        variant='button'
        className={styles.homeReadMoreButton}
        onClick={() => handleShowMore()}
      >
        show less
      </Typography>
    </Box>
	);
};
