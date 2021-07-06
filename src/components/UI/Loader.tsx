import { CircularProgress, createStyles, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}
	})
);

export const Loader = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CircularProgress />
		</div>
	);
};
