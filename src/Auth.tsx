import React, { createContext, useEffect, useState } from 'react';
import { app } from './firebase';
import { Loader } from './components/UI/Loader';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }: { children: any }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [pending, setPending] = useState(true);

	useEffect(() => {
		app.auth().onAuthStateChanged(user => {
			// @ts-ignore
			setCurrentUser(user);
			setPending(false);
		});
	}, []);

	if (pending) {
		return <Loader />;
	}

	return (
		<AuthContext.Provider
			// @ts-ignore
			value={{
				currentUser
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
