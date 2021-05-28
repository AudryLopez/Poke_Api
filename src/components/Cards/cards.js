import React from "react";
import imgs from "../../assets/img/types/Fuego_Pokemon.svg";
import {
	Grid,
	Card,
	Typography,
	CardHeader,
	CardContent,
	CardMedia,
	CardActions,
	IconButton,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import Style from "assets/jss/material-kit-react/components/cardsStyle";

function cards(pokemon) {
	const classes = Style();
	const { name, Img } = pokemon;

		return (
			<Grid item xs={4}>
				<Card className={classes.root} variant="outlined">
					<CardHeader title={name} />
					<CardMedia className={classes.media} image={Img} />
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							Hola!
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<img className={classes.imgen} src={imgs} alt="Pokemon logo" />
						<IconButton aria-label="share">
							<ShareIcon />
						</IconButton>
					</CardActions>
				</Card>
			</Grid>
		);
    }
export default cards;