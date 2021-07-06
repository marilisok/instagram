import React, { FormEvent, useState } from 'react';
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
import { User } from '../../services/general/model';
import { app } from '../../firebase';
import { withRouter } from 'react-router';
import { Loader } from '../UI/Loader';
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
const SignUp = ({ history }: { history: any }) => {
	const classes = useStyles();
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [username, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const submitHandler = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		if (password !== confirmPassword) {
			setLoading(false);
			setErrorMessage('Password mismatch!');
			return;
		}

		try {
			const res = await app
				.auth()
				.createUserWithEmailAndPassword(email, password);
			if (res.user) {
				const userData: User = {
					name,
					surname,
					username,
					email,
					password,
					description: '',
					id: res.user.uid
				};
				await app
					.firestore()
					.collection('/users')
					.doc(res.user.uid)
					.set(userData);
				history.push('/');
			}
		} catch (err) {
			setErrorMessage(err.message);
		} finally {
			setLoading(false);
		}
	};

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
					Sign Up
				</Typography>
				<form className={classes.form} onSubmit={submitHandler}>
					<TextField
						required
						fullWidth
						autoFocus
						variant="outlined"
						margin="normal"
						id="name"
						label="Name"
						name="name"
						value={name}
						onChange={e => setName(e.currentTarget.value)}
					/>
					<TextField
						required
						fullWidth
						autoFocus
						variant="outlined"
						margin="normal"
						id="surname"
						label="Surname"
						name="surname"
						value={surname}
						onChange={e => setSurname(e.currentTarget.value)}
					/>
					<TextField
						required
						fullWidth
						autoFocus
						variant="outlined"
						margin="normal"
						id="accountName"
						label="Account Name"
						name="accountName"
						value={username}
						onChange={e => setUserName(e.currentTarget.value)}
					/>
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
					<TextField
						required
						fullWidth
						variant="outlined"
						margin="normal"
						name="confirmPassword"
						label="Confirm Password"
						type="password"
						id="confirmPassword"
						value={confirmPassword}
						onChange={e =>
							setConfirmPassword(e.currentTarget.value)
						}
					/>
					<Button
						fullWidth
						type="submit"
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign Up
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="/login/sign-in" variant="body2">
								{'Do you have an account? Sign In'}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
};

export default withRouter(SignUp);
