import React from 'react';
import {
	Theme,
	createStyles,
	makeStyles,
	useTheme
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import {
	Box,
	CardActions,
	CardHeader,
	Grid,
	useMediaQuery
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Comments } from '../Comment/Comments';
import clsx from 'clsx';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {CommentInput} from "../Comment/CommentInput";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 800,
			height: '80vh'
		},
		container: {
			height: '100%'
		},
		avatar: {
			backgroundColor: red[500]
		},
		content: {
			flex: '1 0 auto'
		},
		imageContainer: {
			width: '100%',
			position: 'relative',
			display: 'block',

			'&:after': {
				content: '" "',
				display: 'block',
				paddingTop: '100%'
			},
			'&.down-sm:after': {
				paddingTop: '70%'
			},
			'&.down-xs': {
				height: '30vh'
			}
		},
		cover: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%'
		},
		controls: {
			display: 'flex',
			alignItems: 'center',
			paddingLeft: theme.spacing(1),
			paddingBottom: theme.spacing(1)
		},
		playIcon: {
			height: 38,
			width: 38
		},
		commentsContainer: {
			overflowY: 'scroll',
			height: 'calc(80vh - 72px - 172px - 18px)',
			'&.down-xs': {
				height: 'calc(50vh - 72px - 172px - 18px)'
			}
		},
		down: {
			padding: '0 8px'
		}
	})
);

export const PostForProfile = () => {
	const classes = useStyles();
	const theme = useTheme();
	const isDownSM = useMediaQuery(theme.breakpoints.down('sm'));
	const isDownXS = useMediaQuery(theme.breakpoints.down('xs'));
	return (
		<Card className={classes.root}>
			<Grid container className={classes.container}>
				<Grid
					item
					sm={8}
					className={clsx({
						[classes.imageContainer]: true,
						'down-sm': isDownSM,
						'down-xs': isDownXS
					})}
				>
					<CardMedia
						className={classes.cover}
						image="/static/images/cards/card1.jpeg"
						title="Live from space album cover"
					/>
				</Grid>
				<Grid item container direction="column" sm={4}>
					<CardHeader
						avatar={
							<Avatar
								aria-label="recipe"
								className={classes.avatar}
							>
								R
							</Avatar>
						}
						action={
							<IconButton aria-label="settings">
								<MoreVertIcon />
							</IconButton>
						}
						title="National Geographic"
					/>

					<div
						className={clsx({
							[classes.commentsContainer]: true,
							'down-xs': isDownXS
						})}
					>
						<CardContent className={classes.content}>
							<Typography
								variant="body2"
								color="textSecondary"
							>
								Sheep are related to antelopes, cattle, muskoxen
								and goats. All of these mammals are even-toed
								ungulates — their hooves are cloven, or split
								into two toes. They are also ruminants — their
								stomachs have multiple chambers to aid
								digestion. Most sheep have large, curling horns
								that are made of keratin — the same stuff as
								fingernails.
							</Typography>
							<Typography
								variant="body2"
								color="textSecondary"
							>
								September 12, 2020
							</Typography>
							<Comments />
						</CardContent>
					</div>
					<Box component="hr" p={0} m={0} width="100%" />
					<div className={classes.down}>
						<CardActions disableSpacing>
							<IconButton aria-label="add to favorites">
								<FavoriteIcon />
							</IconButton>
							<Typography variant="subtitle1">
								150 likes
							</Typography>
						</CardActions>
						<CommentInput/>
					</div>
				</Grid>
			</Grid>
		</Card>
	);
};
