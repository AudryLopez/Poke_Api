import React from "react";
import imgs from "../../assets/img/types/Fuego_Pokemon.svg";
import {
	Card,
	Typography,
	CardActionArea,
	CardActions,
	CardContent,
	Button 
} from "@material-ui/core";
//import ShareIcon from "@material-ui/icons/Share";
import Style from "assets/jss/material-kit-react/components/cardsStyle";

function cards(pokemon) {
	const classes = Style();
	const { name, Img } = pokemon;
	
		return (
			<Card className={classes.root}>
				<CardActionArea>
					<img className={classes.image} src={Img}></img>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{name}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<img className={classes.imgType} src={imgs}></img>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions>
			</Card>
		);
}
export default cards;