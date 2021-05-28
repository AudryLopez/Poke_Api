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

	const types = {
		normal: "Normal_Pokemon",
		fighting: "Pelea_Pokemon",
		flying: "Volador_Pokemon",
		poison: "Veneno_Pokemon",
		ground: "Tierra_Pokemon",
		rock: "Roca_Pokemon",
		bug: "Bicho_Pokemon",
		ghost: "Fantasma_Pokemon",
		steel: "Acero_Pokemon",
		fire: "Fuego_Pokemon",
		water: "Agua_Pokemon",
		grass: "planta_Pokemon",
		electric: "Eléctrico_Pokemon",
		psychic: "Psíquico_Pokemon",
		ice: "Hielo_Pokemon",
		dragon: "Dragón_Pokemon",
		dark: "Normal_Pokemon",
		fairy: "Normal_Pokemon",
		unknown: "Normal_Pokemon",
		shadow: "Normal_Pokemon",
	};

	console.log(types["poison"]);

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