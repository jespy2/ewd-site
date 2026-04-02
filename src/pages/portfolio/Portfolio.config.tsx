import { LabelImportant } from "@mui/icons-material";
import {
	Box,
	Link,
	List,
	ListItem,
	ListItemIcon,
	Typography,
} from "@mui/material";

import GithubLogo from "../../images/logos/github.png";
import GoMenuLogo from "../../images/logos/gomenulogo.svg";
import StorialLogo from "../../images/logos/storiallogo.png";

import GomenuScreen from "../../images/pics/gomenu-screen.png";
import RedisHawkScreen from "../../images/pics/redis-hawk-screen.png";
import StorialScreen from "../../images/pics/storial-screen.png";

import styles from "./Portfolio.module.scss";

export const itemData = [
	{
		img: StorialScreen,
		title: "Storial",
		subtitle: "Basic CRUD app",
		rows: 2,
		cols: 6,
		children: (
			<div className={styles.portfolioItemContent}>
				<Typography variant='h4'>Storial</Typography>

				<div
					className={styles.portfolioModalCardHero}
					style={{ backgroundImage: `url(${StorialScreen})` }}
				/>
				<Typography variant='body1'>
					<strong style={{ textDecoration: "underline" }}>Stack:</strong> React,
					TypeScript, Redux Toolkit, TailwindCSS, Next.js, MongoDB, Storybook,
					React Testing Library
				</Typography>
				<br />
				<Typography variant='body1'>
					<strong style={{ textDecoration: "underline" }}>Design Notes:</strong>
					<List dense={true}>
						<ListItem>
							<ListItemIcon>
								<LabelImportant fontSize='small' color='primary' />
							</ListItemIcon>
							Redux over local state: An argument could be made that Redux is
							overkill here. Good componentization with props passed as children
							would work fine at this size. But Redux demonstrates scalable
							architectural thinking — it makes the codebase easier to maintain
							as features and data grow, and makes it easier for associate-level
							engineers to pick up tasks.
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<LabelImportant fontSize='small' color='primary' />
							</ListItemIcon>
							Next.js App Router: Server-first architecture with built-in API
							routes eliminates the need for a separate Express server,
							simplifies deployment, and demonstrates modern Next.js patterns.
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<LabelImportant fontSize='small' color='primary' />
							</ListItemIcon>
							Storybook component documentation
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<LabelImportant fontSize='small' color='primary' />
							</ListItemIcon>
							CVA variant system: Replaces ad-hoc Tailwind conditionals with
							type-safe, composable variant APIs — the same pattern used in
							production design systems.
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<LabelImportant fontSize='small' color='primary' />
							</ListItemIcon>
							WCAG accessibility audit
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<LabelImportant fontSize='small' color='primary' />
							</ListItemIcon>
							Search + filter feature
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<LabelImportant fontSize='small' color='primary' />
							</ListItemIcon>
							Tailwind design tokens
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<LabelImportant fontSize='small' color='primary' />
							</ListItemIcon>
							Declarative file structure: Each directory uses a subdirectory +
							index file pattern (e.g. components/ui/Button/index.tsx) to make
							the codebase navigable and keep import paths clean.
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<LabelImportant fontSize='small' color='primary' />
							</ListItemIcon>
							Secure authentication using client cookies and storage of
							encrypted passwords.
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<LabelImportant fontSize='small' color='primary' />
							</ListItemIcon>
							Light/Dark mode.
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<LabelImportant fontSize='small' color='primary' />
							</ListItemIcon>
							Brand consistency via custom logo and color style guide.
						</ListItem>
					</List>
				</Typography>
				<Typography variant='body2'>
					This was a quick CRUD app I built for an assessment for a role I ended
					up taking. Because the role was frontend-focused, I was tasked with a
					stubbed out UI, but went ahead and built a full stack app so the
					interview team could punch through it more easily. Broadly speaking,
					this is a simple CRUD app, which is why I chose it for the original
					assessment. 3.0 upgrades the stack and adds enterprise-grade patterns
					— it's largely an exercise in building something scalable, with an eye
					towards how apps grow and are maintained at scale.
				</Typography>
				<br />
				<Box>
					<Link
						className={styles.portfolioLinks}
						href='https://github.com/jespy2/storial-3.0'
						variant='body2'
						target='_blank'
						underline='none'
						color='yellow'
					>
						<img
							src={GithubLogo}
							alt='github'
							style={{ marginRight: "1rem", width: "1.5rem", height: "1.5rem" }}
						/>
						Review the code and run the app on your machine (documentation and
						quick start guide in the README). Note: The there are two branches
						mentioned in the documentation, one for running locally and one for
						running online. The online branch has more features and code
						complexity.
					</Link>
				</Box>
				{/* <Box>
					<Link
						className={styles.portfolioLinks}
						href='https://jamesespy.com/storial/'
						variant='body2'
						target='_blank'
						underline='none'
						color='yellow'
					>
						<img
							src={StorialLogo}
							alt='github'
							style={{ marginRight: "1rem", width: "1.5rem", height: "1.5rem" }}
						/>
						Try out live version of the app (code available for review in the
						repo above)
					</Link>
				</Box> */}
			</div>
		),
	},
	{
		img: GomenuScreen,
		title: "GoMenu",
		subtitle: "Recipe organization tool",
		rows: 2,
		cols: 3,
		children: (
			<div className={styles.portfolioItemContent}>
				<Typography variant='h4'>GoMenu</Typography>
				<Typography variant='body1'>
					<strong style={{ textDecoration: "underline" }}>Stack:</strong> React,
					Typescript, Figma (wireframming), SASS/SCSS, Material UI,
					Node/Express, MongoDB(Atlas)
				</Typography>
				<br />
				<Typography variant='body1'>
					<strong style={{ textDecoration: "underline" }}>Design Notes:</strong>
					<List dense={true}>
						<ListItem>
							<ListItemIcon>
								<LabelImportant fontSize='small' color='primary' />
							</ListItemIcon>
							Scrapes LD+JSON from websites to capture recipe data
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<LabelImportant fontSize='small' color='primary' />
							</ListItemIcon>
							Search and filtering via Atlas search and server-side middleware
						</ListItem>
					</List>
				</Typography>
				<div
					className={styles.portfolioModalCardHero}
					style={{ backgroundImage: `url(${GomenuScreen})` }}
				/>
				<Typography variant='body1'>
					This a project for me to use once completed. I have Google docs that
					list recipes I’ve found over the years, but it is a problematic
					approach in terms of organization. Once complete, the app will take a
					URL for a recipe, scrape the data and create a recipe card that goes
					into the user’s “cookbook”. The cookbook is then easily organized by
					category and cooking-method, permits user notes and ratings, all of
					which will make finding the right recipe easier.
				</Typography>
				<br />
				<Typography variant='body1'>
					Currently in the middle of a major refactor to incorporate some new
					mobile-centric ideas into the MVP.
				</Typography>
				<br />
				<Typography variant='body1'>
					This project should be ready for MVP release very soon, and I have a
					roadmap for adding features and quality of life updates soon after.
				</Typography>
				<br />
				<Box>
					<Link
						className={styles.portfolioLinks}
						href='https://github.com/jespy2/gomenu'
						variant='body2'
						target='_blank'
						underline='none'
						color='yellow'
					>
						<img
							src={GithubLogo}
							alt='github'
							style={{ marginRight: "1rem", width: "1.5rem", height: "1.5rem" }}
						/>
						Review the code
					</Link>
					<Link
						className={styles.portfolioLinks}
						href='https://github.com/jespy2/gomenu'
						variant='body2'
						target='_blank'
						underline='none'
						color='yellow'
						sx={{
							display: "flex",
							flexDirection: "row",
							marginTop: "1rem",
						}}
					>
						<Box
							sx={{
								backgroundColor: "white",
								borderRadius: "4px",
								width: "1.5rem",
								height: "1.5rem",
								marginRight: "1rem",
							}}
						>
							<img
								src={GoMenuLogo}
								alt='launch gomenu app'
								style={{ width: "100%", height: "100%", margin: "0 auto" }}
							/>
						</Box>
						Check back--you will be able to try out the app in your browser upon
						release
					</Link>
				</Box>
			</div>
		),
	},
	// {
	//   img: CityPickerScreen,
	//   title: 'CityPicker',
	//   subtitle: 'Find a new city basic on your personal preferences',
	//   rows: 2,
	//   cols: 2,
	//   children:
	//     <div className={styles.portfolioItemContent}>
	//       <Typography variant='h4' >City Picker</Typography>

	//       <div className={styles.portfolioModalCardHero} style={{backgroundImage: `url(${CityPickerScreen})`}} />
	//       <Typography variant='body1' >This was one of my first app projects in React (as opposed to "static" websites, which I'd been building for a few years).  The concept was to guide users through various data to determine what city would be the best fit for them.  The code is a bit rough, as I was tackling a bunch of new tech and concepts.  This is a relatively simple project in retrospect, but it was an important step for me in bringing together much of what I'd learned on my path to becoming an enterprise-level engineer (transitioning from freelance website design).</Typography><br />

	//       <Typography variant='body1' >My intention with this project was to highlight my front-end skills. There was some interesting challenges with the data (collection, processing and algorithm development), but didn't want to make that too central to this addition to my portfolio.</Typography><br />

	//       <Typography variant='body1' >So, I went with a small data set and only four variables with which the user can interact with the data. I could see at some point coming back to this app, adding a backend, expanding the dataset to encompass most US cities (including towns under 50,000) and increasing the variable choices to include things like cost of living, religiosity, commute times, etc. This is a very scalable project, though I would need to do some major refactors first to incorporate more advanced design principles and integrate tech that I wasn't familiar with at the time (such as Typescript)</Typography><br />

	//       <Typography variant='body1' >The UI was built with vanilla React.js. I built a branding package with wireframes, images (logos and icons) and color palate. I did the webscrapping and data processing in Node.js.</Typography><br />

	//       <Typography variant='body1' >A quick note on UX: In designing the sliders for selecting variable ranges, I intentionally left out quantifying feedback like tick markers or popups on the handles that gave a specific number or party range. I wanted it to be more a "feel" experience than a "think" experience.</Typography><br />
	//       <Box>
	//         <Box >
	//         <Link className={styles.portfolioLinks} href='https://github.com/jespy2/CityPicker' variant='body2' target='_blank' underline='none' color='yellow'>
	//           <img src={GithubLogo} alt='github' style={{marginRight: '1rem', width: '1.5rem', height: '1.5rem'}} />
	//           Review the code and run the app on your machine (documentation README)
	//         </Link>
	//         <Link
	//           href='https://espywebdesign.com/reactApps/citypicker/index.html'
	//           className={styles.portfolioLinks}
	//           variant='body2'
	//           target='_blank'
	//           underline='none'
	//           color='yellow'
	//           sx={{
	//             display: 'flex',
	//             flexDirection: 'row',
	//             marginTop: '1rem'
	//           }}
	//         >
	//           <Box sx={{
	//             backgroundColor: 'white',
	//             borderRadius: '4px',
	//             width: '1.5rem',
	//             height: '1.5rem',
	//             marginRight: '1rem',
	//             }}>
	//             <img
	//               src={CityPickerLogo}
	//               alt='launch city picker app'
	//               style={{ width: '100%', height: '100%', margin: '0 auto' }}
	//             />
	//           </Box>
	//           Try out the app in your browser
	//         </Link>
	//       </Box>
	//       </Box>
	//     </ div>
	// },
	{
		img: RedisHawkScreen,
		title: "redis-hawk",
		subtitle:
			"App for monitoring and visualizing  granular key-level details for your Redis deployment",
		rows: 2,
		cols: 2,
		children: (
			<div className={styles.portfolioItemContent}>
				<Typography variant='h4'>redis-hawk</Typography>
				<div
					className={styles.portfolioModalCardHero}
					style={{ backgroundImage: `url(${RedisHawkScreen})` }}
				/>
				<Typography variant='body1'>
					I was part of the open-source team that developed redis-hawk, an app
					that allows users to monitor the keyspace and its events within all
					databases of any number of deployed Redis instances.
				</Typography>
				<br />
				<Typography variant='body1'>
					This was a great opportunity to work with some awesome engineers that
					allowed me to focus on the backend. My contribution was adding some
					fun algorithms and data structures, as well as basic routing to the
					server-side middleware.
				</Typography>
				<br />
				<Box>
					<Link
						className={styles.portfolioLinks}
						href='https://github.com/oslabs-beta/redis-hawk/tree/main'
						variant='body2'
						target='_blank'
						underline='none'
						color='yellow'
					>
						<img
							src={GithubLogo}
							alt='github'
							style={{ marginRight: "1rem", width: "1.5rem", height: "1.5rem" }}
						/>
						Review the code
					</Link>
				</Box>
			</div>
		),
	},
];
