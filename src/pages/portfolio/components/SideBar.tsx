import { Box, Link, Typography } from "@mui/material";

import Resume from "../../../assets/resume.pdf";

import styles from "../Portfolio.module.scss";
export const SideBar = () => {
	return (
		<Box className={styles.portfolioSidebar}>
			<Box className={styles.techStack}>
				<Typography variant='h3'>Tech Stack</Typography>
				<Box className={styles.techStackSection}>
					<Typography variant='h5'>Frontend:</Typography>
					<Typography variant='body1'>
						React, Typescript, JavaScript, React Native, HTML,
						SASS/SCSS/CSS/Tailwind.css, Next JS, Redux, Wireframing/UX design,
						Figma, Storybook, OAuth, TDD (Jest, React Testing Library),
						Component Libraries (AntD, Bootstrap, Semantic-UI), Vite
					</Typography>
				</Box>
				<Box className={styles.techStackSection}>
					<Typography variant='h5'>Backend:</Typography>
					<Typography variant='body1'>
						Node.js, Express, Redis, Python, Go, R, Postgres, NoSQL{" "}
					</Typography>
				</Box>
				<Box className={styles.techStackSection}>
					<Typography variant='h5'>Other:</Typography>
					<Typography variant='body1'>
						Docker, Github Actions, Agile, Version Control (Git/Github) 
					</Typography>
				</Box>
			</Box>

			<Box className={styles.resumeLink}>
				<Link href={Resume} target='_blank'>
					<Typography variant='h5'>Check out my resume!</Typography>
				</Link>
			</Box>
		</Box>
	);
};
