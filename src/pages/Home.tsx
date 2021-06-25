import React, {useEffect} from 'react';
import {db} from '../firebase';
import PostForFeed from '../components/Posts/PostForFeed';

const PostProps = {
	img1: '/static/images/cards/card1.jpeg',
	img2: '/static/images/cards/card2.jpeg'
};

const Home = () => {
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

	// A const handleClick = () => {
	// 	db.collection('users')
	// 		.add({
	// 			first: 'Ada',
	// 			last: 'Lovelace',
	// 			born: 1815
	// 		})
	// 		.then(docRef => {
	// 			console.log('Document written with ID:', docRef.id);
	// 		})
	// 		.catch(error => {
	// 			console.error('Error adding document:', error);
	// 		});
	// };

	return (
		<div className="App">
			<PostForFeed image={PostProps.img1} />
			<PostForFeed image={PostProps.img2} />
		</div>
	);
};

export default Home;
