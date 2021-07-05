import React from 'react';
import {
	createStyles,
	makeStyles,
	Theme,
	useTheme
} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, useMediaQuery } from '@material-ui/core';
import { app } from '../../firebase';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			flexGrow: 1,
			display: 'flex',
			justifyContent: 'center',
			position: 'sticky',
			top: 0,
			zIndex: 1
		},
		content: {
			padding: '0 80px',
			color: 'white'
		},
		contentDownXS: {
			padding: '0 16px'
		},
		title: {
			flexGrow: 1
		},
		link1: {
			paddingRight: theme.spacing(2)
		}
	})
);

export const Bar = () => {
	const theme = useTheme();
	const isDownXS = useMediaQuery(theme.breakpoints.down('xs'));

	const classes = useStyles();

	const handleSignOut = () => {
		app.auth()
			.signOut()
			.then()
			.catch(err => console.log(err));
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar
					className={clsx({
						[classes.content]: true,
						[classes.contentDownXS]: isDownXS
					})}
				>
					<Grid container>
						<Grid item xs={6}>
							<Typography variant="h6" className={classes.title}>
								Instagram
							</Typography>
						</Grid>
						<Grid
							item
							container
							xs={6}
							justify="flex-end"
							alignItems="center"
						>
							<Link
								component={RouterLink}
								to="/"
								color="inherit"
								className={classes.link1}
							>
								Feed
							</Link>
							<Link
								component={RouterLink}
								to="/profile"
								color="inherit"
								className={classes.link1}
							>
								Profile
							</Link>
							<Link
								color="inherit"
								onClick={() => {
									handleSignOut();
								}}
							>
								Sign out
							</Link>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
};
