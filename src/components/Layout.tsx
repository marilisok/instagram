import * as React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Bar } from './Bar/Bar';
import { createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			overflowX: 'hidden'
		},
		content: {
			maxWidth: '900px',
			width: '100%',
			marginBottom: theme.spacing(20),
			display: 'flex',
			justifyContent: 'center',
			marginTop: theme.spacing(2)
		}
	})
);

interface ILayoutProps {
	children?: React.ReactNode;
}

export const Layout = (props: ILayoutProps) => {
	const { children } = props;
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Bar />
			<div className={classes.content}>{children}</div>
		</div>
	);
};
