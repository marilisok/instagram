import firebase from 'firebase';

firebase.initializeApp({
	apiKey: 'AIzaSyCdULcMsO6M_9k9V0NHPsOQRsnTyFNAvOU',
	authDomain: 'instagram-edeab.firebaseapp.com',
	projectId: 'instagram-edeab',
	storageBucket: 'instagram-edeab.appspot.com',
	messagingSenderId: '183003570377',
	appId: '1:183003570377:web:7aa11a53113c20884e2d18'
});

const db = firebase.firestore();

export {db};
