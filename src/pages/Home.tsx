import React from 'react';
import { PostForFeed } from '../components/Posts/PostForFeed';

const PostProps = {
	img1: '/static/images/cards/card1.jpeg',
	img2: '/static/images/cards/card2.jpeg'
};

export const Home = () => {
	// useEffect(() => {
	// 	db.collection('users')
	// 		.get()
	// 		.then(querySnapshot => {
	// 			for (const doc of querySnapshot.docs) {
	// 				console.log(doc.id);
	// 				console.log(doc.data());
	// 			}
	// 		})
	// 		.catch(error => {
	// 			console.error('Error adding document:', error);
	// 		});
	// }, []);
	// const handleClick = () => {
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
			{Object.values(PostProps).map(img => (
				<PostForFeed key={img} image={img} />
			))}
		</div>
	);
};
