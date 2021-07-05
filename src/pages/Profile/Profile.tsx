import React, { useState } from 'react';
import {
	Avatar,
	Box,
	Button,
	Dialog,
	Grid,
	makeStyles,
	Typography
} from '@material-ui/core';
import { PostForProfile } from '../../components/Posts/PostForProfile';

const useStyles = makeStyles({
	root: {
		width: '100%'
	},
	gridListContainer: {},
	gridList: {},
	imageRootContainer: {},
	imageContainer: {
		position: 'relative',
		display: 'block',
		'&:after': {
			content: '" "',
			display: 'block',
			paddingTop: '100%'
		}
	},
	image: {
		objectFit: 'cover',
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		cursor: 'pointer'
	},
	avatarContainer: {
		width: '100%',
		maxWidth: 200,
		margin: 'auto',
		position: 'relative',
		display: 'block',
		'&:after': {
			content: '" "',
			display: 'block',
			paddingTop: '100%'
		}
	},
	avatar: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%'
	}
});
export const Profile = () => {
	const styles = useStyles();
	const [open, setOpen] = useState<boolean>(false);

	const tileData = [
		{
			img: '/static/images/cards/card1.jpeg',
			title: 'Image',
			author: 'author',
			key: '1'
		},
		{
			img: '/static/images/cards/card2.jpeg',
			title: 'Image',
			author: 'author',
			key: '2'
		},
		{
			img: '/static/images/cards/card2.jpeg',
			title: 'Image',
			author: 'author',
			key: '3'
		},
		{
			img: '/static/images/cards/card2.jpeg',
			title: 'Image',
			author: 'author',
			key: '4'
		},
		{
			img: '/static/images/cards/card2.jpeg',
			title: 'Image',
			author: 'author',
			key: '5'
		}
	];
	return (
		<>
			<Grid
				container
				direction="column"
				className={styles.root}
				spacing={2}
			>
				<Grid item container spacing={2}>
					<Grid item xs={4}>
						<div className={styles.avatarContainer}>
							<Avatar className={styles.avatar}>IMF</Avatar>
						</div>
					</Grid>
					<Grid item container xs={8} direction="column">
						<Grid item container direction="row">
							<Grid item xs={6}>
								<Typography variant="h6">janedoe_</Typography>
							</Grid>
							<Grid item xs={6}>
								<Button variant="outlined">Edit</Button>
							</Grid>
						</Grid>
						<Grid item container direction="row" spacing={2}>
							<Grid item xs={4}>
								<Grid container spacing={1}>
									<Grid item>
										<Box fontWeight="fontWeightBold">
											146
										</Box>
									</Grid>
									<Grid item>
										<Box> posts</Box>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={4}>
								<Grid container spacing={1}>
									<Grid item>
										<Box fontWeight="fontWeightBold">
											15
										</Box>
									</Grid>
									<Grid item>
										<Box> followers</Box>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={4}>
								<Grid container spacing={1}>
									<Grid item>
										<Box fontWeight="fontWeightBold">
											43
										</Box>
									</Grid>
									<Grid item>
										<Box> following</Box>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid item>
							<Typography>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit 📷✈️🏕️
							</Typography>
						</Grid>
					</Grid>
					<Grid item container spacing={1} justify="flex-end">
						<Button variant="outlined">Add post</Button>
					</Grid>
				</Grid>
				<Grid
					item
					container
					className={styles.gridListContainer}
					direction="row"
					wrap="wrap"
					spacing={1}
				>
					{tileData.map(tile => (
						<Grid key={tile.key} item xs={4}>
							<div className={styles.imageContainer}>
								<img
									src={tile.img}
									alt={tile.title}
									className={styles.image}
									onClick={() => setOpen(true)}
								/>
							</div>
						</Grid>
					))}
				</Grid>
			</Grid>
			<Dialog open={open} maxWidth="md" onClose={() => setOpen(false)}>
				<PostForProfile />
			</Dialog>
		</>
	);
};
