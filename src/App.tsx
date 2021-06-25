import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Layout from './components/Layout';

const App = () => (
	<Router>
		<Layout>
			<Switch>
				<Route path="/profile">
					<Profile />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Layout>
	</Router>
);
export default App;
