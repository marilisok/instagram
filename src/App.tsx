import React, {useEffect} from 'react';
import {db} from './firebase';

const App = () => {
	useEffect(() => {
		db.collection('users')
			.get()
			.then(querySnapshot => {
				for (const doc of querySnapshot.docs) {
					console.log(doc.id);
					console.log(doc.data());
				}
			})
			.catch(error => {
				console.error('Error adding document:', error);
			});
	}, []);

	const handleClick = () => {
		db.collection('users')
			.add({
				first: 'Ada',
				last: 'Lovelace',
				born: 1815
			})
			.then(docRef => {
				console.log('Document written with ID:', docRef.id);
			})
			.catch(error => {
				console.error('Error adding document:', error);
			});
	};

	return (
		<div className="App">
			<header className="App-header">Instagram</header>
			<button type="button" onClick={handleClick}>
				Add user
			</button>
		</div>
	);
};

export default App;
