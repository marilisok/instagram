import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link as RouterLink} from 'react-router-dom';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			flexGrow: 1,
			display: 'flex',
			justifyContent: 'center'
		},
		content: {
			padding: '0 80px',
			color: 'white'
		},
		title: {
			flexGrow: 1
		},
		link1: {
			paddingRight: theme.spacing(2)
		}
	})
);

const Bar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar className={classes.content}>
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
								Лента
							</Link>
							<Link
								component={RouterLink}
								to="/profile"
								color="inherit"
							>
								Профиль
							</Link>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Bar;
