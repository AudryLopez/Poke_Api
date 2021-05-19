import React, { useEffect, useState } from "react";
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
import Style from "../../assets/jss/components/cardStyle";

function Pokemon() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const classes = Style();

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<Grid item container justify="space-around">
				<Grid item container xs={12} sm={8}>
					<Grid container spacing={2}>
						{items.map((pokemon) => {
							<Grid item xs={4}>
								<Card className={classes.root} variant="outlined">
									<CardHeader title={pokemon.name} />
									<CardMedia
										className={classes.media}
										image={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.entry_number}.png`}
									/>
									<CardContent>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p">
											Hola!
										</Typography>
									</CardContent>
									<CardActions disableSpacing>
										<img
											className={classes.imgen}
											src={imgs}
											alt="Pokemon logo"
										/>
										<IconButton aria-label="share">
											<ShareIcon />
										</IconButton>
									</CardActions>
								</Card>
							</Grid>
	})}
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default Pokemon;
