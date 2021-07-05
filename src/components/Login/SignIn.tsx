import React, { FormEvent, useContext, useState } from 'react';
import {
	Button,
	Collapse,
	Container,
	createStyles,
	CssBaseline,
	Grid,
	Link,
	makeStyles,
	TextField,
	Theme,
	Typography
} from '@material-ui/core';
import { Loader } from '../UI/Loader';
import { Redirect } from 'react-router';
import { app } from '../../firebase';
import { AuthContext } from '../../Auth';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			marginTop: theme.spacing(8),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		},
		form: {
			width: '100%',
			marginTop: theme.spacing(1)
		},
		submit: {
			margin: theme.spacing(3, 0, 2)
		}
	})
);
export const SignIn = () => {
	const classes = useStyles();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const submitHandler = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		try {
			await app.auth().signInWithEmailAndPassword(email, password);
			return <Redirect to={'/'} />;
		} catch (err) {
			setErrorMessage(err.message);
		} finally {
			setLoading(false);
		}
	};

	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return <Redirect to="/" />;
	}

	if (loading) {
		return <Loader />;
	}

	return (
		<Container component="main" maxWidth="xs">
			<Collapse in={Boolean(errorMessage)}>
				<Alert severity="error">{errorMessage}</Alert>
			</Collapse>
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form className={classes.form} onSubmit={submitHandler}>
					<TextField
						required
						fullWidth
						autoFocus
						variant="outlined"
						margin="normal"
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						value={email}
						onChange={e => setEmail(e.currentTarget.value)}
					/>
					<TextField
						required
						fullWidth
						variant="outlined"
						margin="normal"
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						value={password}
						onChange={e => setPassword(e.currentTarget.value)}
					/>
					<Button
						fullWidth
						type="submit"
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="/login/sign-up" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
};
