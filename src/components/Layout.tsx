import * as React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Bar from './Bar';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	content: {
		maxWidth: '900px',
		width: '100%',
		marginBottom: theme.spacing(20),
		display: 'flex',
		justifyContent: 'center',
		marginTop: theme.spacing(2)
	}
}));

interface ILayoutProps {
	children?: React.ReactNode;
}

const Layout = (props: ILayoutProps) => {
	const {children} = props;
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Bar />
			<div className={classes.content}>{children}</div>
		</div>
	);
};

export default Layout;
