import { Box, Typography } from "@mui/material";
import { HomeInfoTitles } from "./HomeInfoTitles";

import styles from "../Home.module.scss";

export const HomeShowMore = ({handleShowMore}: {handleShowMore: () => void}) => {

	return (
    <Box className={styles.homeReadMoreContainer}>
      <Box className={styles.homeReadMoreText}>
        <HomeInfoTitles />
        <br />
        <br />
        <Box className={styles.homeReadMoreButtonContainer}>
          <Typography
            variant='button'
            className={styles.homeReadMoreButton}
            onClick={() => handleShowMore()}
          >
            read more
          </Typography>
        </Box>
      </Box>
    </Box>
	);
};
