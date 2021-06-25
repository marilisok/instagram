import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 400,
			marginBottom: theme.spacing(2)
		},
		media: {
			height: 0,
			paddingTop: '56.25%' // 16:9
		},
		avatar: {
			backgroundColor: red[500]
		}
	})
);

interface IPostForFeedProps {
	image: string;
}
const PostForFeed: React.FC<IPostForFeedProps> = (props: IPostForFeedProps) => {
	const classes = useStyles();
	const img = props.image;
	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title="National Geographic"
				subheader="New Zealand"
			/>
			<CardMedia
				className={classes.media}
				image={img}
				title="Paella dish"
			/>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
			</CardActions>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					Sheep are related to antelopes, cattle, muskoxen and goats.
					All of these mammals are even-toed ungulates — their hooves
					are cloven, or split into two toes. They are also ruminants
					— their stomachs have multiple chambers to aid digestion.
					Most sheep have large, curling horns that are made of
					keratin — the same stuff as fingernails.
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					September 12, 2020
				</Typography>
			</CardContent>
		</Card>
	);
};

export default PostForFeed;
