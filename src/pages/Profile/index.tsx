import React from 'react';
import {
	Avatar,
	Box,
	Button,
	Grid,
	makeStyles,
	Typography
} from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		width: '100%'
	}
});
const Profile = () => {
	const styles = useStyles();
	return (
		<Grid container direction="column" className={styles.root}>
			<Grid item container>
				<Grid item xs={4}>
					<Avatar />
				</Grid>
				<Grid item container xs={8} direction="column">
					<Grid item container direction="row">
						<Grid item xs={6}>
							<Typography variant="h6">janedoe_</Typography>
						</Grid>
						<Grid item xs={6}>
							<Button variant="outlined">Edit</Button>
						</Grid>
					</Grid>
					<Grid item container direction="row">
						<Grid item xs={4}>
							<Typography component="div">
								<Box
									fontWeight="fontWeightBold"
									display="inline"
								>
									146
								</Box>
								<Box display="inline"> posts</Box>
							</Typography>
						</Grid>

						<Grid item xs={4}>
							<Typography component="div">
								<Box
									fontWeight="fontWeightBold"
									display="inline"
								>
									15
								</Box>
								<Box display="inline"> followers</Box>
							</Typography>
						</Grid>

						<Grid item xs={4}>
							<Typography>
								<Box
									fontWeight="fontWeightBold"
									display="inline"
								>
									215
								</Box>
								<Box display="inline"> following</Box>
							</Typography>
						</Grid>
					</Grid>
					<Grid item>
						<Typography>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit 📷✈️🏕️
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container>
				<Grid item>posts</Grid>
			</Grid>
		</Grid>
	);
};

export default Profile;
