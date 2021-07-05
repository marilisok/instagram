import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';
import { PrivateRouteProps } from './services/general/model';

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
	component: RouteComponent,
	...rest
}) => {
	// @ts-ignore
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser);

	return (
		<Route
			{...rest}
			render={routeProps =>
				currentUser ? (
					<RouteComponent {...routeProps} />
				) : (
					<Redirect to={'/login/sign-in'} />
				)
			}
		/>
	);
};
