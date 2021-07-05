import React from 'react';
import {
	Button,
	createStyles,
	Grid,
	makeStyles,
	TextField,
	Theme,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			marginTop: theme.spacing(2)
		}
	})
);
export const CommentInput = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState('Comment');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<form noValidate autoComplete="off" className={classes.root}>
			<Grid
				container
				justify="space-between"
				alignItems="center"
				wrap="wrap"
			>
				<TextField
					multiline
					fullWidth
					id="outlined-multiline-flexible"
					label="Add comment"
					variant="outlined"
					rowsMax={4}
					value={value}
					onChange={handleChange}
				/>
				<Button color="primary">Publish</Button>
			</Grid>
		</form>
	);
};
