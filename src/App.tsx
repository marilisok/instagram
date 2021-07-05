import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile/Profile';
import { Layout } from './components/Layout';
import { SignIn } from './components/Login/SignIn';
import { AuthProvider } from './Auth';
import { PrivateRoute } from './PrivateRoute';
import SignUp from './components/Login/SignUp';

export const App = () => (
	<AuthProvider>
		<Router>
			<Layout>
				<Switch>
					<PrivateRoute exact path="/" component={Home} />
					<PrivateRoute exact path="/profile" component={Profile} />
					<Route exact path="/login/sign-in">
						<SignIn />
					</Route>
					<Route exact path="/login/sign-up">
						<SignUp />
					</Route>
				</Switch>
			</Layout>
		</Router>
	</AuthProvider>
);
